"use client";
import { CoinSmIcon, SideArrowIcon } from "@/Icons";
import { Varient } from "@/utils/Types";
import { ProductDetailType } from "@/utils/productType";
import { Dispatch, SetStateAction, useState } from "react";
import VarityButton from "../Buttons/VarityButton";

export default function ProductVarient({
  product,
  selectedVarientId,
  setSelectedVarientId,
  selectedFlavour,
  setSelectedFlavour,
}: {
  product: ProductDetailType;
  setSelectedVarientId: Dispatch<SetStateAction<number>>;
  selectedVarientId: number;
  setSelectedFlavour: Dispatch<SetStateAction<string>>;
  selectedFlavour: string;
}) {
  const selectedVarient = product.varients.find(
    (varient) => varient.id === selectedVarientId
  );

  return (
    <div className="flex flex-col gap-4">
      <Header />
      <WeightCard
        setSelectedVarientId={setSelectedVarientId}
        selectedVarientId={selectedVarientId}
        varients={product?.varients}
      />
      <FlavourCard
        selectedFlavour={selectedFlavour}
        setSelectedFlavour={setSelectedFlavour}
        flavor={selectedVarient?.flavor as string[]}
      />
      {/* <Expirycard expiry={product?.expireDate || new Date().getUTCDate()} /> */}
    </div>
  );
}

const Expirycard = ({ expiry }: { expiry: any }) => {
  return (
    <div className="flex items-center justify-between w-[85%] max-lg:w-full bg-white p-4 rounded-lg max-[450px]:w-full">
      <p className="text-sm not-italic font-medium text-gradient">
        Expiry: {expiry}
      </p>
    </div>
  );
};

const PermiumCard = ({ premiumPrice }: { premiumPrice: any }) => {
  return (
    <div className="flex items-center justify-between w-[85%] max-lg:w-full bg-white p-4 rounded-lg max-[450px]:w-full">
      <div className="flex items-center gap-2">
        <CoinSmIcon />
        <p
          className="text-black text-sm not-italic font-medium
"
        >
          ${premiumPrice} for Premium Members
        </p>
      </div>
      <SideArrowIcon />
    </div>
  );
};

const FlavourCard = ({
  flavor,
  selectedFlavour,
  setSelectedFlavour,
}: {
  flavor: string[];
  setSelectedFlavour: Dispatch<SetStateAction<string>>;
  selectedFlavour: string;
}) => {
  return (
    <div>
      <p className="text-black text-sm not-italic font-medium mb-2">Flavour</p>
      <div className="flex gap-3 flex-wrap">
        {flavor.map((fla) => (
          <VarityButton
            onClick={() => setSelectedFlavour(fla)}
            key={fla}
            label={fla}
            active={selectedFlavour === fla}
          />
        ))}
      </div>
    </div>
  );
};

const Header = () => {
  const [active, setActive] = useState("kg");
  const design = `text-white linear-gradient-1`;
  return (
    <div className="flex items-center justify-between w-[70%] max-lg:w-full max-[450px]:w-full">
      <h2 className="text-black text-lg not-italic font-semibold">
        Select Variant:
      </h2>
      {/* <div className="flex items-center">
        <p
          onClick={() => setActive("kg")}
          className={`cursor-pointer text-sm not-italic border   border-red-400 w-[30px] flex justify-center p-1 font-semibold ${
            active === "kg" ? design : "text-gradient"
          }`}
        >
          kg
        </p>
        <p
          onClick={() => setActive("lb")}
          className={`cursor-pointer text-sm not-italic border   border-red-400 w-[30px] flex justify-center p-1 font-semibold ${
            active === "lb" ? design : "text-gradient"
          }`}
        >
          lb
        </p>
      </div> */}
    </div>
  );
};

const WeightCard = ({
  varients,
  selectedVarientId,
  setSelectedVarientId,
}: {
  varients: Varient[];
  selectedVarientId: number;
  setSelectedVarientId: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div>
      <p className="text-black text-sm not-italic font-medium mb-2">Weight</p>
      <div className="flex gap-3">
        {varients.map((varient) => (
          <VarityButton
            onClick={() => setSelectedVarientId(varient.id)}
            key={varient.id}
            active={varient.id === selectedVarientId}
            label={varient.units}
          />
        ))}
      </div>
    </div>
  );
};
