import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from '../pages/Home/Home'
import MainLayout from '../Layout/MainLayout/MainLayout'


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      children: [
        {
          index: true,
          element: <Home/>
        }
      ]
    }
  ])

  return <RouterProvider router={router}/>
}

export default App
