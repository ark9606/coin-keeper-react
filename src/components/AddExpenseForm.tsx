// import './AddExpense.scss';
import { useState } from "react";
import { Expense } from "../types/Expense";
import { CATEGORIES, CATEGORIES_ARRAY, Category, isCategory } from "../constants/categories";

interface AddExpenseFormProps {
  onAddExpense: (expense: Expense) => void;
}

export const AddExpenseForm = (props: AddExpenseFormProps) => {
  const [expenseTitle, setExpense] = useState('');
  const [expenseCategory, setCategory] = useState<Category | 'disabled'>('disabled');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!expenseTitle || expenseCategory === 'disabled') {
      return;
    }
    props.onAddExpense({
      id: Date.now(),
      title: expenseTitle,
      category: expenseCategory,
      amount: 0,
      date: new Date().toISOString(),
    });
    setExpense('');
    setCategory('disabled');
  }

  const categoryOptions = CATEGORIES_ARRAY.map((category) => <option key={category} value={category}>{category}</option>);

  return (
    <form id="add_expense_form" onSubmit={onSubmit}>
      <label>
        <span>Fill the field:</span>
        <input type="text" name="expense-title" required value={expenseTitle} onChange={(e) => setExpense(e.target.value)} placeholder="Enter a new expense" />

      </label>
      <label>
        <span>Select category:</span>
        <select onChange={(e) => onChangeCategory(e, setCategory)} name="category-select" value={expenseCategory} required>
          <option disabled value={'disabled'}>Not selected</option>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add" />
    </form>
  );
};

function onChangeCategory(e: React.ChangeEvent<HTMLSelectElement>, setCallback: (value: Category) => void) {
  if (isCategory(e.target.value)) {
    setCallback(e.target.value);
  }
}