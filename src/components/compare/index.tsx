"use client";
import { CrossIcon } from "@/Icons";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import CustomPageWrapper from "@/components/Wrappers/CustomPageWrapper";
import { useAppContext } from "@/provider/ContextProvider/ContextProvider";
import { useGetProductDetail } from "@/queries/Cart";
import { useGetAllProducts } from "@/queries/dataHandlers";
import { ProductDataType } from "@/utils/Types";
import { ProductDetailType } from "@/utils/productType";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function ComparePage() {
  const params = useSearchParams();
  const productId = params?.get("productId");
  const { data, isLoading, error } = useGetAllProducts({});
  const [productA, setProductA] = useState<any>(null);
  const [productB, setProductB] = useState<any>(null);

  useEffect(() => {
    console.log("productId:", productId);
    console.log("data:", data);
    console.log("isLoading:", isLoading);
    console.log("error:", error);

    if (productId && data?.products) {
      const products = data.products as ProductDataType[];
      console.log("products array:", products);

      // Set productA
      const defaultProduct = products?.find(
        (product) => product.id === Number(productId)
      );
      console.log("defaultProduct (productA):", defaultProduct);
      if (defaultProduct) {
        const filterData = {
          price: defaultProduct?.varients?.[0]?.sellingPrice,
          weight: defaultProduct?.varients?.[0]?.units,
          brand: defaultProduct?.brand?.heading,
          rating: defaultProduct?.averageRating,
        };
        defaultProduct?.overView?.forEach((item: any) => {
          filterData[item?.nutrients] = item.value;
        });
        console.log("filterData for productA:", filterData);
        setProductA(filterData);
      } else {
        console.log("Product with ID", productId, "not found in products");
      }
    }
  }, [productId, data, isLoading, error]); // Removed productB from dependencies

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error loading products: {(error as Error).message}</div>;
  }

  return (
    <CustomPageWrapper heading="Comparison">
      <div className="flex flex-col">
        <div className="flex items-center pb-10 max-sm:pb-3">
          <div className="lg:flex-1 max-lg:w-[33%]"></div>
          <ProductsCompareInfo
            products={data?.products}
            defaultProductId={productId}
            setProductData={setProductA}
          />
          <ProductsCompareInfo
            products={data?.products}
            defaultProductId={null}
            setProductData={setProductB}
          />
        </div>
        {productA ? (
          <ComparisonTable productA={productA} productB={productB} />
        ) : (
          <p>No products selected for comparison.</p>
        )}
        <div className="flex items-center">
          <div className="flex-1"></div>
          <div className="flex-1 py-5 border-r border-l flex items-center justify-center">
            {productA && (
              <PrimaryButton
                label="Add to Cart"
                className="max-sm:text-xs px-1"
              />
            )}
          </div>
          <div className="flex-1 py-5 flex items-center justify-center">
            {productB && (
              <PrimaryButton
                label="Add to Cart"
                className="max-sm:text-xs px-1"
              />
            )}
          </div>
        </div>
      </div>
    </CustomPageWrapper>
  );
}

