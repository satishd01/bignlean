"use client";
import {
  FilterBy,
  HomeCarosoul,
  OutlinedButton,
  ProductCard,
} from "@/components";
import CustomPageWrapper from "@/components/Wrappers/CustomPageWrapper";
import { useAppContext } from "@/provider/ContextProvider/ContextProvider";

import { useGetAllBanners, useGetAllProducts } from "@/queries/dataHandlers";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function ShopByBrandPage() {
  const parmas = useSearchParams();
  const category = parmas.get("category");
  const { filterProductsParams, selectedBrands } = useAppContext();
  const [sorting, setSorting] = useState<string | null>(null);
  const { data: bannersData } = useGetAllBanners();

  const { data: allProducts, refetch } = useGetAllProducts(
    { ...filterProductsParams, sorting: sorting?.trimStart(), category },
    selectedBrands as string
  );
  return (
    <CustomPageWrapper className="w-[1400px] px-5">
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-1 col-start-1 max-xl:hidden">
          <FilterBy />
        </div>
        <div className="col-span-3 col-start-2 max-xl:col-span-4 max-xl:col-start-1 flex flex-col items-center gap-4 px-5">
          <div className="max-[1000px]:hidden">
            <HomeCarosoul
              bannersData={
                selectedBrands && !selectedBrands?.includes("&")
                  ? [{ id: 1, web: allProducts?.brandDetails?.banner }]
                  : bannersData?.banner || []
              }
              className="!w-[1000px]"
            />
          </div>
          {selectedBrands && !selectedBrands?.includes("&") && (
            <div className="w-full ">
              <p className="text-black text-start  text-[28px] max-sm:text-lg not-italic font-semibold">
                {allProducts?.brandDetails?.name}
              </p>

              <p>{allProducts?.brandDetails?.description}</p>
            </div>
          )}
          <div className="w-full flex mt-1 items-center justify-between border-t">
            <p className="text-black text-center text-2xl max-sm:text-base not-italic font-semibold">
              {selectedBrands
                ? allProducts?.brandDetails?.name
                : "All Products"}
              <span className="text-black text-lg max-sm:text-sm not-italic font-normal">
                ({allProducts?.products.length} Items)
              </span>
            </p>
            <div>
              <select
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  setSorting(e.target.value)
                }
                className="p-[10px] max-sm:w-[100px] max-sm:p-1 max-sm:text-sm border border-gray-400 rounded-md"
              >
                <option value="">Sort By</option>
                <option value=" P-lth">Price Low to High</option>
                <option value=" P-htl">Price HIgh to Low</option>
                <option value=" D-lth">Discount Low to High</option>
                <option value=" D-htl">Discount HIgh to Low</option>
                <option value=" Rating">Rating</option>
              </select>
            </div>
          </div>
          <Products products={allProducts?.products} />
          {/* <Pagination /> */}
          <EndFooter />
        </div>
      </div>
    </CustomPageWrapper>
  );
}

const VarityCard = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`border-[2px] text-black text-center text-xs not-italic font-medium cursor-pointer rounded-[12px] p-2 ${
        active ? "text-gradient border-red-400" : ""
      }`}
    >
      {label}
    </div>
  );
};

const Pagination = () => {
  return (
    <div className="flex items-center gap-3 my-10">
      <PaginationButton label="<" />
      <PaginationButton label="1" />
      <PaginationButton label="2" className="max-[500px]:hidden" />
      <PaginationButton label="3" active className="max-[500px]:hidden" />
      <PaginationButton label=".." />
      <PaginationButton label="8" className="max-[500px]:hidden" />
      <PaginationButton label="9" className="max-[500px]:hidden" />
      <PaginationButton label="10" />
      <PaginationButton label=">" />
    </div>
  );
};
const PaginationButton = ({
  label,
  active,
  className,
}: {
  label: string;
  active?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={`w-[32px] h-[32px] rounded-full flex items-center justify-center text-xs not-italic font-semibold cursor-pointer border-[1px] ${
        active
          ? "border-red-500 text-white linear-gradient-1"
          : "border-red-500 text-gradient"
      } ${className}`}
    >
      {label}
    </div>
  );
};

export const Products = ({
  products,
  isOffer = false,
}: {
  products: any;
  isOffer?: boolean;
}) => {
  return (
    <div className="my-5 custom-grid2 w-full">
      {products?.map((item: any, index: number) => (
        <ProductCard
          isOffer={isOffer}
          fullidth
          productData={item}
          key={index}
        />
      ))}
    </div>
  );
};

const EndFooter = () => {
  return (
    <div className="border-[2px] border-gray-300 p-4 rounded-lg flex flex-col gap-5">
      <p className="text-black text-base not-italic font-medium">
        As a leading brand in the science nutrition space, MuscleTech® has a
        rich history of partnering with top-ranked researchers to sponsor
        scientific research and novel discovery. We have always been interested
        in developing scientifically-backed products and working with top
        scientists to further our understanding of key ingredients that benefit
        countless athletes, fitness enthusiasts, and bodybuilders.
      </p>
      <p className="text-black text-base not-italic font-medium">
        Study: Burke DG, MacLean PG, Walker RA, Dewar PJ, Smith-Palmer T.
        Analysis of creatine and creatinine in urine by capillary
        electrophoresis. J Chromatogr B Biomed Sci Appl. 1999;732(2):479-85.
      </p>
      <p className="text-black text-base not-italic font-medium">
        Key Finding: Creatine is found in the urine of subjects ingesting
        creatine monohydrate as an ergogenic aid. Significant amount of creatine
        is excreted after ingestion. It can also be seen that with a higher
        dose, a larger absolute amount of creatine is retained, even though the
        fraction of the dose excreted is larger.
      </p>
    </div>
  );
};

const BrandInfo = () => {
  return (
    <div className="flex flex-col items-start">
      <h2 className="text-black text-2xl not-italic font-bold leading-9 mb-2">
        MuscleTech
      </h2>
      <p className="text-black text-sm not-italic font-medium leading-5 mb-3">
        MuscleBlaze is one of the best selling brands in India. When it comes to
        healthy, top quality and reasonable supplements. From whey protein, mass
        gainers, BCAA's to raw whey protein, MuscleBlaze has everything to
        complement your fitness
      </p>
      <OutlinedButton label="Read More" />
    </div>
  );
};
