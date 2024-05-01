import { Category } from "../constants/categories";

export interface Expense {
  id: number;
  title: string;
  category: Category;
  amount: number;
  date: string;
}