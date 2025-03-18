"use client";
import { ReactNode } from "react";
// Import Swiper React components
import { Swiper, SwiperProps } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode } from "swiper/modules";
import SliderBtn from "../SliderButtons/SliderBtn";

type Props = {
  children: ReactNode;
  slidePerView?: number;
  showBtns?: boolean;
  breakpoints?: SwiperProps["breakpoints"]; // Add breakpoints to the Props type
};

export default function SliderWrapper({
  children,
  slidePerView,
  showBtns = false,
  breakpoints, // Destructure breakpoints from props
}: Props) {
  return (
    <Swiper
      slidesPerView={slidePerView || 3}
      spaceBetween={30}
      freeMode={true}
      modules={[FreeMode]}
      className="mySwiper mx-auto w-full relative"
      wrapperClass="flex gap-5"
      breakpoints={breakpoints} // Pass breakpoints to Swiper
    >
      {showBtns && (
        <>
          <SliderBtn next={true} />
          <SliderBtn next={false} />
        </>
      )}
      {children}
    </Swiper>
  );
}