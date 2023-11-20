import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { FaArrowDown } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { logout } from '../../../store/auth/authSlice';

function HelpdevNavbar() {
  const user = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigation = useNavigate();

  const [getInputValue, setInputValue] = useState('');
  let location = useLocation();

  let [searchParams, setSearchParams] = useSearchParams();

  function handleKeyPress(e: string) {
    if (e === 'Enter') {
      if (!location.pathname.includes('search')) {
        navigation({
          pathname: './search',
        });
      }

      setSearchParams({ q: getInputValue, category: searchParams.get('category') ?? '' });
    }
  }

  const signoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="flex justify-between p-2 bg-gray-800 text-white">
      <div className="p-2 flex gap-6 items-center">
        <h1 className="text-2xl font-bold">Dev Scout</h1>
        <ul className="flex gap-2">
          <li className="text-lg hover:text-gray-300 hover:bg-gray-700 px-3 py-2 flex items-center gap-1">
            Products <i className="text-sm"><FaArrowDown /></i>
          </li>
          <li className="text-lg hover:text-gray-300 hover:bg-gray-700 px-3 py-2 flex items-center gap-1">
            Resources <i className="text-sm"><FaArrowDown /></i>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-3 ">
        <div className="rounded-full flex gap-2 items-center bg-blue-50 px-4 py-2">
          <i className="text-lg text-black">
            <BiSearchAlt />
          </i>
          <input
            type="text"
            className="text-lg active:no-underline outline-none text-gray-900 active:border-none bg-transparent"
            placeholder="Search here"
          />
        </div>
        <div className=" login hidden sm:flex items-center group relative">
          {user.authenticated ? (
            <div className="group relative">
              <div className="flex items-center gap-2">
                <img className="w-8 h-8 rounded-full md:hidden" src={user.photoURL ?? ""} alt="profile" />
                <div className="md:flex items-center gap-2 hidden">
                  <img className="w-8 h-8 rounded-full" src={user.photoURL ?? ""} alt="profile" />
                  <div className="">
                    <p className="text-white text-sm">{user.displayName}</p>
                    <p className="text-gray-200 text-xs">{user.email}</p>
                  </div>
                </div>
              </div>
              <div className="group-hover:block absolute bg-white p-2 rounded-md shadow-md top-full hidden w-full sm:w-52 container right-0 py-3">
                <ul>
                  <li className="py-1 rounded-sm hover:bg-gray-700 hover:cursor-pointer">
                    <Link to={'./create-room'} className="block text-gray-500 hover:text-white font-boldcursor-pointer px-1">
                      Upload Room
                    </Link>
                  </li>
                  <li className="py-1 rounded-sm hover:bg-gray-700 hover:cursor-pointer">
                    <Link to={'./profile'} className="block text-gray-500 hover:text-white font-boldcursor-pointer px-1">
                      Profile
                    </Link>
                  </li>
                  <li onClick={signoutHandler} className="py-1 rounded-sm hover:bg-gray-700 hover:cursor-pointer">
                    <a className="block text-gray-500 hover:text-white font-boldcursor-pointer px-1">Signout</a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <button className="flex items-center gap-2 bg-slate-500 px-4 py-2 rounded-full text-white">
              <Link to={'/authenticate'} state={{ next: location.pathname }}>
                Login
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default HelpdevNavbar;
