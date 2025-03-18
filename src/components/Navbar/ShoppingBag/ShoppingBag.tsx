import { ShoppingBagIcon } from "@/Icons";
import { useAppContext } from "@/provider/ContextProvider/ContextProvider";
import { useGetCartList } from "@/queries/Cart";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ShoppingBag() {
  const { userData } = useAppContext();
  const [hasItems, setHasItems] = useState(false);
  const { data: cartList, dataUpdatedAt } = useGetCartList(
    userData?.id as number
  );
  useEffect(() => {
    if (cartList?.data.cartItems) {
      setHasItems(true);
    } else {
      setHasItems(false);
    }
  }, [dataUpdatedAt]);

  return (
    <Link href={"/cart"}>
      <div className={`relative`}>
        {cartList?.data.cartItems.length > 0 ? (
          <div className="absolute text-[10px]  top-[-5px] right-[-5px] p-2 bg-red-600 h-2 text-white flex items-center justify-center w-2 rounded-full">
            {cartList?.data.cartItems.length}
          </div>
        ) : (
          ""
        )}
        <ShoppingBagIcon />
      </div>
    </Link>
  );
}
