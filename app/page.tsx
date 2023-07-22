import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const total = 0;
  return (
    <main className={styles.main}>
      <div className={styles.center}></div>
      <div className={styles.grid}>
        <h1>Expense Tracker</h1>
        <h2>Total</h2>
        <div>{total}</div>
        <form>
          <label>Expense Amount</label>

          <input type="number" id="expense-amount" />
          <button type="submit">Save Expense</button>
        </form>
      </div>
    </main>
  );
}
