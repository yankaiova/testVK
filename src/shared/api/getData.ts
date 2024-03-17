import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export function useQueryData(params: any, url: string, key: string[]) {
  return useQuery({
    queryKey: ["fact", key],
    queryFn: async () => {
      const { data } = await axios.get(url, params);
      return data;
    },
    enabled: false,
  });
}
