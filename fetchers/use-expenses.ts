import useSWR, { SWRResponse } from "swr";

export default function useExpenses() {
  const { data, isLoading, error, mutate }: SWRResponse =
    useSWR("/api/get-expenses");

  return {
    expenses: data,
    isLoading,
    isError: error,
    mutate,
  };
}
