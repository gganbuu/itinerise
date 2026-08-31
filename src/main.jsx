import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css"


import '@fontsource-variable/roboto/wght.css';
import '@fontsource-variable/nunito/wght.css';


import MyTripsPage from './pages/MyTripsPage/MyTripsPage';
import TripPage from './pages/TripPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyTripsPage/>
  },
  {
    path: "/trip",
    element: <TripPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
