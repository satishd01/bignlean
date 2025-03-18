"use client";
import CustomFilter, { CustomRadioFilter } from "./CustomFilter";
import { useGetAllBrands } from "@/queries/dataHandlers";

export default function FilterBy() {
  const { data: brandsData } = useGetAllBrands();
  const brandsId = brandsData?.brands?.map((brand: any) => brand?.name);

  return (
    <div className="max-[1000px]:hidden">
      <h2 className="mb-5">Filter By</h2>
      <div className="flex flex-col gap-3 ">
        <CustomFilter filterOptions={["Bestseller"]} />
        {/* <CustomFilter
          search={true}
          heading="By Brand"
          filterOptions={brandsId}
        /> */}
        <CustomRadioFilter
          heading="Discount"
          radioFilters={radioFilterDiscount}
          paramName="discountPercent"
        />
        <CustomRadioFilter
          heading="Ratings"
          radioFilters={radioFilterRating}
          paramName="minRating"
        />
        <CustomRadioFilter
          heading="Price"
          radioFilters={radioFilterPrice}
          paramName="priceRanges[]"
        />

        {/* <CustomFilter filterOptions={["Exclude out of stock"]} /> */}
        {/* <RelatedProduct /> */}
      </div>
    </div>
  );
}

const radioFilterPrice = [
  { value: "0 - 99999", label: "0 - above" },
  { value: "500 - 1500", label: "500 - 1500" },
  { value: "1500 - 3000", label: "1500 - 3000" },
  { value: "3000 - 7000", label: "3000 - 7000" },
  { value: "7000 & 99999", label: "7000 & above" },
];
const radioFilterRating = [
  { value: "4", label: "4 Ratings & above" },
  { value: "3", label: "3 Ratings & above" },
  { value: "2", label: "2 Ratings & above" },
  { value: "1", label: "1 Ratings & above" },
  { value: "0", label: "any" },
];
const radioFilterDiscount = [
  { value: "0", label: "0% and above" },
  { value: "20", label: "20% and above" },
  { value: "30", label: "30% and above" },
  { value: "40", label: "40% and above" },
];
