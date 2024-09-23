import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import HomePage from './components/HomePage'
import BrowseBooks from './components/BrowseBooks'
import AddBook from './components/AddBook'
import BookDetails from './components/BookDetails'
import NotFound from './components/NotFound'
import Layout from './components/Layout'

function App() {

  const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />
    ,
    children: [
      {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />
      },
      {
        path: "/browse-books",
        element: <BrowseBooks />,
        errorElement: <ErrorPage />
      },
      {
        path: "/add-book",
        element: <AddBook />,
        errorElement: <ErrorPage />
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
        errorElement: <ErrorPage />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
