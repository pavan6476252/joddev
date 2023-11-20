import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import RoomieNavbar from '../../utils/custom/RoomieNavbar'
import CategoryTagsWraper from '../home/CategoryTagsWraper'

function RoomieSearchPage() {

  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className='bg-gray-900'>
      <div className=' container mx-auto'>
        <div className="backdrop-blur-md  top-4  ">
          <RoomieNavbar />
          <CategoryTagsWraper />
        </div>

        <h1 className="text-2xl text-white">
          {searchParams}
        </h1>

      </div>
    </div>
  )
}

export default RoomieSearchPage