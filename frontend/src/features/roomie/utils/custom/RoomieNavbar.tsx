import { BiMessageAltMinus, BiSearch } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { Link, useLocation, useNavigate, useSearchParams, } from 'react-router-dom';
import { logout } from '../../../../store/auth/authSlice';
import { useRef, useEffect, useState } from 'react'

function RoomieNavbar() {
    const user = useAppSelector((state) => state.auth);
    const disatch = useAppDispatch()
    const navigation = useNavigate()

    function signoutHandler() {
        disatch(logout())
    } 
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

            setSearchParams({ q: getInputValue, category: searchParams.get('category') ?? '' })
        }
    }

    return (
        <div className=' pt-3 mx-2 flex justify-between gap-2'>

            <div className='bg-gray-700 w-full max-w-md px-4 py-3 flex items-center gap-2 rounded-full'>
                <span className='text-2xl text-gray-300'>
                    <BiSearch />
                </span>
                <input

                    onChange={(e) => {
                        setInputValue(
                            e.currentTarget.value
                        )
                    }}
                    type="search" name="" id="" className='text-lg text-gray-400 bg-transparent items-center focus:border-none outline-none active:border-none w-full' onKeyUpCapture={(e) => handleKeyPress(e.key)}

                    placeholder='Search name , location , description' />
            </div>

            <div className='flex gap-4 sm:gap-2 items-center'>
                <div className='bg-gray-700 p-2 md:p-4 flex items-center rounded-full'>
                    <span className='text-2xl text-gray-300'>
                        <IoMdNotificationsOutline />
                    </span>
                </div>
                <div className='bg-gray-700 p-2 md:p-4 flex items-center rounded-full'>
                    <span className='text-2xl text-gray-300'>
                        <BiMessageAltMinus />
                    </span>
                </div>
                <div className='h-full border-gray-300 border-2 hidden md:block'></div>
                <div className="login hidden sm:flex items-center group relative">
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
                            <div className="group-hover:block absolute bg-white p-2 rounded-md shadow-md top-fullt hidden w-full sm:w-52  container right-0 py-3">
                                <ul>
                                    <li className="py-1 rounded-sm hover:bg-gray-700   hover:cursor-pointer">
                                        <Link to={'./create-room'} className="block text-gray-500 hover:text-white font-boldcursor-pointer px-1">Upload Room</Link>
                                    </li>


                                    <li className="py-1 rounded-sm hover:bg-gray-700 hover:cursor-pointer   ">
                                        <Link to={'./profile'} className="block  text-gray-500 hover:text-white font-boldcursor-pointer px-1">Profile</Link>
                                    </li>
                                    <li onClick={signoutHandler} className="py-1  rounded-sm hover:bg-gray-700  hover:cursor-pointer ">
                                        <a className="block  text-gray-500 hover:text-white font-boldcursor-pointer px-1">Signout</a>
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

export default RoomieNavbar;
