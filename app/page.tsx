import AddExpenseForm from "@/components/AddExpenseForm";
import Total from "@/components/Total";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}></div>
      <div className={styles.grid}>
        <h1>Expense Tracker</h1>
      </div>
      <div className={styles.grid}>
        <Total />
      </div>
      <div className={styles.grid}>
        <AddExpenseForm />
      </div>
    </main>
  );
}
