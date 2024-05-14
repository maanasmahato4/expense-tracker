import useSWR from "swr";
import { fetcher } from "../fetcher";

export default function useBudgetList(userId: string) {
  const { data, error, isLoading } = useSWR(`/api/budgets/${userId}`, fetcher);
  return {
    data,
    error,
    isLoading,
  };
}
