"use client";
import React, { useState } from "react";
import { Card, Button, NumberInput, TextInput } from "@tremor/react";
import { CurrencyDollarIcon, DocumentIcon } from "@heroicons/react/solid";

export default function AddExpenseForm(this: any, { mutate }: any) {
  const defaultFormState = {
    amount: "",
    description: "",
  };
  const [formState, setFormState] = useState(defaultFormState);

  const handleChange = (evt: React.ChangeEvent) => {
    const input = evt.target as HTMLInputElement;
    const value = input.value;
    setFormState({
      ...formState,
      [input.name]: value,
    });
  };
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = {
      description: String(formState.description),
      amount: Number(formState.amount),
    };

    try {
      const response = await fetch("/api/add-expense", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      setFormState(defaultFormState);
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
          id="description"
          name="description"
          value={formState.description}
          onChange={handleChange}
        />
        <div>{/* <label htmlFor="expenseAmount">Expense Amount</label> */}</div>
        <NumberInput
          className="mb-4"
          icon={CurrencyDollarIcon}
          placeholder="Amount..."
          id="amount"
          name="amount"
          value={formState.amount}
          onChange={handleChange}
        />
        <Button size="xl" type="submit" className="w-full">
          Save Expense
        </Button>
      </form>
    </Card>
  );
}
