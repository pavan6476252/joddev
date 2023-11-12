import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './config/firebase_config.ts'
import { RouterProvider } from 'react-router-dom'
import AppRoutes from './routes/routes.tsx'
import { ThemeProvider } from "@material-tailwind/react";
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { saavanApi } from './api/music/saavanApi'
import HomePage from './screens/home/HomePage.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>

    {/* <ApiProvider api={saavanApi}> */}
      {/* <ThemeProvider > */}
        {/* <AppRoutes /> */}

        <HomePage />

      {/* </ThemeProvider> */}
    {/* </ApiProvider> */}
    </Provider>
    {/* <App /> */}

  </React.StrictMode>,
)