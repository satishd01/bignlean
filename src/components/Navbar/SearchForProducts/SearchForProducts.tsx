"use client";
import Searchbar from "@/components/SearchBar/Searchbar";
import {
  useAppContext,
  useDispatchContext,
} from "@/provider/ContextProvider/ContextProvider";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import TrendingSearches from "./TrendingSearches/TrendingSearches";
import RecentSearch from "./RecentSearch/RecentSearch";

export default function SearchForProducts() {
  const router = useRouter();
  const pathname = usePathname(); // Get current route
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTrendSearch = async () => {
      const response = await fetch(
        `https://bignlean.shellcode.cloud/search?q=${searchValue}`
      );
      const result = await response.json();
      setData(result?.products || []);
    };
    if (searchValue) {
      fetchTrendSearch();
    }
  }, [searchValue]);

  const { recentSearchToggle } = useAppContext();
  const dispatch = useDispatchContext();
  const ref = useRef<HTMLDivElement | null>(null);

  function selectProductFn(id: number, name: string) {
    setSearchValue("");
    dispatch({ type: "RECENT_SEARCH_TOGGLE_OFF" });
    router.push(`/product/${encodeURIComponent(name)}?id=${id}`);
  }

  function closeSearch() {
    dispatch({ type: "RECENT_SEARCH_TOGGLE_OFF" });
    setIsFocused(false);
  }

  // Close search box when clicking outside
  useEffect(() => {
    const outsideClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        closeSearch();
      }
    };
    document.addEventListener("mousedown", outsideClick);
    return () => {
      document.removeEventListener("mousedown", outsideClick);
    };
  }, []);

  // Toggle recent search panel when input has value
  useEffect(() => {
    if (searchValue) {
      dispatch({ type: "RECENT_SEARCH_TOGGLE_ON" });
    }
  }, [searchValue]);

  // Close search when navigating to another page
  useEffect(() => {
    closeSearch();
  }, [pathname]); // Runs whenever route changes

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <div ref={ref} className="relative w-[438px] max-[500px]:w-full">
      <Searchbar
        setSearchValue={setSearchValue}
        className="w-full"
        label="products"
        value={searchValue}
        handleFocus={handleFocus}
      />
      {isFocused && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[100]"
          onClick={closeSearch}
        ></div>
      )}
      {searchValue && recentSearchToggle && (
        <div className="absolute top-full bg-white py-4 px-5 w-full max-h-[500px] overflow-y-auto sm-1 rounded-xl translate-y-[5px] z-[100]">
          <h3 className="text-black text-lg not-italic font-semibold mb-4">
            Search Result
          </h3>
          <div>
            {data.length > 0 ? (
              data.map((product: any) => (
                <div
                  onClick={() => selectProductFn(product.id, product.name)}
                  className="py-2 flex items-center gap-2 cursor-pointer"
                  key={product.id}
                >
                  <div>
                    <img
                      src={product.images?.[0]}
                      alt={product.name}
                      className="aspect-square w-20 h-20 rounded-lg"
                    />
                  </div>
                  <div>
                    <p>{product.name}</p>
                    <p className="font-light text-gray-500">
                      {product.weight}-{product.flavor}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div>No Product found...</div>
            )}
          </div>
        </div>
      )}
      {isFocused && (
        <div className="absolute top-full bg-white py-4 px-5 w-full max-h-[500px] overflow-y-auto sm-1 rounded-xl translate-y-[5px] z-[101]">
          <RecentSearch />
          <div className="h-[1px] w-[90%] bg-black opacity-10 mx-auto my-6"></div>
          <TrendingSearches />
        </div>
      )}
    </div>
  );
}