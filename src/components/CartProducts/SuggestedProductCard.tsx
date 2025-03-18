import { TrashIcon } from "@/Icons";
import PrimaryButton from "../Buttons/PrimaryButton";
import { ProductDataType } from "@/utils/Types";
import { useAddToCartList } from "@/queries/Cart";
import { useAppContext } from "@/provider/ContextProvider/ContextProvider";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function SuggestedProductCard({
  product,
  className,
}: {
  className?: string;
  product: ProductDataType;
}) {
  const { userData } = useAppContext();
  const { mutate: addToCart, isPending } = useAddToCartList();
  const queryClient = useQueryClient();
  const varient = product?.varients[0];
  return (
    <div className={`flex items-start gap-4 ${className}`}>
      <img src="/assets/product.png" alt="product" className="w-[40px]" />
      <div>
        <p className="text-black line-clamp-2 text-sm not-italic font-medium">
          {product?.brand?.heading}- {product?.brand?.body}
        </p>
        <p className="text-black text-[10px] not-italic font-normal opacity-40">
          {varient?.units} - {varient.flavor}
        </p>
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <p className="text-black text-[10px] not-italic font-normal line-through opacity-40">
            ₹{varient.sellingPrice}
          </p>
          <p className="text-black text-xs not-italic font-bold">₹3,449.00</p>
          <p className="text-green-500 text-xs not-italic font-medium">
            Save ₹{" "}
            {Number(varient?.premiumPrice) - Number(varient?.sellingPrice)}
          </p>
        </div>
        <PrimaryButton
          className="w-fit h-fit"
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
          label="+Add "
        />
      </div>
    </div>
  );
}
