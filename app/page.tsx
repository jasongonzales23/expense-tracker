import { sql } from "@vercel/postgres";
import styles from "./page.module.css";

export default function Home() {
  const total = 0;
  return (
    <main className={styles.main}>
      <div className={styles.center}></div>
      <div className={styles.grid}>
        <h1>Expense Tracker</h1>
      </div>
      <div className={styles.grid}>
        <h2>Total: {total}</h2>
      </div>
      <div className={styles.grid}>
        <form>
          <label>Expense Amount</label>

          <input type="number" id="expense-amount" />
          <button type="submit">Save Expense</button>
        </form>
      </div>
    </main>
  );
}
