import { BasePage } from "./BasePage";
import './AddExpense.scss';

interface AddExpenseProps {
  onAddExpense: (expenseTitle: string) => void;
  expenses: string[];
}

export const AddExpense = (props: AddExpenseProps) => {
  const handleAddExpense = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const expenseTitle = (form.elements.namedItem('expense_title') as HTMLInputElement).value;
    props.onAddExpense(expenseTitle);
  }

  const expenses = props.expenses.map((expense) => {
    return (
      // todo add id to key
      <li key={expense}>{expense}</li>
    );
  });

  return (
    <BasePage>
      <form id="add_expense_form" onSubmit={handleAddExpense}>
        <label>
          <span>Fill the field:</span>
          <input type="text" name="expense_title" id="" placeholder="Enter a new expense" />
        </label>
        <input type="submit" value="Add" />
      </form>
      <ul>
        {expenses}
      </ul>
    </BasePage>
  );
};