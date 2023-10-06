import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe } from "node:test";
import AddExpenseForm from "@/components/AddExpenseForm";

describe("Fill out form", () => {
  it("should work", () => {
    render(<AddExpenseForm mutate={() => {}} />);
    expect(screen.getByText("Save Expense")).toBeInTheDocument();
  });
});
