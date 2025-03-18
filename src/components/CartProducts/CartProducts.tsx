"use client";

import { ProductDataType } from "@/utils/Types";
import CartProductCard from "./CartProductCard";

// Define and export the cartData type
export type cartData = {
  id: number;
  user: number;
  varientId: number;
  flavour: string;
  qty: number;
  mrp: number;
  product: {
    id: number;
    catId: number;
    subCatId: number;
    name: string;
    isBestSeller: boolean;
    isOnFlashSale: boolean;
    images: string[];
    overView: Array<{ value: string; nutrients: string }>;
    details: Array<{ body: string; heading: string }>;
    tables: Array<{ table: Array<{ for: string; value: string }>; title: string }>;
    information: Array<{ value: string; nutrients: string }>;
    certificates: string[];
    supplements: string[];
    brand: { body: string; heading: string };
    hit: number;
    varients: Array<{
      id: number;
      mrp: string;
      date: string;
      stock: string;
      units: string;
      flavor: string[];
      premiumPrice: string;
      sellingPrice: string;
    }>;
    createdAt: string;
    updatedAt: string;
    averageRating: number;
    discountPercentage: number;
  };
  sellingPrice: number;
  premiumPrice: number;
  createdAt: string;
  updatedAt: string;
};

export default function CartProducts({ data }: { data: cartData[] }) {
  return (
    <div className="flex flex-col p-6 gap-6">
      {data?.length > 0 &&
        data?.map((cart: cartData) => (
          <CartProductCard productDetail={cart} key={cart?.id} />
        ))}
    </div>
  );
}