"use client";
import { ApiPaths } from "@/constants";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const base_url = process.env.NEXT_PUBLIC_BASE_URL;

async function getCartList(userId: number) {
  return axios({
    method: "GET",
    url: base_url + ApiPaths.CART_USER + "/" + userId,
  });
}

export function useGetCartList(userId: number) {
  return useQuery({
    queryKey: ["cart", userId],
    queryFn: () => getCartList(userId),
    enabled: !!userId,
  });
}

async function getCartPrice(payload: {
  user: number | undefined;
  coupon: string;
  addressId: number;
}) {
  return axios({
    method: "GET",
    url: base_url + `/cart/details`,
    params: {
      ...payload,
    },
  });
}

export function useGetCartPrice(payload: {
  user: number | undefined;
  coupon: string;
  addressId: number;
}) {
  return useQuery({
    queryKey: ["cart-price", payload],
    queryFn: () => getCartPrice(payload),
    enabled: !!payload.user,
  });
}

async function addToCartList(payload: {
  user: number;
  product: number;
  qty: number;
  varientId: number;
  flavour: string;
}) {
  const { flavour, product, qty, user, varientId } = payload;
  return axios({
    method: "POST",
    url: base_url + ApiPaths.CART,
    data: { user, product, qty, flavour, varientId },
  });
}

export function useAddToCartList() {
  return useMutation({
    mutationFn: (payload: {
      user: number;
      product: number;
      qty: number;
      varientId: number;
      flavour: string;
    }) => addToCartList(payload),
  });
}

async function removeFromCart(productId: number) {
  return axios({
    method: "DELETE",
    url: base_url + ApiPaths.CART + "/" + productId,
  });
}
async function updateQuantityFromCart(productId: number, qty: number) {
  return axios({
    method: "PUT",
    url: base_url + ApiPaths.CART + "/" + productId,
    data: { qty },
  });
}

export function useRemoveFromCart() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (productId: number) => removeFromCart(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      queryClient.invalidateQueries({ queryKey: ["cart-price"] });
    },
  });
}

export function useUpdateQuantityFromCart() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: { productId: number; qty: number }) =>
      updateQuantityFromCart(payload?.productId, payload?.qty),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      queryClient.invalidateQueries({ queryKey: ["cart-price"] });
    },
  });
}

async function getProductDetail(productId: number, userId: number) {
  return axios({
    method: "GET",
    url: base_url + ApiPaths.PRODUCTS + "/" + productId + "/" + userId,
  });
}

export function useGetProductDetail(productId: number, userId: number) {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductDetail(productId, userId),
    enabled: !!productId,
  });
}

async function getWalletDetail(userId: number) {
  return axios({
    method: "GET",
    url: base_url + `/user/wallet?user=${userId}`,
  });
}

export function useGetWalletDetail(userId: number) {
  return useQuery({
    queryKey: ["wallet-details"],
    queryFn: () => getWalletDetail(userId),
    enabled: !!userId,
  });
}

async function getNotificationsList() {
  return axios({
    method: "GET",
    url: base_url + "/notifications",
  });
}

export function useGetNotificationList() {
  return useQuery({
    queryKey: ["notifications"],
    queryFn: () => getNotificationsList(),
  });
}
