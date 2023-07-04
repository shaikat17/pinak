import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/routes';
import { HelmetProvider } from 'react-helmet-async';
import { AppAuthContextProvider } from './context/AppAuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppAuthContextProvider>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
    </AppAuthContextProvider>
  </React.StrictMode>,
)
