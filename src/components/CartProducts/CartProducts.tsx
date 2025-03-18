"use client";
import { ProductDataType } from "@/utils/Types";
import CartProductCard from "./CartProductCard";

export default function CartProducts({ data }: { data: any }) {
  return (
    <div className="flex flex-col p-6 gap-6">
      {/* {data?.length > 0 &&
        data?.map((cart: cartData) => (
          <CartProductCard productDetail={cart} key={cart?.id} />
        ))} */}
        {x.map((cart: any) => (
          <CartProductCard productDetail={cart} key={cart?.id} />
        ))}
    </div>
  );
}

const x = [{
  id: 8,
  user: 1,
  varientId: 1,
  flavour: "Flavor",
  qty: 21,
  mrp: 10,
  product: {
    id: 13,
    catId: 11,
    subCatId: 17,
    name: "Muscletech NitroTech 100% Whey Gold Performance Series",
    isBestSeller: false,
    isOnFlashSale: false,
    images: [
      "https://bignlean.shellcode.cloud/uploads/1721995447435.png",
      "https://bignlean.shellcode.cloud/uploads/1721995449240.png",
      "https://bignlean.shellcode.cloud/uploads/1721995450920.png",
      "https://bignlean.shellcode.cloud/uploads/1721995452865.png",
      "https://bignlean.shellcode.cloud/uploads/1721995454941.png"
    ],
    overView: [
      {
        "value": "24g",
        "nutrients": "Protein"
      },
      {
        "value": "5.5g",
        "nutrients": "BCAA"
      },
      {
        "value": "4g",
        "nutrients": "EAA"
      },
      {
        "value": "4g",
        "nutrients": "Glutamic acid"
      },
      {
        "value": "117",
        "nutrients": "Kcal"
      },
      {
        "value": "79.0",
        "nutrients": "Protein % per serving"
      },
      {
        "value": "Added Gluten",
        "nutrients": "Gluten free"
      },
      {
        "value": "Yes",
        "nutrients": "Carbs"
      }
    ],
    details: [
      {
        "body": "Gold Standard 100% Whey Blend - 24g blended protein consisting of whey protein isolate, whey protein concentrate, and whey peptides/hydrolysates to support muscle recovery. Primary protein source is Isolate, they don't call it the Gold Standard of quality for nothing.\n\nWhat Does It Have -11 grams of naturally occurring EAAs, including 5.5 grams of naturally occurring BCAAs, and over 4 grams of naturally occurring Glutamine and Glutamic Acid in each serving to support endurance and muscle recovery. Gluten-Free & suitable for Vegetarians\n\nSMS ON <space> 6 digit unique code on the pack to 57575 or visit our website Authenticateon.in to instantly check the authenticity of the product\n\nCountry of Origin: India, it is manufactured in India, in a facility that is ISO 14001 & 22000 certified and inspected & Approved by Food Safety Standard Authority of India. Whey Imported from Europe. Manufactured for OPTIMUM NUTRITION, INC. By Tirupati Wellness Pvt Ltd, Surajpur, Nahan Road, Paonta Sahib Dist. Sirmour- 173025 (HP)",
        "heading": "About the product"
      },
      {
        "body": "Optimum Nutrition is a trusted brand which has a legacy\nof over 30 years. They have made their mark in the\nfitness and nutrition industry in more than 90 countries.\nDouble Rich Chocolate 5lbs ON Whey Protein is among\nthe top-selling protein supplements in their range\nbecause it caters to multiple needs including muscle\nmaintenance and growth.\n\nWhey proteins are derived from milk and have grown in\npopularity because they are easy for the body to absorb.\nYou have three primary varieties including whey protein\nconcentrates, whey isolates and whey hydrolysates.\nThey differ in the protein concentration and rate of\nabsorption. ON Double Rich Chocolate 5Ibs uses all\nthree to give you the option of proteins that are\nabsorbed instantly and those that provide a sustained\nsupply of amino acids.",
        "heading": "Other Information"
      }
    ],
    tables: [
      {
        "table": [
          {
            "for": "Weight",
            "value": "4g"
          }
        ],
        "title": "General Traits"
      }
    ],
    information: [
      {
        "value": "4g",
        "nutrients": "Weight"
      },
      {
        "value": "2.0",
        "nutrients": "Protein % per Serving"
      },
      {
        "value": "67.0",
        "nutrients": "Price per kg"
      },
      {
        "value": "44",
        "nutrients": "Number of Servings"
      }
    ],
    certificates: [
      "https://bignlean.shellcode.cloud/uploads/1721995660839.png"
    ],
    supplements: [
      "https://bignlean.shellcode.cloud/uploads/1721995662947.png"
    ],
    brand: {
      "body": "Sold & Marketed By: Gold Standard 100% Whey Blend - 24g blended\nprotein consisting of whey protein isolate, whey\nprotein concentrate, and whey peptides/\nhydrolysates to support muscle recovery.\n\nManufactured By: Gold Standard 100% Whey Blend - 24g blended",
      "heading": "Muscletech"
    },
    hit: 0,
    varients: [
      {
        "id": 1,
        "mrp": "10",
        "date": "2024-08-15T10:08",
        "stock": "10",
        "units": "10",
        "flavor": [
          "Flavor"
        ],
        "premiumPrice": "10",
        "sellingPrice": "10"
      }
    ],
    createdAt: "2024-07-26 12:08:24",
    updatedAt: "2024-08-04 18:03:21",
    averageRating: 20,
    discountPercentage: 20,
  },
  sellingPrice: 10,
  premiumPrice: 10,
  createdAt: "2024-07-29 07:24:46",
  updatedAt: "2025-01-31 18:56:38"
},
{
  id: 8,
  user: 1,
  varientId: 1,
  flavour: "Flavor",
  qty: 21,
  mrp: 10,
  product: {
    id: 13,
    catId: 11,
    subCatId: 17,
    name: "Muscletech NitroTech 100% Whey Gold Performance Series",
    isBestSeller: false,
    isOnFlashSale: false,
    images: [
      "https://bignlean.shellcode.cloud/uploads/1721995447435.png",
      "https://bignlean.shellcode.cloud/uploads/1721995449240.png",
      "https://bignlean.shellcode.cloud/uploads/1721995450920.png",
      "https://bignlean.shellcode.cloud/uploads/1721995452865.png",
      "https://bignlean.shellcode.cloud/uploads/1721995454941.png"
    ],
    overView: [
      {
        "value": "24g",
        "nutrients": "Protein"
      },
      {
        "value": "5.5g",
        "nutrients": "BCAA"
      },
      {
        "value": "4g",
        "nutrients": "EAA"
      },
      {
        "value": "4g",
        "nutrients": "Glutamic acid"
      },
      {
        "value": "117",
        "nutrients": "Kcal"
      },
      {
        "value": "79.0",
        "nutrients": "Protein % per serving"
      },
      {
        "value": "Added Gluten",
        "nutrients": "Gluten free"
      },
      {
        "value": "Yes",
        "nutrients": "Carbs"
      }
    ],
    details: [
      {
        "body": "Gold Standard 100% Whey Blend - 24g blended protein consisting of whey protein isolate, whey protein concentrate, and whey peptides/hydrolysates to support muscle recovery. Primary protein source is Isolate, they don't call it the Gold Standard of quality for nothing.\n\nWhat Does It Have -11 grams of naturally occurring EAAs, including 5.5 grams of naturally occurring BCAAs, and over 4 grams of naturally occurring Glutamine and Glutamic Acid in each serving to support endurance and muscle recovery. Gluten-Free & suitable for Vegetarians\n\nSMS ON <space> 6 digit unique code on the pack to 57575 or visit our website Authenticateon.in to instantly check the authenticity of the product\n\nCountry of Origin: India, it is manufactured in India, in a facility that is ISO 14001 & 22000 certified and inspected & Approved by Food Safety Standard Authority of India. Whey Imported from Europe. Manufactured for OPTIMUM NUTRITION, INC. By Tirupati Wellness Pvt Ltd, Surajpur, Nahan Road, Paonta Sahib Dist. Sirmour- 173025 (HP)",
        "heading": "About the product"
      },
      {
        "body": "Optimum Nutrition is a trusted brand which has a legacy\nof over 30 years. They have made their mark in the\nfitness and nutrition industry in more than 90 countries.\nDouble Rich Chocolate 5lbs ON Whey Protein is among\nthe top-selling protein supplements in their range\nbecause it caters to multiple needs including muscle\nmaintenance and growth.\n\nWhey proteins are derived from milk and have grown in\npopularity because they are easy for the body to absorb.\nYou have three primary varieties including whey protein\nconcentrates, whey isolates and whey hydrolysates.\nThey differ in the protein concentration and rate of\nabsorption. ON Double Rich Chocolate 5Ibs uses all\nthree to give you the option of proteins that are\nabsorbed instantly and those that provide a sustained\nsupply of amino acids.",
        "heading": "Other Information"
      }
    ],
    tables: [
      {
        "table": [
          {
            "for": "Weight",
            "value": "4g"
          }
        ],
        "title": "General Traits"
      }
    ],
    information: [
      {
        "value": "4g",
        "nutrients": "Weight"
      },
      {
        "value": "2.0",
        "nutrients": "Protein % per Serving"
      },
      {
        "value": "67.0",
        "nutrients": "Price per kg"
      },
      {
        "value": "44",
        "nutrients": "Number of Servings"
      }
    ],
    certificates: [
      "https://bignlean.shellcode.cloud/uploads/1721995660839.png"
    ],
    supplements: [
      "https://bignlean.shellcode.cloud/uploads/1721995662947.png"
    ],
    brand: {
      "body": "Sold & Marketed By: Gold Standard 100% Whey Blend - 24g blended\nprotein consisting of whey protein isolate, whey\nprotein concentrate, and whey peptides/\nhydrolysates to support muscle recovery.\n\nManufactured By: Gold Standard 100% Whey Blend - 24g blended",
      "heading": "Muscletech"
    },
    hit: 0,
    varients: [
      {
        "id": 1,
        "mrp": "10",
        "date": "2024-08-15T10:08",
        "stock": "10",
        "units": "10",
        "flavor": [
          "Flavor"
        ],
        "premiumPrice": "10",
        "sellingPrice": "10"
      }
    ],
    createdAt: "2024-07-26 12:08:24",
    updatedAt: "2024-08-04 18:03:21",
    averageRating: 20,
    discountPercentage: 20,
  },
  sellingPrice: 10,
  premiumPrice: 10,
  createdAt: "2024-07-29 07:24:46",
  updatedAt: "2025-01-31 18:56:38"
}]
