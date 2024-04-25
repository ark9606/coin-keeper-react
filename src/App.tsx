// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.scss'
import { RouterProvider } from 'react-router-dom'
import { AppRouter } from './Router'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={AppRouter}/>
    </>
  )
}

export default App
