"use client";
import { useGEtCouponsList } from "@/queries/Product";
import { useEffect, useState } from "react";

export default function ApplyCouponCard({ setCouponId }: { setCouponId: any }) {
  const { data } = useGEtCouponsList();
  const [coupon, setCoupon] = useState<string>("");
  const [applied, setApplied] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const couponHandler = (e: any) => {
    e.preventDefault();
    const avaiable = data?.data?.coupons.find(
      (cou: any) => cou?.coupon === coupon
    );
    if (avaiable) {
      setCouponId(coupon);
      setApplied(true);
      setError(false);
    } else {
      setError(true);
    }
  };
  const cancelCoupon = (e: any) => {
    e.preventDefault();
    setApplied(false);
    setCoupon("");
    setCouponId(null);
  };
  useEffect(() => {
    if (coupon.length === 0) {
      setError(false);
    }
  }, [coupon]);
  return (
    <form
      onSubmit={couponHandler}
      className="flex flex-col gap-4 sm-1 rounded-lg p-4 bg-white"
    >
      <p className="text-black text-sm not-italic font-normal leading-4">
        Apply coupon code{" "}
      </p>

      <label
        className={`border ${
          error
            ? "border-red-600"
            : applied
            ? "border-green-600"
            : "border-black/50"
        }  p-2 flex items-center justify-between overflow-hidden rounded-md`}
      >
        <input
          type="text"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Enter Code"
          className=" outline-none"
          required
        />
        {applied ? (
          <button
            onClick={cancelCoupon}
            className="text-red-600 font-bold text-sm bg-transparent"
          >
            Cancel
          </button>
        ) : (
          <button
            type="submit"
            className="text-red-600 font-bold text-sm bg-transparent"
          >
            Apply
          </button>
        )}
      </label>
    </form>
  );
}
