import React from 'react'
import { BiMessageAltMinus, BiSearch } from 'react-icons/bi'
import { IoMdNotificationsOutline } from 'react-icons/io'

function RoomieNavbar() {
    return (
        <div className='mx-2  flex justify-between '>

            <div className=' bg-gray-700 w-full 
            max-w-md px-4 py-3 flex items-center  gap-2 rounded-full'>
                <span className='text-2xl text-gray-300'>
                    <BiSearch />
                </span>
                <input type="search" name="" id="" className='text-lg text-gray-400 bg-transparent items-center focus:border-none outline-none active:border-none w-full ' placeholder='Search...' />
            </div>
            

            <div className='flex gap-4'>
                <div className=' bg-gray-700 p-4 flex items-center rounded-full w-min'>
                    <span className='text-2xl text-gray-300'>

                        <IoMdNotificationsOutline />
                    </span>

                </div>
                <div className=' bg-gray-700 p-4 flex items-center rounded-full w-min'>
                    <span className='text-2xl text-gray-300'>

                        <BiMessageAltMinus />
                    </span>

                </div>
                <div className=' h-full   border-gray-300 border-2' />
                <div className="login w-40 h-full bg-slate-500 "></div>
            </div>
        </div>
    )
}

export default RoomieNavbar