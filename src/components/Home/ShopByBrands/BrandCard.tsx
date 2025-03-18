"use client";
import { useDispatchContext } from "@/provider/ContextProvider/ContextProvider";
import { useRouter } from "next/navigation";

type Props = {
  brandData: any;
  onClick?: () => void;
};

export default function BrandCard({ brandData, onClick }: Props) {
  const router = useRouter();
  const dispatch = useDispatchContext();

  const handleBrandClick = () => {
    if (brandData?.name) {
      dispatch({
        type: "SET_SELECTED_BRANDS",
        payload: `brands[]=${brandData?.id}`,
      });
      router.push("/shop-by-brands");
    }
  };

  return (
    <div
      onClick={handleBrandClick}
      className="h-full w-full  aspect-square flex items-center justify-center p-3 rounded-xl bg-gray-200 cursor-pointer"
    >
      <img
        src={brandData?.image}
        className=" w-full h-full object-contain mix-blend-multiply"
        alt="product"
      />
    </div>
  );
}
