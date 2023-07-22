"use client";
import React from "react";

export default function AddExpenseForm() {
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
        // headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      console.log("RESPONSE", responseData);
      if (!response.ok) {
        throw new Error(`Error status ${response.status}`);
      }
    } catch (error: any) {
      console.log(`There was a problem: ${error.message}`);
    }
    console.log("FORM DATA SENT", data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="expenseDescription">Expense Description</label>

        <input type="text" id="expenseDescription" name="expenseDescription" />
      </div>
      <div>
        <label htmlFor="expenseAmount">Expense Amount</label>

        <input type="number" id="expenseAmount" name="expenseAmount" />
      </div>
      <button type="submit">Save Expense</button>
    </form>
  );
}
