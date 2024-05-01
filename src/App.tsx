// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.scss'
import { RouterProvider } from 'react-router-dom'
import { AppRouter, createRouter } from './Router'
import { useState } from 'react';


function App() {
  // const [expenses, setExpense] = useState<string[]>([]);

  // function handleNewExpense(newExpense: string) {
  //   setExpense(expenses.slice().concat(newExpense));
  // }
  // const router = createRouter({handleNewExpense, expenses});

  // todo check how to use useMemo
  // const router = useMemo(() => {
  //   return createRouter({handleNewExpense, expenses});
  // }, [expenses, handleNewExpense]);


  return (
    <>
      {/* <RouterProvider router={router}/> */}
      <RouterProvider router={AppRouter}/>
    </>
  )
}

export default App