export const ProductsCompareInfo = ({
  products,
  setProductData,
  defaultProductId = null,
}: {
  products: ProductDataType[];
  setProductData: any;
  defaultProductId: any;
}) => {
  const [showList, setShowList] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { userData } = useAppContext();
  const [product, setProduct] = useState<number | null>(defaultProductId);
  const { data, dataUpdatedAt } = useGetProductDetail(
    product as number,
    userData?.id as number
  );

  const allFilterData: any[] = useMemo(
    () =>
      products?.filter((product: any) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      ) ?? [],
    [products, searchValue]
  );

  useEffect(() => {
    if (data) {
      const product: ProductDetailType = data?.data?.result;
      const filterData = {
        price: product?.varients?.[0]?.sellingPrice,
        weight: product?.varients?.[0]?.units,
        brand: product?.brand?.heading,
        rating: product?.averageRating,
      };
      product?.overView?.forEach((item: any) => {
        filterData[item?.nutrients] = item.value;
      });
      console.log("Selected product data:", filterData);
      setProductData(filterData);
    }
  }, [dataUpdatedAt, setProductData]);

  return (
    <div className="lg:flex-1 min-h-[200px] max-lg:w-[33%] flex items-center justify-center p-2">
      {product ? (
        <ProductCard
          productsDetails={data?.data?.result}
          setProduct={setProduct}
          setProductData={setProductData}
        />
      ) : (
        <div className="relative mx-auto border shadow bg-white rounded-md">
          <input
            placeholder="Search products"
            type="search"
            onFocus={() => setShowList(true)}
            onChange={(e) => setSearchValue(e.target.value)}
            className="border-none outline-none bg-white p-2 w-full rounded-md"
          />
          {allFilterData && showList && (
            <div className="w-full py-1 bg-white border absolute max-h-[300px] overflow-y-auto shadow-md top-full left-0">
              {allFilterData?.map((product, index) => (
                <div
                  onClick={() => {
                    setProduct(product?.id);
                    setShowList(false);
                  }}
                  key={index}
                  className="w-full grid grid-cols-[max-content_1fr] gap-3 items-center text-start p-2 cursor-pointer"
                >
                  <div>
                    <img
                      src={product?.images[0]}
                      alt={product?.name}
                      className="aspect-square w-12 h-12 rounded-lg"
                    />
                  </div>
                  <div className="text-xs">
                    <p>{product?.name}</p>
                    <p className="font-light text-gray-500">
                      {product?.varients?.[0]?.units}-
                      {product?.varients?.[0]?.flavor?.[0]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const ProductCard = ({
  setProduct,
  setProductData,
  productsDetails,
}: {
  setProduct: any;
  setProductData: any;
  productsDetails: any;
}) => {
  return (
    <div className="flex flex-col items-center h-full">
      <div className="relative shadow-md border rounded-lg bg-white p-3 w-[200px] max-[500px]:w-full mb-2">
        <img
          src={productsDetails?.images?.[0]}
          alt="product"
          className="w-full h-full max-w-[250px] aspect-square object-fill"
        />
        <button
          onClick={() => {
            setProduct(null);
            setProductData(null);
          }}
          className="absolute top-1 right-1"
        >
          <CrossIcon />
        </button>
      </div>
      <h3 className="text-black text-center text-lg max-sm:text-xs not-italic font-semibold mb-1">
        {productsDetails?.name.slice(0, 30)}
      </h3>
      <p className="text-black text-base flex max-sm:text-xs items-center gap-2 not-italic font-normal">
        <span>{productsDetails?.weight}</span>
        <span>{productsDetails?.flavor}</span>
      </p>
    </div>
  );
};

export const ComparisonTable = ({
  productA = {},
  productB = {},
}: {
  productA: any;
  productB: any;
}) => {
  const allKeys = Array.from(
    new Set([
      ...(productA ? Object.keys(productA) : []),
      ...(productB ? Object.keys(productB) : []),
    ])
  ).sort();
  console.log("productA in table:", productA);
  console.log("productB in table:", productB);
  console.log("allKeys:", allKeys);

  return (
    <div className="w-full">
      {allKeys.length > 0 ? (
        allKeys.map((key) => (
          <div key={key} className="w-full grid grid-cols-3 items-center">
            <div
              className={`p-3 font-medium text-2xl max-sm:text-sm capitalize border-b border-r`}
            >
              {key}
            </div>
            <div
              className={`p-3 border-b text-gray-700 text-2xl max-sm:text-sm border-r text-center ${
                key.toLowerCase() === "price"
                  ? "text-[#E70F0F] font-semibold"
                  : "font-normal"
              }`}
            >
              {productA && productA[key] !== undefined
                ? `${key.toLowerCase() === "price" ? "₹" : ""}${productA[key]}`
                : "-"}
            </div>
            <div
              className={`p-3 border-b text-gray-700 text-2xl max-sm:text-sm text-center ${
                key.toLowerCase() === "price"
                  ? "text-[#E70F0F] font-semibold"
                  : "font-normal"
              }`}
            >
              {productB && productB[key] !== undefined
                ? `${key.toLowerCase() === "price" ? "₹" : ""}${productB[key]}`
                : "-"}
            </div>
          </div>
        ))
      ) : (
        <p>No data available to compare</p>
      )}
    </div>
  );
};