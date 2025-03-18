"use client";

import {
  useAppContext,
  useDispatchContext,
} from "@/provider/ContextProvider/ContextProvider";
import { ProductDetailType } from "@/utils/productType";
import DetailCard from "./DetailCard";
import OverviewCard from "./OverviewCard";
import ProductCertificate from "./ProductCertificate";
import ReviewCard from "./ReviewCard";
// import SimilarProducts from "../ProductDetail/SimilarProducts";
import { SectionHeader, SliderWrapper } from "@/components";
// import { Categories } from "@/utils/Schemas";
import { SwiperSlide } from "swiper/react";
import { useRouter } from "next/navigation";
import {
  BestsellerIcon,
  StarIcon,
  ThunderIcon,
  TrashIcon,
  WhishlistIcon,
} from "@/Icons";
import WishlistIconWhite from "@/Icons/WishlistIconWhite";
import { useAddToCartList } from "@/queries/Cart";
import { useAddToWishList, useRemoveFormWishList } from "@/queries/Product";
import { ProductDataType } from "@/utils/Types";
import { useQueryClient } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PrimaryButton from "../Buttons/PrimaryButton";

type Props = {
  productData?: ProductDataType;
  pathname?: string;
  fullidth?: boolean;
  isOffer?: boolean;
};
export function SimilarProductCard({
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
      ? `${urlPath}/product/${encodeURIComponent(product?.name)}?productId=${product?.id
      }`
      : `/product/${encodeURIComponent(product?.name)}?id=${product?.id}`;
    return (
      <div
        className={`rounded-[15px] sm-3 relative shadow-lg min-h-[340px] max-h-[340px] flex flex-col  min-w-[220px] max-sm:w-[250px] p-3  border ${fullidth ? "max-sm:w-full" : ""
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
              className="text-black line-clamp-2  not-italic font-medium  cursor-pointer"
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

const VegIcon = () => (
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

export default function ProductFooter({

  product,
}: {
  product: ProductDetailType;
}) {
  const { activeProductTab } = useAppContext();

  return (
    <>
      <div className="flex flex-col gap-10">
        <ProductTab />
        {activeProductTab === "Overview" && (
          <OverviewCard overview={product?.overView} />
          //         <>
          //         <div className="flex gap-7">
          //          <div className="w-full">

          //       <div className="border-[1px] p-4 rounded-lg border-gray-300 bg-[#f3f4f9]">

          //         <div className="flex flex-col">
          //        <div>
          //         <ul role="list" className="list-disc p-2 ms-6 ">
          //           <li className="text-[#77777d]  text-[14px] not-italic font-[500] mb-2">
          //           "INFORMED CHOICE, UK, LABDOOR, USA & TRUSTIFIED- TESTED & CERTIFIED It has been regularly & rigorously tested, certified by Informed Choice Program U.K., Labdoor USA, Trustified for Accuracy of label Claims (Protein content, no amino spiking) & Purity (free from heavy metals or biological contaminants)"
          //           </li>
          //           <li className="text-[#77777d]  text-[14px] not-italic font-[500] mb-2">
          //           MB Biozyme Performance Whey comes with a proprietary international patent-pending Enhanced Absorption Formula (EAF ®) that ensures 50% higher protein absorption & 60% superior BCAA absorption when compared to other whey proteins
          //           </li>
          //           <li className="text-[#77777d]  text-[14px] not-italic font-[500] mb-2">
          //         The leading Biozyme range by MuscleBlaze ® are India's first clinically-tested Whey Protein offerings which have been tested & proven for their efficacy (absorption & muscle-building) on Indian bodies
          //           </li>
          //           <li className="text-[#77777d]  text-[14px] not-italic font-[500] mb-2">
          //         Biozyme Performance Whey is also widely recommended since it significantly lowers any possible stomach discomfort in body-building consumers by enabling enhanced protein digestion
          //           </li>
          //           <li className="text-[#77777d]  text-[14px] not-italic font-[500] mb-2">
          //       Biozyme Performance Whey delivers 25g of protein per serving and is powered by all-imported, highest grade, international quality Whey Protein Concentrate
          //           </li>

          //         </ul>
          //        </div>

          //         </div>
          //       </div>
          //          </div>
          //          <div>
          //           <div className="border-r-4 h-[100%]  border-gray-300 ">
          //             <h5 className="text-black text-base not-italic font-bold mb-3">
          //               Seller Information
          //             </h5>
          //             <div>
          // <p className="text-black text-[14px] font-[600] mb-3">Sold & Marketed By: <span className="text-[#00b5b7] text-[12px] font-[500]">Bright Lifecare Pvt Ltd</span> <span className="text-[#77777d] text-[12px] font-[500]">Fulfilled by MuscleBlaze</span> </p>
          // <p className="text-black text-[14px] font-[600] mb-3">Manufactured By : <span className="text-[#77777d] text-[12px] font-[500]">Sapiens Labs, Village Dhana Bagbania, P.O. Manpura,Tehsil Nalagarh , Solan (Himachal Pradesh), 174101, Email: care@healthkart.com</span> </p>
          // <p className="text-black text-[14px] font-[600] mb-3">Brand <span className="text-[#00b5b7] text-[12px] font-[500]">MuscleBlaze</span> </p>
          // <p className="text-black text-[14px] font-[600] mb-3">Customer Care Details: <br />
          //  <span className="text-[#77777d] text-[12px] font-[500]">Contact: 0124-461-64444
          // </span> <br />
          // <span className="text-[#77777d] text-[12px] font-[500]">Email: <span className="text-[#00b5b7] text-[12px] font-[500]">care@healthkart.com</span>
          // </span>
          //  </p>
          // <p className="text-black text-[14px] font-[600] mb-3">Grievance Officer:
          //  <br />
          //  <span className="text-[#77777d] text-[12px] font-[500]">Brahm Rishi Sharma
          // </span> <br />
          //  <span className="text-[#77777d] text-[12px] font-[500]">Designation: General Manager - Customer Service
          // </span> <br />
          // <span className="text-[#77777d] text-[12px] font-[500]">Email: <span className="text-[#00b5b7] text-[12px] font-[500]"> grievance.redressal@brightlifecare.com</span>
          // </span>
          //  <br />
          //  <span className="text-[#77777d] text-[12px] font-[500]">Contact: <span></span>
          // </span>
          //  </p>
          //             </div>
          //           </div>
          //          </div>
          //     </div>
          //         </>
        )}
        {activeProductTab === "Details" && (
          <DetailCard
            details={product?.details}
            information={product?.tables}
            supplements={product?.supplements}
          />
        )}
        {activeProductTab === "Certificate" && (
          <ProductCertificate certificates={product?.certificates} />
        )}
        {activeProductTab === "Reviews" && <ReviewCard product={product} />}
        <div>
          <div className="w-[1200px] mx-auto mt-[20px] max-[1200px]:w-full flex flex-col gap-[10px]">
            <SectionHeader
              label={`Similar Products `}
              showBtn
              btnLabel="View all"
            />
            <SliderWrapper
              slidePerView={4}
            >
              <SwiperSlide
                className="min-h-full min-w-[200px]  "
              >
                <SimilarProductCard productData={product} pathname="product" fullidth={true} isOffer={false} />
              </SwiperSlide>
              <SwiperSlide
                className="min-h-full min-w-[200px] "
              >
                <SimilarProductCard productData={product} pathname="product" fullidth={true} isOffer={false} />
              </SwiperSlide>
              <SwiperSlide
                className="min-h-full min-w-[200px]  "
              >
                <SimilarProductCard productData={product} pathname="product" fullidth={true} isOffer={false} />
              </SwiperSlide>
              <SwiperSlide
                className="min-h-full min-w-[200px]  "
              >
                <SimilarProductCard productData={product} pathname="product" fullidth={true} isOffer={false} />
              </SwiperSlide>
              <SwiperSlide
                className="min-h-full min-w-[200px]  "
              >
                <SimilarProductCard productData={product} pathname="product" fullidth={true} isOffer={false} />
              </SwiperSlide>
              <SwiperSlide
                className="min-h-full min-w-[200px]  "
              >
                <SimilarProductCard productData={product} pathname="product" fullidth={true} isOffer={false} />
              </SwiperSlide>

            </SliderWrapper>
          </div>
        </div>
      </div>
    </>
  );
}

const tabs = ["Overview", "Details", "Certificate", "Reviews"];

const ProductTab = () => {
  const { activeProductTab } = useAppContext();
  const dispatch = useDispatchContext();
  return (
    <div className="flex items-center w-[700px] max-[700px]:w-full max-[700px]:flex-wrap ">
      {tabs?.map((tab) => (
        <button
          key={tab}
          onClick={() => dispatch({ type: "ACTIVE_PRODUCT_TAB", payload: tab })}
          className={`text-xl ${activeProductTab === tab ? "  " : ""
            } flex-1`}
        >
          <p className={activeProductTab === tab ? "p-3 text-[#00b5b7] border-b-4 border-[#00b5b7]" : "border-b-4 border-[#dbdee9] p-3"}>
            {tab}
          </p>
        </button>
      ))}
    </div>
  );
};
