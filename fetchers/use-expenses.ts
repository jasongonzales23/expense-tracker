import useSWR, { SWRResponse, KeyedMutator } from "swr";

type Expense = {
  id: number;
  description: string;
  amount: number;
  createdAt: Date;
};

type UseExpenses = {
  expenses: Expense[] | undefined;
  isLoading: boolean;
  isError: boolean;
  mutate: KeyedMutator<Expense[]>;
};

function useExpenses(): UseExpenses {
  const fetcher = (url: URL) =>
    fetch(url, {
      cache: "no-store",
    }).then((res) => res.json());

  const { data, isLoading, error, mutate }: SWRResponse<Expense[]> = useSWR(
    "/api/get-expenses",
    fetcher
  );

  // console.log(data);
  return {
    expenses: data,
    isLoading,
    isError: error,
    mutate,
  };
}
export default useExpenses;
