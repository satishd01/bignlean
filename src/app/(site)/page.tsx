"use client";
import {
  DownloadBanner,
  HomeCarosoul,
  ProductSection,
  Quotes,
  ShopByBrands,
  ShopByCategory,
} from "@/components";
import SearchForProducts from "@/components/Navbar/SearchForProducts/SearchForProducts";
import { useAppContext } from "@/provider/ContextProvider/ContextProvider";
import { useGEtWishList } from "@/queries/Product";
import {
  useGetAllBanners,
  useGetAllBrands,
  useGetAllCategories,
  useGetAllHomeProducts,
} from "@/queries/dataHandlers";
import Link from "next/link";

export default function Home() {
  const { data: brandsData } = useGetAllBrands();
  const { data: bannersData } = useGetAllBanners();
  const { data: categoriesData } = useGetAllCategories();
  const { data: homeProducts } = useGetAllHomeProducts();
  const { userData } = useAppContext();
  useGEtWishList(userData?.id as number);

  // Updated toggleAccordion function with null checks
  function toggleAccordion(index: number) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);

    // Safely check if content and icon exist before accessing their properties
    if (content && icon) {
      // SVG for Down icon
      const downSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
          <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
        </svg>
      `;

      // SVG for Up icon
      const upSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
          <path fill-rule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
        </svg>
      `;

      // Toggle the content's max-height for smooth opening and closing
      if (content.style.maxHeight && content.style.maxHeight !== '0px') {
        content.style.maxHeight = '0';
        icon.innerHTML = upSVG;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.innerHTML = downSVG;
      }
    }
  }

  return (
    <div className="max-sm:pb-10">
      <div className="hidden justify-center max-[750px]:flex mb-4 max-[500px]:px-5">
        <SearchForProducts />
      </div>
      <HomeCarosoul bannersData={bannersData?.banner} />
      <div className="max-xl:w-[95%] mx-auto">
        <div>
          <ShopByBrands brandsData={brandsData?.brands} />
        </div>
        <div>
          <ShopByCategory categoriesData={categoriesData?.categories} />
        </div>
        <div className="block sm:hidden">
          <div className="border-b border-slate-200">
            <button
              onClick={() => toggleAccordion(1)}
              className="w-full flex justify-between items-center py-1 text-slate-800"
            >
              <span>What is Material Tailwind?</span>
              <span
                id="icon-1"
                className="text-slate-800 transition-transform duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
            <div
              id="content-1"
              className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div className="pb-5 text-sm text-slate-500">
                <div className="border-b border-slate-200">
                  <button
                    onClick={() => toggleAccordion(2)}
                    className="w-full flex justify-between items-center py-1 text-slate-800"
                  >
                    <span>How to use Material Tailwind?</span>
                    <span
                      id="icon-2"
                      className="text-slate-800 transition-transform duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    id="content-2"
                    className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
                  >
                    <div className="pb-5 text-sm text-slate-500">
                      You can use Material Tailwind by importing its components into your Tailwind CSS project.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-slate-200">
            <button
              onClick={() => toggleAccordion(3)}
              className="w-full flex justify-between items-center py-1 text-slate-800"
            >
              <span>How to use Material Tailwind?</span>
              <span
                id="icon-3"
                className="text-slate-800 transition-transform duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
            <div
              id="content-3"
              className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div className="pb-5 text-sm text-slate-500">
                You can use Material Tailwind by importing its components into your Tailwind CSS project.
              </div>
            </div>
          </div>
        </div>

        <Quotes
          authorName="Michael John Bobak"
          quote="“All progress takes place outside the comfort zone.”"
        />

        {homeProducts?.data
          ?.filter((item: any) => item.type === "Single")
          .map((item: any, index: number) => (
            <ProductSection
              key={index}
              products={item?.products}
              sectionName={item?.name}
              expiryTime={item?.expireDateTime || null}
              type={item?.type}
            />
          ))}

        {homeProducts?.data
          ?.filter((item: any) => item.type === "Combo")
          .map((item: ComboType, index: number) => (
            <div
              key={item.id}
              className="flex flex-col gap-2 py-10 w-[1200px] mx-auto mt-[60px] max-[1200px]:w-full max-xl:px-5"
            >
              <p className="font-semibold text-2xl">{item.name}</p>
              <div className="w-full grid grid-cols-4 gap-5">
                {item.products.map((combo) => (
                  <Link key={combo.id} href={`/combo/${combo?.id}`}>
                    <div className="w-full aspect-square rounded">
                      <img
                        src={combo.image}
                        alt="offer"
                        className="object-cover rounded w-full h-full"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}

        <Quotes
          authorName="Arnold Schwarzenegger"
          quote="“There are no shortcuts. Everything is reps, reps, reps.”"
        />

        <div className="max-[1100px]:hidden">
          <DownloadBanner />
        </div>
      </div>
    </div>
  );
}

export type ComboType = {
  id: number;
  name: string;
  type: "Single" | "Combo";
  products: {
    id: number;
    image: string;
    name: string;
  }[];
  isForLimitedTime: boolean;
  expireDateTime: string;
  createdAt: string;
  updatedAt: string;
};
