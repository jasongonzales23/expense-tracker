"use client";

import { SWRConfig } from "swr";
import AddExpenseForm from "@/components/AddExpenseForm";
import Total from "@/components/Total";
import styles from "./page.module.css";
import useExpenses from "@/fetchers/use-expenses";

export default function Home() {
  const { expenses } = useExpenses();

  const total = 97;
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <main className={styles.main}>
        <div className={styles.center}></div>
        <div className={styles.grid}>
          <h1>Expense Tracker</h1>
        </div>
        <div className={styles.grid}>
          <Total total={total} />
        </div>
        <div className={styles.grid}>
          <AddExpenseForm />
        </div>
      </main>
    </SWRConfig>
  );
}
