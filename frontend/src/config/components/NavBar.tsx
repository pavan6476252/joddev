import React, { useState } from 'react';
import LoginButton from './LoginButton';

const Navbar: React.FC = () => {



    return (
        <nav className="bg-blue-500 p-4 flex justify-between items-center">
            {/* Left Section */}
            <div className="flex items-center space-x-2">
                <i className="fas fa-icon text-2xl text-white"></i>
                <span className="text-white text-lg font-semibold">Joddev</span>
            </div>

            <div className="flex items-center justify-center w-1/3">
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-white rounded-md p-2 w-full"
                />
            </div>
            <LoginButton />

        </nav>
    );
};

export default Navbar;
