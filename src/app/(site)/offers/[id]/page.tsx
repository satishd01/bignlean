"use client";
import { Products } from "@/components/shop-by-brands/ShopByBrands";
import CustomPageWrapper from "@/components/Wrappers/CustomPageWrapper";
import { useGetOfferProducts } from "@/queries/dataHandlers";
import { useParams } from "next/navigation";

type Props = {};

export default function Page({}: Props) {
  // Extracting 'id' from the URL params
  const { id } = useParams<{ id: string }>() ?? {};

  // Ensure that 'id' is a valid number before making the API call
  const offerId = id ? Number(id) : null;

  // Only call the query if offerId is valid
  const { data } = offerId ? useGetOfferProducts(offerId) : { data: null };

  return (
    <CustomPageWrapper className="flex flex-col items-center gap-10">
      {data?.offer?.image && (
        <img
          src={data?.offer?.image}
          alt="offer"
          className="max-w-full w-fit h-[250px] object-cover"
        />
      )}
      <Products isOffer={true} products={data?.offer?.products} />
    </CustomPageWrapper>
  );
}
