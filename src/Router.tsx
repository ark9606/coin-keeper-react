import { createBrowserRouter } from "react-router-dom";
import { AddExpense } from "./pages/AddExpense";
import { FullHistory } from "./pages/FullHistory";
import { Analytics } from "./pages/Analytics";

console.log('APP_BASE_URL', import.meta.env?.APP_BASE_URL);
console.log('NODE_ENV', import.meta.env?.NODE_ENV);
// todo: fix for deployed
const basename = '/coin-keeper-react';
// const basename = process?.env?.NODE_ENV === 'production' ? process?.env?.APP_BASE_URL : '';

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AddExpense />,
  },
  {
    path: "/history",
    element: <FullHistory />,
  },
  {
    path: "/analytics",
    element: <Analytics />,
  },
], {basename});