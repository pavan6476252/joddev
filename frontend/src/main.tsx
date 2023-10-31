import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './config/firebase_config.ts'
import { RouterProvider } from 'react-router-dom'
import AppRoutes from './routes/routes.tsx'
import { ThemeProvider } from "@material-tailwind/react";
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { saavanApi } from './api/music/saavanApi'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApiProvider api={saavanApi}>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </ApiProvider>
    {/* <App /> */}

  </React.StrictMode>,
)