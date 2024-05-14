import useSWR from "swr";
import { fetcher } from "../fetcher";

export default function useBudget(id: string) {
  const { data, isLoading, error } = useSWR(`/api/budget/${id}`, fetcher);
  return {
    data,
    isLoading,
    error,
  };
}
