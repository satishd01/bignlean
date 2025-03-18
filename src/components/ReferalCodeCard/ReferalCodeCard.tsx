"use client";
import { CopyIcon } from "@/Icons";
import { useAppContext } from "@/provider/ContextProvider/ContextProvider";

export default function ReferalCodeCard() {
  const { userData } = useAppContext();

  return (
    <div className="flex flex-col gap-3">
      <p className="text-center text-xs not-italic font-bold text-gradient">
        YOUR REFERRAL CODE
      </p>
      <div
        onClick={() => {
          // navigator?.clipboard.writeText(userData?.referCode as string);
        }}
        className="flex px-[30px] py-4 rounded-lg border border-dashed border-red-500 gap-4 bg-[#FFEEEC] cursor-pointer"
      >
        <p className="text-center text-xl not-italic font-semibold text-gradient">
          {userData?.referCode}
        </p>
        <CopyIcon />
      </div>
    </div>
  );
}
