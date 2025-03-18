import { ShoppingBagIcon } from "@/Icons";
import { QuantityCard } from "./ProductInfo";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useState } from "react";
import Link from "next/link";
import { ProductDetailType } from "@/utils/productType";
import { useAddToCartList } from "@/queries/Cart";
import { useAppContext } from "@/provider/ContextProvider/ContextProvider";
import { redirect } from "next/navigation";

export default function ProductBottomSheet({
  product,
  selectedFlavour,
  selectedVarientId,
}: {
  product: ProductDetailType;
  selectedVarientId: number;
  selectedFlavour: string;
}) {
  const [quantity, setQuantity] = useState(1);
  const varient = product.varients.find(
    (varient) => varient.id === selectedVarientId
  );
  const { userData } = useAppContext();

  const { mutate: addToCart, isPending } = useAddToCartList();

  const buyNowHandler = () => {
    addToCart(
      {
        user: userData?.id || 1,
        product: product?.id,
        qty: quantity,
        flavour: selectedFlavour,
        varientId: selectedVarientId,
      },
      {
        onSuccess: () => {
          redirect("/cart");
        },
      }
    );
  };

  return (
    <div className="hidden max-[450px]:flex fixed bottom-[5%] left-0 z-[9999] max-sm:border-t flex-col w-full px-2 pt-3 pb-10  gap-3 bg-white">
      {/* <p className="text-black text-base not-italic font-normal">
        <span className="text-black text-base not-italic font-bold">
          Variant:
        </span>{" "}
        {product?.weight > 15 ? `${product?.weight}g` : `${product?.weight}kg`}{" "}
        {product?.flavor}
      </p> */}
      <div className="flex items-center justify-between">
        <QuantityCard
          maxQuantity={Number(varient?.stock || 0)}
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <p className="text-black text-base not-italic font-bold">
          <span className="text-black text-sm not-italic font-medium">
            Total:
          </span>{" "}
          ₹{varient?.sellingPrice}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Link href={"/cart"} className="border border-red-500 p-2 rounded-md">
          <ShoppingBagIcon />
        </Link>
        <div className="flex-1 grow">
          <PrimaryButton
            disable={isPending}
            loading={isPending}
            onClick={buyNowHandler}
            label="BUY NOW"
            className="flex-1 w-full"
          />{" "}
        </div>
      </div>
    </div>
  );
}
