import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './layouts/MainLayout.tsx'
import Home from './pages/Home.tsx'
import CarsList from './pages/CarsList.tsx'
import Booking from './pages/Booking.tsx'
import CarDetail from './pages/CarDetail.tsx'
import Authenticate from './pages/Authenticate.tsx'
import NotFound from './pages/NotFound.tsx'

const router = createBrowserRouter([
   { path: "/",
          Component: MainLayout,
          children: [
              {
                  index: true,
                  Component: Home
              },
              { path: "cars",
                  Component: CarsList
              },
              { path: "booking",
                  Component: Booking
              },
              { path: "cars/:id",
                  Component: CarDetail
              },
              { path: "authenticate",
                  Component: Authenticate
              },
          ],
      },
      {
          path: "*",
          Component: NotFound
      },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
