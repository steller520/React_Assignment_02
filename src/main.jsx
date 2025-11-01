import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BrowseBooks from './components/BrowseBooks.jsx'
import LandingPage from './components/LandingPage.jsx'
import AddBook from './components/AddBook.jsx'
import CategoryPage from './components/CategoryPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/browse',
        element: <BrowseBooks />,
      },
      {
        path: '/addbook',
        element: <AddBook />,
      },
      {
        path: '/category/:id',
        element: <CategoryPage />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
