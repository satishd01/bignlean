"use client";
import { ApiPaths } from "@/constants";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const base_url = process.env.NEXT_PUBLIC_BASE_URL;

async function getAllOrder(userId: number) {
  return axios({
    method: "GET",
    url: base_url + ApiPaths.ORDER_USER + "/" + userId,
  });
}

export function useGetAllOrder(userId: number) {
  return useQuery({
    queryKey: ["order", userId],
    queryFn: () => getAllOrder(userId),
    enabled: !!userId,
  });
}

async function cancelOrder(data: any, userId: number) {
  return axios({
    method: "DELETE",
    url: base_url + ApiPaths.CANCEL_ORDER,
    data: { ...data, user: userId },
  });
}

export function useCancelOrder() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: { data: any; userId: number }) =>
      cancelOrder(payload?.data, payload?.userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["order"] });
    },
  });
}

export async function placeOrder(payload: {
  userid: number;
  addressid: number;
  paymentMethod: string;
  transactionId: string | null;
  bglCash: number;
}) {
  return axios({
    method: "POST",
    url: base_url + ApiPaths.PLACE_ORDER,
    data: payload,
  });
}

export function usePlaceOrder() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: {
      userid: number;
      addressid: number;
      paymentMethod: string;
      transactionId: string | null;
      bglCash: number;
    }) => placeOrder(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["order"] });
    },
  });
}
