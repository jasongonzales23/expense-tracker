"use client";

import AddExpenseForm from "@/components/AddExpenseForm";
import Total from "@/components/Total";
import styles from "./page.module.css";
import useExpenses from "@/fetchers/use-expenses";

export default function Home() {
  const { expenses, isLoading, isError, mutate } = useExpenses();

  const total = expenses?.reduce((sum: number, { amount }) => sum + amount, 0);
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <h1>Expense Tracker</h1>
      </div>
      <div className={styles.grid}>
        <Total total={total} />
      </div>
      <div className={styles.grid}>
        <AddExpenseForm mutate={mutate} />
      </div>
    </main>
  );
}
