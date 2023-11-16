import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function SideNavbar() {
    const menuNavLinks = [
        {
            "title": "Overview",
            "link": "/dashboard" // Corrected path
        },
        {
            "title": "Courses",
            "link": "/dashboard/courses"
        },
        {
            "title": "Channels",
            "link": "/dashboard/channels"
        },
        {
            "title": "Blogs",
            "link": "/dashboard/blogs"
        },
    ];
    const accountLinks = [
        {
            "title": "Settings",
            "link": "/dashboard/settings"
        }
    ];
const location = useLocation()
    return (
        <div className='w-1/5 h-screen p-5'>
            <h1 className='text-center text-xl font-bold mb-4'>JodDev</h1>

            <ul className='flex flex-col text-gray-900'>
                <h4 className='my-4 font-medium text-sm'>Menu</h4>
                {menuNavLinks.map((link) => (
             <NavLink key={link.title} to={link.link}  className={({ isActive ,isTransitioning }) => {
                return `my-1 text-md p-3 rounded-lg 
                text-gray-400 
                 ${location.pathname ===link.link  ? "bg-blue-500 text-gray-50" : ""}
                 hover:bg-blue-500 hover:text-gray-50

                 ${isTransitioning ? "animate-pulse":""}

        
                `;
            }}>
                
                {link.title}
            </NavLink>
                ))}

                <hr className='mt-4' />
            </ul>
            
            {/* Accounts links */}
            <ul className='flex flex-col text-gray-900'>
                <h4 className='my-4 font-medium text-sm'>Account</h4>
                {accountLinks.map((link) => (
                    <NavLink key={link.title} to={link.link} className={({ isActive }) => {
                        return `my-2 text-md p-3 rounded-lg 
                        text-gray-400 
                         ${isActive ? "bg-blue-500 text-gray-50" : ""}
                         hover:bg-blue-500 hover:text-gray-50
                        `;
                    }}>
                        {link.title}
                    </NavLink>
                ))}

                <div className="border-gray-200 bottom-1 border rounded-lg p-3 text-gray-400 flex justify-between
                hover:bg-blue-400 hover:text-white
                ">
                    <p>Switch Theme</p>
                    <input type="checkbox" name="" id="" />
                </div>
            </ul>
        </div>
    );
}

export default SideNavbar;
