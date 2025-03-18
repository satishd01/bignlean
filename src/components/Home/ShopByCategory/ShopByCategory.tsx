"use client";
import { SectionHeader, SliderWrapper } from "@/components";
import { Categories } from "@/utils/Schemas";
import { SwiperSlide } from "swiper/react";
import ShopCategoryCard from "./ShopCategoryCard";

export default function ShopByCategory({
  categoriesData,
}: {
  categoriesData: Categories[];
}) {
  return (
    <div className="w-[1200px] mx-auto mt-[60px] 
        max-[1200px]:w-full 
        flex flex-col gap-[40px] 
        md:mt-[40px] md:gap-[30px] 
        sm:mt-[30px] sm:gap-[20px] 
        sm:px-4">
      <SectionHeader label="Shop by category" showBtn={true} btnLabel="Show all" />
      <SliderWrapper
        slidePerView={5}
        showBtns={categoriesData?.length > 5 ? true : false}
        breakpoints={{
          640: { slidesPerView: 3 }, // Tablet: 640px and up
          0: { slidesPerView: 2 }, // Mobile: below 640px
        }}
      >
        {categoriesData &&
          categoriesData.length > 0 &&
          categoriesData.map((category) => (
            <SwiperSlide
              key={category?.id}
              className="min-h-full min-w-[200px] !mr-0 aspect-square 
                md:min-w-[150px] 
                sm:min-w-[120px]"
            >
              <ShopCategoryCard
                key={category.id}
                id={category?.id}
                image={category.imageOn}
                label={category.name}
              />
            </SwiperSlide>
          ))}
      </SliderWrapper>
    </div>
  );
}
