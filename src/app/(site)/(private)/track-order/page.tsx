"use client";
import { ProccessingIcon } from "@/Icons";
import { OutlinedButton } from "@/components";
import Loader from "@/components/Loader/Loader";
import CustomPageWrapper from "@/components/Wrappers/CustomPageWrapper";
import { useAppContext } from "@/provider/ContextProvider/ContextProvider";
import { useCancelOrder, useGetAllOrder } from "@/queries/Order";

export default function Page() {
  const { userData } = useAppContext();
  const { data, isLoading } = useGetAllOrder(userData?.id as number);

  return (
    <CustomPageWrapper
      heading="Track Order"
      className="relative flex flex-col gap-8"
      headingClass="mb-0"
    >
      {data?.data?.orders?.length > 0 ? (
        data?.data?.orders?.map((order: TrackOrder) => (
          <div key={order?.id} className="w-full flex flex-col gap-4">
            <p className="w-full text-end text-black text-sm not-italic font-medium max-[1000px]:top-0 max-[450px]:static">
              AWB Tracking no: {order?.trackingID || "in process"}
            </p>
            <div className="flex flex-col gap-[22px]">
              <OrderCard order={order} userId={userData?.id} />
            </div>
          </div>
        ))
      ) : isLoading ? (
        <Loader />
      ) : (
        <></>
      )}
    </CustomPageWrapper>
  );
}

const OrderCard = ({ order, userId }: { order: TrackOrder; userId: any }) => {
  return (
    <div className="sm-3 bg-white rounded-lg p-[30px] max-[550px]:p-3">
      <div className="flex gap-2 mb-7">
        <ProccessingIcon />
        <div className="flex flex-col gap-1">
          <span className="text-blue-900 text-center text-base not-italic font-semibold">
            {order?.status} - {order?.orderID}
          </span>
          <span className="text-gray-500 text-center text-xs not-italic font-medium">
            On {new Date(order?.createdAt).toDateString()}
          </span>
        </div>
      </div>
      <div className="flex gap-8 max-[1000px]:gap-4 max-[860px]:flex-col max-[600px]:gap-5">
        <ProductDetailCard order={order} userId={userId} />
        <ProcessingCard />
      </div>
    </div>
  );
};

const ProductDetailCard = ({
  order,
  userId,
}: {
  order: TrackOrder;
  userId: any;
}) => {
  const { mutate: cancelOrder } = useCancelOrder();
  return (
    <div className="flex gap-6 items-center">
      <img
        src="/assets/product.png"
        alt="product"
        className="w-[100px] max-[1000px]:w-[80px] max-[600px]:w-[50px]"
      />
      <div className="flex flex-col gap-4 w-[195px] max-[1000px]:w-[170px] max-[860px]:flex-1 max-[860px]:flex-row max-[860px]:justify-between max-[860px]:items-center max-[450px]:flex-col">
        <div className="flex flex-col gap-2">
          <p className="text-black text-base not-italic font-medium max-[1000px]:text-sm">
            {order?.product[0].name}
          </p>
          <p className="text-black text-sm not-italic font-normal opacity-40">
            {order?.product[0].weight}- {order?.product[0].flavor}
          </p>
        </div>
        {order?.status !== "Cancelled" && (
          <OutlinedButton
            onClick={() =>
              cancelOrder({ data: { waybill: order?.trackingID }, userId })
            }
            label="Cancel"
            className="mt-auto py-[8px] px-[10px] self-start max-[860px]:mt-0"
          />
        )}
      </div>
    </div>
  );
};

const ProcessingCard = () => {
  return (
    <div className="flex flex-1 h-full justify-between relative max-[450px]:flex-col max-[450px]:items-start  max-[450px]:justify-center max-[450px]:gap-5">
      {/* <div className="w-[80%] absolute top-[50%] left-[50%] translate-x-[-50%] h-[5px] bg-[#2AD957] max-[450px]:h-[80%] max-[450px]:translate-y-[-50%] max-[450px]:w-[3px]  max-[450px]:left-[110px]"></div> */}
      <ProcessingCompleteCard text="Order Confirmed" date="pending" />
      {/* <ProcessingCompleteCard text="Shipped" date="Thu, 08 Aug" />
      <ProcessingCompleteCard text="Out For Delivery" date="Sat, 10 Aug" />
      <ProcessingCompleteCard text="Delivered" date="Sat, 10 Aug" /> */}
    </div>
  );
};

const ProcessingCompleteCard = ({
  completed = false,
  text,
  date,
}: {
  completed?: boolean;
  text: string;
  date: string;
}) => {
  return (
    <div className="flex flex-col items-center z-50 max-[550px]:scale-95 max-[450px]:flex-row max-[450px]:gap-4 ">
      <div>
        <p className="text-black text-sm not-italic font-normal mb-1 max-[600px]:text-xs">
          {date}
        </p>
        {/* <p className="mb-4 text-gray-500 text-center not-italic font-normal text-[10px] max-[450px]:mb-0">
          2:35 AM
        </p> */}
      </div>
      <div className="w-[55px] max-[550px]:w-[44px] bg-white flex items-center justify-center">
        <img
          src={
            completed
              ? `/assets/track/completed.png`
              : `/assets/track/process.png`
          }
          alt="completed"
          className="w-[44px] max-[550px]:w-[34px]"
        />
      </div>
      <p className="mt-6 text-black text-base not-italic font-medium max-[1000px]:text-sm max-[600px]:text-xs max-[450px]:mt-0">
        {text}
      </p>
    </div>
  );
};

type TrackOrder = {
  id: number;
  user: number;
  product: [
    {
      id: number;
      catId: number;
      subCatId: number;
      name: string;
      price: number;
      sellingPrice: number;
      premiumPrice: number;
      expireDate: string;
      isBestSeller: boolean;
      weight: number;
      stock: number;
      flavor: string;
      images: string[];
      qty: number;
    }
  ];
  address: number;
  usedCoupon: boolean;
  coupon: number | string;
  couponDiscount: number;
  amount: number;
  qty: number[];
  paymentMethod: string;
  transactionId: string | number;
  usedBGLCash: boolean;
  bglCash: number;
  earnedBglCash: number;
  shiping: number;
  totalAmount: number;
  orderID: string;
  trackingID: string | number;
  status: string;
  createdAt: string;
  updatedAt: string;
};
