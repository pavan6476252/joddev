import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './config/firebase_config.ts'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)