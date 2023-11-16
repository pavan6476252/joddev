import React, { useEffect, useRef } from 'react';
import { IoMdNotificationsOutline, IoIosSearch } from 'react-icons/io'


function Navbar() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current !== null)
      inputRef.current?.focus();
  }, [])

  return (
    <div className='h-16 bg-gray-50 p-4 flex items-center justify-between'>
      <div className=' w-3/12 flex  items-center  gap-2 bg-gray-200  text-gray-800 py-1 rounded-lg text-sm px-4
      '>
        <IoIosSearch />

        <input ref={inputRef} type="text" name="" id="" className='w-full focus:border-none focus:outline-none bg-transparent ' placeholder='Search or type' />
      </div>
      <div className="flex gap-4 items-center">
        <div className='relative '>

          <span className='absolute w-1 h-1 bg-red-400 animate-ping top-0  right-0 z-10 rounded-full'></span>
          <span className='text-2xl  '>

            <IoMdNotificationsOutline />
          </span>
        </div>
        <div className="w-8 h-8 rounded-full bg-yellow-400"></div>
      </div>
    </div>
  )
}

export default Navbar