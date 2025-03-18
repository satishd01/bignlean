import { ApiPaths } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const base_url = process.env.NEXT_PUBLIC_BASE_URL;

async function getAllBrands() {
  const data = await axios({
    method: "GET",
    url: base_url + ApiPaths.BRANDS,
  });
  return data.data;
}
export function useGetAllBrands() {
  return useQuery({
    queryKey: ["all-brands"],
    queryFn: () => getAllBrands(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
async function getPopularBrands() {
  const data = await axios({
    method: "GET",
    url: base_url + "/topBrands",
  });
  return data.data;
}
export function useGetPopularBrands() {
  return useQuery({
    queryKey: ["popular-brands"],
    queryFn: () => getPopularBrands(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
async function getAllBanners() {
  const data = await axios({
    method: "GET",
    url: base_url + ApiPaths.BANNERS,
  });
  return data.data;
}
export function useGetAllBanners() {
  return useQuery({
    queryKey: ["all-Banners"],
    queryFn: () => getAllBanners(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
async function getAllCategories() {
  const data = await axios({
    method: "GET",
    url: base_url + ApiPaths.CATEGORIES,
  });
  return data.data;
}
export function useGetAllCategories() {
  return useQuery({
    queryKey: ["all-Categories"],
    queryFn: () => getAllCategories(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
async function getAllHomeProducts() {
  const data = await axios({
    method: "GET",
    url: base_url + ApiPaths.HOME,
  });
  return data.data;
}
export function useGetAllHomeProducts() {
  return useQuery({
    queryKey: ["all-HomeProducts"],
    queryFn: () => getAllHomeProducts(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
async function getAllProducts(params: any, selectedBrands: string) {
  const brands = selectedBrands ? `?${selectedBrands}` : "";
  const data = await axios({
    method: "GET",
    url: base_url + ApiPaths.ALL_PRODUCTS + brands,
    params: {
      ...params,
    },
  });
  return data.data;
}

export function useGetAllProducts(params: any, selectedBrands?: string) {
  return useQuery({
    queryKey: ["all-Products", params, selectedBrands],
    queryFn: () => getAllProducts(params, selectedBrands as string),
    enabled: true,
  });
}

async function getUserReviews(userId: number) {
  const data = await axios({
    method: "GET",
    url: base_url + `/ratings/${userId}`,
  });
  return data.data;
}

export function useGetUserReviews(userId: number) {
  return useQuery({
    queryKey: ["user-reviews"],
    queryFn: () => getUserReviews(userId),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!userId,
  });
}

async function getAllBlogs() {
  const data = await axios({
    method: "GET",
    url: base_url + ApiPaths.BLOGS,
  });
  return data.data;
}
export function useGetAllBlogs() {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: () => getAllBlogs(),
    refetchOnWindowFocus: false,
  });
}

async function getUserLocation(lat: number, lang: number) {
  const apiKey = process?.env?.NEXT_PUBLIC_GEOCODING;
  const data = await axios({
    method: "GET",
    url: `https://us1.locationiq.com/v1/reverse?lat=${lat}&lon=${lang}&format=json&key=${apiKey}`,
  });
  return data.data;
}
export function useGetUserLocation(cords: { lat: number; lang: number }) {
  return useQuery({
    queryKey: ["user-location", cords],
    queryFn: () => getUserLocation(cords?.lat, cords?.lang),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: !!cords,
  });
}

async function getAllOffers() {
  const data = await axios({
    method: "GET",
    url: base_url + "/offers",
  });
  return data.data;
}
export function useGetAllOffers() {
  return useQuery({
    queryKey: ["all-offers"],
    queryFn: () => getAllOffers(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}

async function getOfferProducts(id: number) {
  const data = await axios({
    method: "GET",
    url: base_url + "/offers/" + id,
  });
  return data.data;
}
export function useGetOfferProducts(id: number) {
  return useQuery({
    queryKey: ["offer", id],
    queryFn: () => getOfferProducts(id),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
}
async function getComboProducts(id: number) {
  const data = await axios({
    method: "GET",
    url: base_url + `/admin/comboProducts?catId=${id}`,
  });
  return data.data;
}
export function useGetComboProducts(id: number) {
  return useQuery({
    queryKey: ["combo", id],
    queryFn: () => getComboProducts(id),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
}

export interface Offer {
  id: number;
  name: string;
  image: string;
  products: Product[];
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: number;
  catId: number;
  subCatId: number;
  name: string;
  isBestSeller: boolean;
  isOnFlashSale: boolean;
  images: string[];
  overView: OverView[];
  details: Detail[];
  tables: Table[];
  information: Information[];
  certificates: string[];
  supplements: string[];
  brand: Brand;
  hit: number;
  varients: Varient[];
  createdAt: string;
  updatedAt: string;
  averageRating: number;
  discountPercentage: number;
  totalRating: number;
  ratings: any[];
  myRating: any[];
}

export interface OverView {
  value: string;
  nutrients: string;
}

export interface Detail {
  body: string;
  heading: string;
}

export interface Table {
  table: Table2[];
  title: string;
}

export interface Table2 {
  for: string;
  value: string;
}

export interface Information {
  value: string;
  nutrients: string;
}

export interface Brand {
  body: string;
  heading: string;
}

export interface Varient {
  id: number;
  mrp: string;
  date: string;
  stock: string;
  units: string;
  flavor: string[];
  premiumPrice: string;
  sellingPrice: string;
}
