"use client";
import {
  BestsellerIcon,
  StarIcon,
  ThunderIcon,
  TrashIcon,
  WhishlistIcon,
} from "@/Icons";
import WishlistIconWhite from "@/Icons/WishlistIconWhite";
import { useAppContext } from "@/provider/ContextProvider/ContextProvider";
import { useAddToCartList } from "@/queries/Cart";
import { useAddToWishList, useRemoveFormWishList } from "@/queries/Product";
import { ProductDataType } from "@/utils/Types";
import { useQueryClient } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PrimaryButton from "../Buttons/PrimaryButton";

type Props = {
  productData?: ProductDataType;
  pathname?: string;
  fullidth?: boolean;
  isOffer?: boolean;
};
const VegIcon = (  ) => (
  <svg
       width={15} height={15} fill="#00A000"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>Vegetarian Food Icon</title>
        <path d="M12 2C9.243 2 7 4.243 7 7c0 3.333 3 7 5 9 2-2 5-5.667 5-9 0-2.757-2.243-5-5-5zm0 11.5c-1.127 0-2-.873-2-2h4c0 1.127-.873 2-2 2zm0-11.5C7.373 2 3 6.373 3 11.5S7.373 21 12 21s9-4.373 9-9.5S16.627 2 12 2z" />
    </svg>
);
// const NonVegIcon = (  ) => (
//   <svg
//        width={15} height={15} fill="#FF0000"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//     >
//         <title>Vegetarian Food Icon</title>
//         <path d="M12 2C9.243 2 7 4.243 7 7c0 3.333 3 7 5 9 2-2 5-5.667 5-9 0-2.757-2.243-5-5-5zm0 11.5c-1.127 0-2-.873-2-2h4c0 1.127-.873 2-2 2zm0-11.5C7.373 2 3 6.373 3 11.5S7.373 21 12 21s9-4.373 9-9.5S16.627 2 12 2z" />
//     </svg>
// );

export default function ProductCard({
  productData,
  pathname,
  fullidth,
  isOffer,
}: Props) {
  const [product, setProduct] = useState(productData);
  const { userData } = useAppContext();
  const [isWishListed, setIsWishListed] = useState<boolean>(false);
  const router = useRouter();
  const urlPath = usePathname();
  const queryClient = useQueryClient();
  const { mutate: addToWishList } = useAddToWishList();
  const { mutate: removeFromWishList } = useRemoveFormWishList();
  const { mutate: addToCart, isPending } = useAddToCartList();
  const wishListData: any = queryClient.getQueryData(["wishlist"]);

  useEffect(() => {
    const prod = wishListData?.filteredList.find(
      (pro: any) => pro.id === product?.id
    );
    if (prod) {
      setIsWishListed(true);
    }
  }, []);

  const addWish = (e: any) => {
    e.stopPropagation();
    setIsWishListed(true);
    addToWishList(
      { productId: product?.id as number, userId: userData?.id as number },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["all-Products"] });
          queryClient.invalidateQueries({ queryKey: ["wishlist"] });
          toast.success("Product added Successfully!!!");
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
      { productId: product?.id as number, userId: userData?.id as number },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["all-Products"] });
          queryClient.invalidateQueries({ queryKey: ["wishlist"] });
          toast.success("Product removed Successfully!!!");
        },
        onError: () => {
          setIsWishListed(true);
        },
      }
    );
  };

  if (product) {
    const link = isOffer
      ? `${urlPath}/product/${encodeURIComponent(product?.name)}?productId=${
          product?.id
        }`
      : `/product/${encodeURIComponent(product?.name)}?id=${product?.id}`;
    return (
      <div
        className={`rounded-[15px] sm-3 relative shadow-lg min-h-[340px] max-h-[340px] flex flex-col  min-w-[220px] max-sm:w-[250px] p-3  border ${
          fullidth ? "max-sm:w-full" : ""
        } `}
      >
        <div className="flex items-center justify-center">
          <img
            src={product?.images[0]}
            alt="product"
            className="object-cover object-top w-auto h-[140px]"
            onClick={() => router.push(link)}
          />
        </div>
        <div>
         <div className="flex justify-between mt-2 ">
           <p
            onClick={() => router.push(link)}
            className="text-black line-clamp-2  not-italic font-medium  cursor-pointer "
          >
            {product?.name}
          </p>
         <div>
           <div className="border-1.5  h-fit border-[#00A000] ">
           <VegIcon />
           {/* <NonVegIcon /> */}
          </div>
          {/* <div className="border-1.5  h-fit border-[#FF0000] ">
           <NonVegIcon />
          </div> */}
         </div>
         </div>
          <p className="text-gray-600 text-xs">
            {product?.varients?.[0].flavor?.[0]}
          </p>
        </div>
        <div className="flex font-medium text-sm items-center gap-1">
          <StarIcon width={15} height={15} />{" "}
          {product?.averageRating?.toFixed(1)}
        </div>
        <div className="flex items-center justify-between ">
          <div>
            <p className="text-black text-xs not-italic font-medium line-through opacity-40">
              ₹ {product?.varients?.[0].premiumPrice}
            </p>
            <p className="text-black text-base not-italic font-bold">
              ₹ {product?.varients?.[0].sellingPrice}
            </p>
          </div>
          {product?.isBestSeller && (
            <div className="flex gap-1 items-center rounded-md bg-gray-100 px-2 py-1">
              <BestsellerIcon />
              <p className="text-gradient text-xs not-italic font-normal">
                Bestseller
              </p>
            </div>
          )}
        </div>
        <div className="h-[1px] bg-black opacity-5 " />
        <PrimaryButton
          className="w-full h-fit mt-auto"
          loading={isPending}
          onClick={() =>
            addToCart(
              {
                user: userData?.id as number,
                product: product?.id,
                qty: 1,
                flavour: product?.varients?.[0]?.flavor?.[0],
                varientId: product?.varients?.[0]?.id,
              },
              {
                onSuccess: (data) => {
                  queryClient.invalidateQueries({ queryKey: ["cart"] });
                  toast.success("Product added Successfully!!!");
                },
              }
            )
          }
          label="Add to cart"
        />
        <p className="absolute top-0 left-0 text-green-500 text-xs not-italic font-bold bg-[#DFF3E2] p-2 rounded-br-[15px]">
          {product?.discountPercentage?.toFixed(0)}% off
        </p>
        <button className="absolute top-3 right-3">
          {isWishListed ? (
            <div onClick={removeWish}>
              {pathname === "wishlist" ? <TrashIcon /> : <WhishlistIcon />}
            </div>
          ) : (
            <div onClick={addWish}>
              <WishlistIconWhite />
            </div>
          )}
        </button>
        {product?.isOnFlashSale && (
          <div className="absolute top-12 right-4">
            <ThunderIcon />
          </div>
        )}
      </div>
    );
  }
  return <></>;
}
