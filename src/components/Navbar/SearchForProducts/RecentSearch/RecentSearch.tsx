import RecentSearchItem from "./RecentSearchItem";
import { useState } from "react";
import Link from "next/link";

type RecentSearchList = {
  searchKey: string;
  category: string;
};

const recentSearchList: RecentSearchList[] = [
  {
    searchKey: "MuscleBlaze",
    category: "In all categories",
  },
  {
    searchKey: "Whey Proteins",
    category: "In all categories",
  },
  {
    searchKey: "TrueBasics",
    category: "In all categories",
  },
  {
    searchKey: "Creatine",
    category: "In all categories",
  },
  {
    searchKey: "Mass Gainers",
    category: "In all categories",
  },
];

export default function RecentSearch() {
  const [showAll, setShowAll] = useState(false);

  const displayedItems = showAll ? recentSearchList : recentSearchList.slice(0, 3);

  return (
    <>
      <div className="flex flex-col gap-4">
        <div>
           <h5 style={{color: "#000", fontSize: "16px", fontWeight: "600",}}>
             Trending Searches
            </h5>
        </div>
        {displayedItems?.map((searchItem) => (
          <RecentSearchItem 
            key={searchItem.searchKey} 
            searchItem={searchItem} 
          />
        ))}
        {recentSearchList.length > 3 && (
          <div>
            <button 
              className="text-[#00b5b7] text-sm not-italic font-medium show-more"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show less" : "Show more"}
            </button>
          </div>
        )}
        <div>
          <div >
            <div className="flex justify-between items-center mb-2">
              <h5 className="" style={{color: "#000", fontSize: "16px", fontWeight: "600",}}>
              Trending Products
            </h5>
            <Link href="/shop-by-brands" className="text-[#00b5b7] text-sm not-italic font-medium show-more">See All</Link>
            </div>
          <div className="flex justify-between items-center  gap-2">
              <Link href="/product/Muscletech%20NitroTech%20100%25%20Whey%20Gold%20Performance%20Series?id=13">
                <div>
                 <img src="/assets/wallet/right.png" alt="wallet" style={{height:"100px", background:"#e3e1e1", padding:"10px", borderRadius:"5px", marginBottom:"6px"}}  />
                 <div>
                  <h5 style={{    fontSize: "12px", fontWeight: "500",color: "#1c1c28", overflow: "hidden",}} >
                    MuscleBlaze Biozyme Performance   
                  </h5>
                  <p>
                    <span style={{fontSize: "15px", fontWeight: "500",color: "#1c1c28",
    marginRight: "4px"}}> ₹ 4899 </span>
                    <span style={{fontSize: "15px", fontWeight: "500",color: "#77777e",
    marginRight: "4px", textDecoration:"line-through"}}> ₹ 4899 </span>
                  </p>
                 </div>
              </div>
              </Link>
              <Link href="/product/Muscletech%20NitroTech%20100%25%20Whey%20Gold%20Performance%20Series?id=13">
              <div >
                 <img src="/assets/wallet/right.png" alt="wallet" style={{height:"100px", background:"#e3e1e1", padding:"10px", borderRadius:"5px", marginBottom:"6px"}}  />
                 <div>
                  <h5 style={{    fontSize: "12px", fontWeight: "500",color: "#1c1c28", overflow: "hidden",}} >
                    MuscleBlaze Biozyme Performance   
                  </h5>
                  <p>
                    <span style={{fontSize: "15px", fontWeight: "500",color: "#1c1c28",
    marginRight: "4px"}}> ₹ 4899 </span>
                    <span style={{fontSize: "15px", fontWeight: "500",color: "#77777e",
    marginRight: "4px", textDecoration:"line-through"}}> ₹ 4899 </span>
                  </p>
                 </div>
              </div>
              </Link>
              <Link href="/product/Muscletech%20NitroTech%20100%25%20Whey%20Gold%20Performance%20Series?id=13">
              <div>
                 <img src="/assets/wallet/right.png" alt="wallet" style={{height:"100px", background:"#e3e1e1", padding:"10px", borderRadius:"5px", marginBottom:"6px"}}  />
                 <div>
                  <h5 style={{    fontSize: "12px", fontWeight: "500",color: "#1c1c28", overflow: "hidden",}} >
                    MuscleBlaze Biozyme Performance   
                  </h5>
                  <p>
                    <span style={{fontSize: "15px", fontWeight: "500",color: "#1c1c28",
    marginRight: "4px"}}> ₹ 4899 </span>
                    <span style={{fontSize: "15px", fontWeight: "500",color: "#77777e",
    marginRight: "4px", textDecoration:"line-through"}}> ₹ 4899 </span>
                  </p>
                 </div>
              </div>
              </Link>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}