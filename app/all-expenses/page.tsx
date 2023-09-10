"use client";

import useExpenses from "@/fetchers/use-expenses";
import {
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Tab,
} from "@tremor/react";

export default function Home() {
  const { expenses, isLoading, isError, mutate } = useExpenses();

  const niceDate = (dateString: Date) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };
  return (
    <main className="container p-4 md:p-10 mx-auto max-w-7xl">
      <h1>All Expenses</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Desc / Date</TableHeaderCell>
            <TableHeaderCell>Amount</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses &&
            expenses.map((expense) => (
              <TableRow key={expense.id}>
                <TableCell>
                  <div>{expense.description}</div>
                  <div>
                    <small>{niceDate(expense.createdAt)}</small>
                  </div>
                </TableCell>
                <TableCell>${expense.amount}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </main>
  );
}
