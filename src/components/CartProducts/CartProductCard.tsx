import { TrashIcon } from "@/Icons";
import {
  useGetProductDetail,
  useRemoveFromCart,
  useUpdateQuantityFromCart,
} from "@/queries/Cart";
import { cartData } from "./CartProducts";

export default function CartProductCard({
  className,
  productDetail,
}: {
  className?: string;
  productDetail: cartData;
}) {
  const { mutate: removeFromCart } = useRemoveFromCart();
  const { data } = useGetProductDetail(productDetail?.product?.id, 1);
  const { mutate: updateQuantityFromCart } = useUpdateQuantityFromCart();
  const productData = productDetail?.product?.varients?.find(
    (varient) => varient.id === productDetail?.varientId
  );
  return (
    <div
      className={`grid sm-1 rounded-2xl bg-white items-center grid-cols-[max-content_1fr_max-content] gap-8 max-[500px]:gap-4 p-4 ${className}`}
    >
      <img
        src={data?.data?.result?.images[0]}
        alt="product"
        className="h-[100px] w-[75px]  max-sm:min-w-[50px] max-sm:h-[75px] object-cover"
      />
      <div>
        <p className="text-black text-base not-italic font-medium max-[500px]:text-sm">
          {data?.data?.result?.name}
        </p>
        <p className="text-black text-xs not-italic font-normal opacity-40">
          {productData?.units} - {productData?.flavor}
        </p>
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <p className="text-black text-xs not-italic font-normal line-through opacity-40">
            ₹{productData?.premiumPrice}
          </p>
          <p className="text-black text-sm not-italic font-bold">
            ₹{productData?.sellingPrice}
          </p>
          <p className="text-green-500 text-sm not-italic font-medium">
            Save ₹
            {Number(productData?.premiumPrice) -
              Number(productData?.sellingPrice)}
          </p>
        </div>
        <div className="flex items-center gap-[10px]">
          <button
            onClick={() =>
              updateQuantityFromCart({
                productId: productDetail?.id,
                qty: productDetail?.qty - 1,
              })
            }
            className="w-[24px] sm-3 bg-white text-gradient flex items-center justify-center rounded-sm"
          >
            -
          </button>
          <p className="text-black text-sm not-italic font-semibold">
            {productDetail?.qty}
          </p>
          <button
            onClick={() =>
              updateQuantityFromCart({
                productId: productDetail?.id,
                qty: productDetail?.qty + 1,
              })
            }
            className="w-[24px]  sm-3 bg-white text-gradient flex items-center justify-center rounded-sm"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(productDetail?.id)}
        className="ml-auto px-5"
      >
        <TrashIcon />
      </button>
    </div>
  );
}
