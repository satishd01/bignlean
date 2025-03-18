"use client";
import { SectionHeader, SliderWrapper } from "@/components";
import { Categories } from "@/utils/Schemas";
import { SwiperSlide } from "swiper/react";
import SimilarProductCard from "./SimilarProductCard";
;

export default function SimilarProducts({
  categoriesData,
}: {
  categoriesData: Categories[];
}) {
  return (
    <div className="w-[1200px] mx-auto mt-[60px] max-[1200px]:w-full flex flex-col gap-[40px]">
      <SectionHeader label="Similar Products " showBtn={true} />
      <SliderWrapper
        slidePerView={6}
        showBtns={categoriesData?.length > 5 ? true : false}
      >
        {categoriesData &&
          categoriesData.length > 0 &&
          categoriesData.map((category) => (
            <SwiperSlide
              key={category?.id}
              className="min-h-full min-w-[200px]  !mr-0 aspect-square "
            >
                <SimilarProductCard  key={category.id}
                id={category?.id}
                image={category.imageOn}
                label={category.name}/>
            
            </SwiperSlide>
          ))}
      </SliderWrapper>
    </div>
  );
}


