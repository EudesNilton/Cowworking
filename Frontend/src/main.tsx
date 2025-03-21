import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import {createBrowserRouter, RouterProvider, Route} from "react-router-dom"
import Login from './pages/Login.tsx'
import ErrorPage from './pages/ErrorPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "vagas",
    element: <ErrorPage />,
  },
  {
    path: "login",
    element: <Login />,
  }
  
  ])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
