import React from 'react'
import RoomieNavbar from '../utils/custom/RoomieNavbar'
import WelcomMessage from './home/WelcomMessage'
import CategoryTagsWraper from './home/CategoryTagsWraper'
import GridViewWraper from './home/GridViewWraper'
import RoomCard from './room/widgets/RoomCard'

function RoomieHomePage() {

  
  return (
    <div className='bg-gray-900 pb-5 '>
      <div className="container mx-auto">

        <div className="py-5">
          <RoomieNavbar />
        </div>

        <WelcomMessage />
        <CategoryTagsWraper />
        <GridViewWraper children={[]} />
      </div>
    </div>

  )
}

export default RoomieHomePage