// Navbar.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
interface props {
  onchange: (value: string) => void,

}
const RoomsNavbar: React.FC<props> = (props) => {
  const navigate = useNavigate()
  const handleNavigation = (url: string) => {
    navigate(url);
  };

  return (
    <nav className="bg-[#333] py-4 px-4 flex justify-between items-center ">
      <h1 className="text-2xl font-bold text-[#FF5722]">Rooms</h1>
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="relative text-gray-600">
          <input
            onChange={(event) => props.onchange(event.target.value)}
            type="search"
            name="search"
            placeholder="Search rooms"
            className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
          />
          <button type="submit" className="absolute right-0 top-0  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a4 4 0 10-8 0 4 4 0 008 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 17l-2 2m0 0l-2-2m2 2V7"
              />
            </svg>
          </button>
        </div>
        <button className="bg-[#FF5722] text-white py-2 px-4 rounded-full hover:bg-[#F44336]"
          onClick={()=>handleNavigation('/rooms/join')}
       
        >
          Join Room
        </button>
        <button className="bg-[#00BCD4] text-white py-2 px-4 rounded-full hover:bg-[#0097A7]"
        onClick={()=>handleNavigation('/rooms/create')}
        >
          Create Room
        </button>
      </div>
    </nav>
  );
};

export default RoomsNavbar;
