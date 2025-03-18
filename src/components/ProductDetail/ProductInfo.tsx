"use client";
import { ShareIcon, StarIcon, WhishlistIcon } from "@/Icons";
import WishlistIconWhite from "@/Icons/WishlistIconWhite";
import {
  useAppContext,
  useDispatchContext,
} from "@/provider/ContextProvider/ContextProvider";
import { useAddToCartList } from "@/queries/Cart";
import {
  useAddToWishList,
  useGEtWishList,
  useRemoveFormWishList,
} from "@/queries/Product";
import { Varient } from "@/utils/Types";
import { ProductDetailType } from "@/utils/productType";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { OutlinedButton } from "..";
import PrimaryButton from "../Buttons/PrimaryButton";

export default function ProductInfo({
  product,
  selectedVarientId,
  selectedFlavour,
}: {
  product: ProductDetailType;
  selectedVarientId: number;
  selectedFlavour: string;
}) {
  const router = useRouter();
  const { mutate: addToCart } = useAddToCartList();
  const { userData } = useAppContext();
  const dispatch = useDispatchContext();
  const [quantity, setQuantity] = useState(1); // Correctly defined here
  const [adding, setAdding] = useState(false);

  const addCartHandler = () => {
    setAdding(true);
    addToCart(
      {
        user: userData?.id || 1,
        product: product?.id,
        qty: quantity, // Using quantity here
        flavour: selectedFlavour,
        varientId: selectedVarientId,
      },
      {
        onSuccess: () => {
          toast.success("Product added Successfully!!!");
        },
        onSettled: () => {
          setAdding(false);
        },
      }
    );
  };

  const buyNowHandler = () => {
    setAdding(true);
    addToCart(
      {
        user: userData?.id || 1,
        product: product?.id,
        qty: quantity, // Using quantity here
        flavour: selectedFlavour,
        varientId: selectedVarientId,
      },
      {
        onSuccess: () => {
          router.push("/cart");
        },
        onSettled: () => {
          setAdding(false);
        },
      }
    );
  };

  const varient = product.varients.find(
    (varient) => varient.id === selectedVarientId
  );

  return (
    <div>
      <p className="text-green-700 text-xl not-italic font-normal">
        {product?.brand?.heading}
      </p>
      <h2 className="text-black text-2xl not-italic font-semibold mb-4">
        {product?.brand?.body}
      </h2>
      <ProductRating
        productId={product?.id}
        userId={userData?.id || 1}
        rating={product?.totalRating}
        avgRating={product?.averageRating}
      />
      <div className="flex items-center justify-between">
        <PriceCard varient={varient as Varient} className="mb-3" />
        <OutlinedButton
          label="+ Compare"
          className="hidden max-[890px]:block"
          onClick={() => {
            router.push(`/comparison?productId=${product?.id}`);
          }}
        />
      </div>
      <div className="max-[450px]:hidden">
        <QuantityCard
          maxQuantity={Number(varient?.stock || 0)}
          quantity={quantity} // Correctly passed here
          setQuantity={setQuantity}
        />
      </div>
      <div className="flex gap-3 whitespace-nowrap mt-6 w-[85%] max-lg:flex-col lg:justify-between max-[1220px]:w-full max-[450px]:hidden">
        <OutlinedButton
          disable={adding}
          loading={adding}
          onClick={addCartHandler}
          label="ADD TO CART"
          className="flex-1"
        />
        <PrimaryButton
          disable={adding}
          loading={adding}
          onClick={buyNowHandler}
          label="BUY NOW"
          className="flex-1"
        />
      </div>
    </div>
  );
}

