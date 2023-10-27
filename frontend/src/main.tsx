import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './config/firebase_config.ts'
import { RouterProvider } from 'react-router-dom'
import AppRoutes from './routes/routes.tsx'
import { ThemeProvider } from "@material-tailwind/react";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>

      <AppRoutes />
    </ThemeProvider>
    {/* <App /> */}

  </React.StrictMode>,
)