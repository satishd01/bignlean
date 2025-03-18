"use client";
import { useRouter } from "next/navigation";
type Props = {
  image: string;
  label: string;
  id: number;
};

export default function SimilarProductCard({ image, label, id }: Props) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/shop-by-brands?=category=${id}`)}
      className="grid grid-cols-1 grid-rows-[max-content_minmax(15px,_0px)_1fr] items-center justify-items-center rounded-xl bg-gray-200 p-5 cursor-pointer  "
    >
      <p className="text-black text-center text-lg not-italic font-bold">
        {label?.split(" ")[0]}
      </p>
      <p className="text-black not-italic font-normal mb-2 text-[10px] tracking-[6px]">
        {label?.split(" ").slice(1).join(" ")}
      </p>
      <img
        src={image}
        alt="category"
        className="aspect-video h-[100px] w-[170px] object-contain mix-blend-multiply"
      />
    </div>
  );
}