const ProductRating = ({
  rating,
  avgRating,
  productId,
  userId,
}: {
  rating: number;
  avgRating: number;
  userId: number;
  productId: number;
}) => {
  const queryClient = useQueryClient();
  const { userData } = useAppContext();
  const { data, dataUpdatedAt } = useGEtWishList(Number(userData?.id));
  const { mutate: addToWishList } = useAddToWishList();
  const { mutate: removeFromWishList } = useRemoveFormWishList();
  const [isWishListed, setIsWishListed] = useState<boolean>(false);

  useEffect(() => {
    const prod = data?.filteredList.find((pro: any) => pro.id === productId);
    if (prod) {
      setIsWishListed(true);
    }
  }, [dataUpdatedAt]);

  const addToWishlist = (e: any) => {
    e.stopPropagation();
    setIsWishListed(true);
    addToWishList(
      { productId: productId as number, userId: userData?.id as number },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["all-Products"] });
          queryClient.invalidateQueries({ queryKey: ["wishlist"] });
          toast.success("Product added to wishlist Successfully!!!");
        },
        onError: () => {
          if (!userData?.id) {
            toast.error("please login first...");
          } else {
            toast.error("something went wrong");
          }
          setIsWishListed(false);
        },
      }
    );
  };

  const removeWish = (e: any) => {
    e.stopPropagation();
    setIsWishListed(false);
    removeFromWishList(
      { productId: productId as number, userId: userData?.id as number },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["all-Products"] });
          queryClient.invalidateQueries({ queryKey: ["wishlist"] });
          toast.success("Product removed from wishlist Successfully!!!");
        },
        onError: () => {
          setIsWishListed(true);
        },
      }
    );
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {avgRating > 0 && (
          <>
            <StarIcon />
            <p className="text-black text-xl not-italic font-bold">
              {avgRating}
            </p>
            <span className="text-black text-base not-italic font-medium opacity-30">
              ({rating} Reviews)
            </span>
          </>
        )}
      </div>
      <div className="flex items-center gap-2">
        <button>
          <ShareIcon />
        </button>
        <button className="">
          {isWishListed ? (
            <div onClick={removeWish}>
              <WhishlistIcon />
            </div>
          ) : (
            <div onClick={addToWishlist}>
              <WishlistIconWhite />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

const PriceCard = ({
  className,
  varient,
}: {
  className?: string;
  varient: Varient;
}) => {
  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        <p className="text-black text-base not-italic font-normal line-through opacity-30 mb-2">
          ₹{varient?.premiumPrice}
        </p>
        <p className="text-green-500 text-xs not-italic font-semibold mb-2">
          {percentOffCalc(
            Number(varient?.premiumPrice),
            Number(varient?.sellingPrice)
          )}
          % off
        </p>
      </div>
      <p className="text-gradient text-3xl not-italic font-bold">
        ₹{varient?.sellingPrice}
      </p>
      <p className="text-black text-xs not-italic font-normal">
        Inclusive of all taxes
      </p>
    </div>
  );
};

export const percentOffCalc = (premiumPrice: number, sellingPrice: number) => {
  const priceDiff = premiumPrice - sellingPrice;
  const percentOff = (priceDiff / premiumPrice) * 100;
  return percentOff.toFixed(0);
};

export const QuantityCard = ({
  setQuantity,
  quantity,
  maxQuantity,
}: {
  setQuantity: any;
  quantity: number;
  maxQuantity: number;
}) => {
  const decreaseHandler = () => {
    setQuantity(quantity === 1 ? 1 : quantity - 1);
  };
  const increaseHandler = () => {
    setQuantity(quantity <= maxQuantity ? quantity + 1 : quantity);
  };
  return (
    <div>
      <p className="text-black text-lg not-italic font-semibold mb-3 max-[450px]:hidden">
        Quantity:
      </p>
      <div className="flex items-center gap-5">
        <button
          onClick={decreaseHandler}
          className="w-[24px] h-[24px] shadow-md border text-gradient flex items-center justify-center rounded-sm bg-white"
        >
          -
        </button>
        <p className="text-black text-sm not-italic font-semibold">
          {quantity < 10 ? `0${quantity}` : quantity}
        </p>
        <button
          onClick={increaseHandler}
          className="w-[24px] h-[24px] shadow-md border text-gradient flex items-center justify-center rounded-sm bg-white"
        >
          +
        </button>
      </div>
    </div>
  );
};