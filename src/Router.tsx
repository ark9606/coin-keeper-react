import { createBrowserRouter } from "react-router-dom";
import { AddExpense } from "./pages/AddExpense";
import { FullHistory } from "./pages/FullHistory";
import { Analytics } from "./pages/Analytics";

// import.meta.env is not working in vite
console.log('APP_BASE_URL', import.meta.env?.APP_BASE_URL);
console.log('NODE_ENV', import.meta.env?.NODE_ENV);
// todo: fix for deployed
const basename = '';
// const basename = '/coin-keeper-react';
// const basename = process?.env?.NODE_ENV === 'production' ? process?.env?.APP_BASE_URL : '';

// export const createRouter = (params: {
//   handleNewExpense: (newExpense: string) => void;
//   expenses: string[];
// }) => {
//   return createBrowserRouter([
//     {
//       path: "/",
//       element: <AddExpense onAddExpense={params.handleNewExpense} expenses={params.expenses} />,
//     },
//     {
//       path: "/history",
//       element: <FullHistory />,
//     },
//     {
//       path: "/analytics",
//       element: <Analytics />,
//     },
//   ], {basename});
// };

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