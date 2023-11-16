import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import OverviewView from './components/Dashboard/Pages/OverviewView';
import MyCoursesView from './components/Dashboard/Pages/MyCoursesView';
import IntroPage from './components/intro/IntroPage';

import RoomieHomePage from './features/roomie/components/HomePage';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" >
    <Route
      path="dashboard"
      element={<Dashboard />}

    >

      <Route index element={<OverviewView />} />
      <Route path='courses' element={<MyCoursesView />} />
      <Route path='channels' element={<MyCoursesView />} />
      <Route path='blogs' element={<MyCoursesView />} />
      <Route path='settings' element={<MyCoursesView />} />
    </Route>

    <Route path='/intro' element={<IntroPage />} />

    {/* // roomie  */}
    <Route path='/roomie' element={<RoomieHomePage />} />

  </Route >
))



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)



