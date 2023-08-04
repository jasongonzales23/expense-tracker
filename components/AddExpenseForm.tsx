"use client";
import React from "react";
import { Card, Button, NumberInput, TextInput } from "@tremor/react";
import { CurrencyDollarIcon, DocumentIcon } from "@heroicons/react/solid";

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
    <Card className="flex-1" decoration="top" decorationColor="blue">
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="expenseDescription">Expense Description</label> */}
        <TextInput
          className="mb-4"
          icon={DocumentIcon}
          placeholder="Description"
          id="expenseDescription"
          name="expenseDescription"
        />
        <div>{/* <label htmlFor="expenseAmount">Expense Amount</label> */}</div>
        <NumberInput
          className="mb-4"
          icon={CurrencyDollarIcon}
          placeholder="Amount..."
          id="expenseAmount"
          name="expenseAmount"
        />
        <Button size="xl" type="submit" className="w-full">
          Save Expense
        </Button>
      </form>
    </Card>
  );
}
