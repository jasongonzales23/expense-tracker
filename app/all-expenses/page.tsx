"use client";

import AddExpenseForm from "@/components/AddExpenseForm";
import Total from "@/components/Total";
import useExpenses from "@/fetchers/use-expenses";
import { Title } from "@tremor/react";

export default function Home() {
  const { expenses, isLoading, isError, mutate } = useExpenses();

  const total = expenses?.reduce((sum: number, { amount }) => sum + amount, 0);
  return (
    <main className="container p-4 md:p-10 mx-auto max-w-7xl">
      <h1>All Expenses</h1>
    </main>
  );
}
