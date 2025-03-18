"use client";
import { CoinSmIcon, Info2Icon } from "@/Icons";
import { CartProducts, SuggestedProduct } from "@/components";
import ApplyCouponCard from "@/components/ApplyCouponCard/ApplyCouponCard";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import ShippingCard from "@/components/ShippingCard/ShippingCard";
import CustomPageWrapper from "@/components/Wrappers/CustomPageWrapper";
import { makePayment } from "@/queries/razor";
import {
  useGetCartList,
  useGetCartPrice,
  useGetWalletDetail,
} from "@/queries/Cart";
import React from "react";
import Loader from "@/components/Loader/Loader";
import { usePlaceOrder } from "@/queries/Order";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RazorPayIcon } from "@/Icons/RazorPayIcon";
import { useAppContext } from "@/provider/ContextProvider/ContextProvider";

export default function Page() {
  const { userData } = useAppContext();

  const [addressErr, setAddressErr] = useState<boolean>(false);
  const [payErr, setPayErr] = useState<boolean>(false);
  const [addressId, setAddressId] = useState<any>(null);
  const [bnlCash, setBnlCash] = useState<number>(0);
  const [couponId, setCouponId] = useState<any>(null);
  const [cartParams, setCartParams] = useState({
    user: userData?.id,
    coupon: couponId,
    addressId: addressId,
  });
  const { data: cartList, isLoading } = useGetCartList(userData?.id as number);
  const { data: cartPrice } = useGetCartPrice(cartParams);
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleOptionChange = (event: any) => {
    setPaymentMethod(event.target.value);
  };
  const { mutate: placeAnOrder, isSuccess } = usePlaceOrder();
  const router = useRouter();
  useEffect(() => {
    setCartParams({
      ...cartParams,
      addressId: addressId,
      coupon: couponId,
      user: userData?.id,
    });
  }, [couponId, addressId]);

  useEffect(() => {
    if (isSuccess) {
      router.push("/track-order");
    }
  }, [isSuccess]);

  const orderHandler = async () => {
    if (!addressId) {
      setAddressErr(true);
    }
    if (!paymentMethod) {
      setPayErr(true);
    }
    if (addressId && paymentMethod) {
      setAddressErr(false);
      setPayErr(false);
      const payload: {
        userid: number;
        addressid: number;
        paymentMethod: string;
        transactionId: string | null;
        bglCash: number;
      } = {
        addressid: addressId,
        bglCash: 1,
        paymentMethod: paymentMethod,
        transactionId: paymentMethod === "COD" ? null : "",
        userid: userData?.id as number,
      };
      if (paymentMethod === "RazorPay") {
        const amount: number =
          (cartPrice?.data.totalAmount + cartPrice?.data.shiping) * 100;
        await makePayment({ payload, amount });
      } else {
        placeAnOrder(payload, {
          onSuccess: (data) => { },
          onError: (err) => { },
        });
      }
    }
  };

  useEffect(() => {
    if (addressId) {
      setAddressErr(false);
    }
    if (paymentMethod) {
      setPayErr(false);
    }
  }, [addressId, paymentMethod]);
  if (isLoading) {
    return <Loader />;
  }
  const similarProducts = cartList?.data?.semilerProduct || [];
  return (
    <CustomPageWrapper heading="Cart">
      {cartList?.data?.cartItems?.length > 0}
      {true ? (
        <>
          <SavingBanner totalSavings={cartPrice?.data?.discount} />
          <div className="flex gap-[22px] mt-6 max-[800px]:flex-col">
            <div className="flex-[0.6] flex flex-col gap-5 max-[800px]:gap-5">
              <CartProducts data={cartList?.data?.cartItems || []} />
              <SuggestedProduct similarProducts={similarProducts} />
            </div>
            <div className="flex-[0.4] flex flex-col gap-4">
              <SpareCashCard
                userId={userData?.id as number}
                setBnlCash={setBnlCash}
              />
              <ApplyCouponCard setCouponId={setCouponId} />
              <OrderCard bnlCash={bnlCash} cartPrice={cartPrice?.data} />

              <div className="bg-white  rounded-lg p-6 w-full sm-1">
                <form className="space-y-2">
                  <h2 className="text-black text-base flex items-center justify-between w-full not-italic font-semibold leading-4 mb-[22px]">
                    Payment Method{" "}
                    <span className="text-red-600">
                      {payErr && "Select a payment method"}
                    </span>
                  </h2>{" "}
                  <div className="flex cursor-pointer w-fit items-center gap-2">
                    <input
                      type="radio"
                      id="razorpay"
                      value="RazorPay"
                      checked={paymentMethod === "RazorPay"}
                      onChange={handleOptionChange}
                      className="mr-2"
                    />
                    <label
                      htmlFor="razorpay"
                      className="text-sm cursor-pointer  font-medium text-gray-700"
                    >
                      <RazorPayIcon />
                    </label>
                  </div>
                  <div className="flex cursor-pointer w-fit  items-center gap-2">
                    <input
                      type="radio"
                      id="cod"
                      value="COD"
                      checked={paymentMethod === "COD"}
                      onChange={handleOptionChange}
                      className="mr-2"
                    />
                    <label
                      htmlFor="cod"
                      className="text-lg font-extrabold cursor-pointer italic  text-[#072654]"
                    >
                      Cash on Delivery
                    </label>
                  </div>
                </form>
                <PrimaryButton
                  onClick={orderHandler}
                  label="Place a Order"
                  className="w-full mt-2 py-1"
                />
              </div>

              <ShippingCard err={addressErr} setAddressId={setAddressId} />

              <div className="flex justify-between bg-white p-4">
                <p><span className="text-black text-lg font-bold">$344</span><br />
                  <span className="text-black text-sm font-normal">Total Amount</span></p>
                <PrimaryButton
                  onClick={() => router.push("/cart")}
                  label="Proceed to Checkout"
                  className="w-[210px] h-[44px] text-sm font-normal"
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="text-center font-medium text-lg">Add items in the cart</p>
      )}
    </CustomPageWrapper>
  );
}

