"use client";
import {  SearchBarIcon } from "@/Icons";
import Link from "next/link";

type Props = {
  searchItem: {
    searchKey: string;
    category: string;
  };
};
export default function RecentSearchItem({ searchItem }: Props) {
  
  
  return (
    <>
    <div className="flex items-center gap-5">
      <SearchBarIcon />
      <Link href={`/product/Muscletech%20NitroTech%20100%25%20Whey%20Gold%20Performance%20Series?id=13`}>
        <div>
        <p style={{fontSize: "14px",fontWeight: "500",color: "#1c1c28",}} >
          {searchItem?.searchKey}
        </p>
        <p style={{fontSize: "12px",fontWeight: "500",color: "rgba(28, 28, 40, .7)",}}>
          {searchItem?.category}
        </p>
      </div>
      </Link>
      
      
    </div>
 
    </>
  );
}
