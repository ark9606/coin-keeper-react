import { BasePage } from "./BasePage";
import './AddExpense.scss';
import { useState } from "react";
import { AddExpenseForm } from "../components/AddExpenseForm";
import { Expense } from "../types/Expense";

export const AddExpense = (/*props: AddExpenseProps*/) => {
  const [expenses, setExpense] = useState<Expense[]>([]);

  const handleAddExpense = (newExpense: Expense) => {
    setExpense(expenses.slice().concat(newExpense));
  }
  const expensesElements = expenses.map((expense) => {
    return (
      // todo add id to key
      <li key={expense.id}>{expense.title}</li>
    );
  });

  return (
    <BasePage>
      <AddExpenseForm onAddExpense={handleAddExpense} />
      <ul>
        {expensesElements}
      </ul>
    </BasePage>
  );
};