const SavingBanner = ({ totalSavings }: { totalSavings: number }) => {
  return (
    <p className="bg-green-500 w-full text-center text-white text-xs py-3 not-italic font-medium">
      You are saving{" "}
      <span className="text-white text-xs not-italic font-semibold ">
        ₹{totalSavings}
      </span>{" "}
      on this purchase
    </p>
  );
};

const SpareCashCard = ({
  userId,
  setBnlCash,
}: {
  userId: number;
  setBnlCash: any;
}) => {
  const [usingBnlCash, setUsingBnlCash] = useState(false);
  const { data } = useGetWalletDetail(userId);

  useEffect(() => {
    if (usingBnlCash) {
      setBnlCash(data?.data?.walletBalance);
    } else {
      setBnlCash(0);
    }
  }, [usingBnlCash]);

  return (
    <label className="flex gap-3 sm-1 cursor-pointer items-center rounded-lg bg-white p-3 px-4">
      <input
        type="checkbox"
        className="w-[18px] h-[18px] cursor-pointer"
        onChange={(e) => setUsingBnlCash(e.target.checked)}
      />
      <p className="flex items-center gap-1">
        Use {data?.data?.walletBalance || 0} <CoinSmIcon /> Bignlean cash for
        this order
      </p>
    </label>
  );
};

const UseCashCard = () => {
  return (
    <div className="sm-1 p-3 flex items-center justify-between rounded-lg bg-white">
      <div className="flex items-center gap-1">
        <p className="text-black text-sm not-italic font-normal">You earn</p>

        <p className="text-black text-sm not-italic flex items-center gap-1 font-normal">
          <CoinSmIcon /> 22 Bignlean cash on this order
        </p>
      </div>
    </div>
  );
};

const OrderCard = ({
  cartPrice,
  bnlCash,
}: {
  cartPrice: CarttPrice;
  bnlCash: number;
}) => {
  return (
    <div className="bg-white rounded-lg p-6 w-full sm-1">
      <h2 className="text-black text-base not-italic font-semibold leading-4 mb-[22px]">
        Payment Detail
      </h2>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className="text-black text-sm not-italic font-normal leading-4">
            Cart Total
          </p>
          <p className="text-black text-right text-sm not-italic font-medium">
            ₹{cartPrice?.totalAmount + cartPrice?.couponDiscount}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-black text-sm not-italic font-normal leading-4">
            Coupon Savings
          </p>
          <p className="ml-auto  text-right text-sm not-italic font-medium text-green-500">
            -₹{cartPrice?.couponDiscount}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-black text-sm not-italic font-normal leading-4">
            Shipping Charges
          </p>
          <p className="text-black text-right text-sm not-italic font-medium">
            {cartPrice?.shiping}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-black text-sm not-italic font-normal leading-4">
            Loyalty Savings
          </p>
          <p className="ml-auto  text-right text-sm not-italic font-medium text-green-500">
            -₹{bnlCash}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-black text-sm not-italic font-normal leading-4">
            Total Discount
          </p>
          <button>
            <Info2Icon />
          </button>
          <p className="ml-auto  text-right text-sm not-italic font-medium text-green-500">
            -₹ {cartPrice?.discount}
          </p>
        </div>
        <div className="w-full h-[1px] bg-gray-300"></div>
        <div className="flex items-center justify-between">
          <p className="text-black text-base not-italic font-semibold leading-4">
            Amount Payable
          </p>
          <p className="text-black text-right text-base not-italic font-semibold">
            ₹{cartPrice?.totalAmount + cartPrice?.shiping - bnlCash}
          </p>
        </div>
      </div>
    </div>
  );
};

type CarttPrice = {
  status: boolean;
  totalAmount: number;
  shiping: number;
  discount: number;
  couponDiscount: number;
  canUseBGLCash: boolean;
  afterUseBGLCash: number;
  isPremium: boolean;
};
