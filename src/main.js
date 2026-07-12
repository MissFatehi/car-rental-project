import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import MainLayout from './layouts/MainLayout';
import { createBrowserRouter } from 'react-router';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { RouterProvider } from 'react-router/dom';
import CarsList from './pages/CarsList';
import Booking from './pages/Booking';
import CarDetail from './pages/CarDetail';
import Authenticate from './pages/Authenticate';
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
]);
createRoot(document.getElementById('root')).render(<StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>);
