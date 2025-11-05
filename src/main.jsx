import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BrowseBooks from './components/BrowseBooks.jsx'
import LandingPage from './components/LandingPage.jsx'
import AddBook from './components/AddBook.jsx'
import CategoryPage from './components/CategoryPage.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import BookDetails from './components/BookDetails.jsx'

// Create the browser router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // The root layout component
    errorElement: <ErrorPage />, // The component to render on error
    children: [
      {
        path: '/',
        element: <LandingPage />, // The landing page
      },
      {
        path: '/browse',
        element: <BrowseBooks />, // The browse books page
      },
      {
        path: '/addbook',
        element: <AddBook />, // The add book page
      },
      {
        path: '/category/:id',
        element: <CategoryPage />, // The page for a specific category
      },
      {
        path: '/book/:id',
        element: <BookDetails />, // The page for a specific book
      },
    ],
  }
],)

// Render the application
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
