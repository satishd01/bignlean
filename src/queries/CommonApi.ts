import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;

export function useCommanApi(key: string, path: string) {
  return useQuery({
    queryKey: [key],
    queryFn: () =>
      axios({
        method: "GET",
        url: base_url + path,
      }),
  });
}
