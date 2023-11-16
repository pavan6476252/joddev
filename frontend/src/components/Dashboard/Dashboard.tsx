import React from 'react'
import SideNavbar from './components/SideNavbar'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function Dashboard() {
    return (
        <div className='flex'>
            <SideNavbar />
            <div className='w-full bg-gray-200'>
                <Navbar />
                <Outlet />
            </div>

        </div>
    )
}

export default Dashboard