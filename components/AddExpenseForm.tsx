"use client";
import React from "react";
import styles from "../app/page.module.css";

export default function AddExpenseForm({ mutate }: any) {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.currentTarget;
    const description = target.elements.namedItem(
      "expenseDescription"
    ) as HTMLInputElement;

    const amount = target.elements.namedItem(
      "expenseAmount"
    ) as HTMLInputElement;
    const data = {
      description: String(description.value),
      amount: Number(amount.value),
    };

    try {
      const response = await fetch("/api/add-expense", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      description.value = "";
      amount.value = "";
      if (!response.ok) {
        throw new Error(`Error status ${response.status}`);
      }
    } catch (error: any) {
      console.log(`There was a problem: ${error.message}`);
    }
    mutate();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="expenseDescription">Expense Description</label>
      </div>
      <div>
        <input
          className={styles.input}
          type="text"
          id="expenseDescription"
          name="expenseDescription"
        />
      </div>
      <div>
        <label htmlFor="expenseAmount">Expense Amount</label>
      </div>
      <div>
        <input type="number" id="expenseAmount" name="expenseAmount" />
      </div>
      <button className={styles.button} type="submit">
        Save Expense
      </button>
    </form>
  );
}
