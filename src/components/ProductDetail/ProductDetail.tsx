"use client";
import { ProductDetailType } from "@/utils/productType";
import { useState } from "react";
import { ProductBenefits } from "../ProductOverview/ProductOverview";
import ProductBottomSheet from "./ProductBottomSheet";
import ProductCouponOffers from "./ProductCouponOffers";
import ProductInfo from "./ProductInfo";
import ProductVarient from "./ProductVarient";
import ProductDelivery from "./ProductDelivery";

export default function ProductDetail({
  product,
}: {
  product: ProductDetailType;
}) {
  const [selectedVarientId, setSelectedVarientId] = useState(1);
  const [selectedFlavour, setSelectedFlavour] = useState(
    product?.varients?.[0]?.flavor[0]
  );
  return (
    <div className="flex flex-col gap-[32px] max-lg:gap-6">
      <ProductInfo
        product={product}
        selectedVarientId={selectedVarientId}
        selectedFlavour={selectedFlavour}
      />
      <ProductVarient
        product={product}
        selectedFlavour={selectedFlavour}
        selectedVarientId={selectedVarientId}
        setSelectedFlavour={setSelectedFlavour}
        setSelectedVarientId={setSelectedVarientId}
      />
      <ProductCouponOffers />
      <ProductDelivery price={Number(product?.varients?.[0]?.sellingPrice)} />
      <div className="lg:hidden w-full">
        <ProductBenefits id={product?.id} information={product?.information} />
      </div>
      <ProductBottomSheet
        product={product}
        selectedVarientId={selectedVarientId}
        selectedFlavour={selectedFlavour}
      />
    </div>
  );
}
