import React from 'react'
import RoomieNavbar from '../utils/custom/RoomieNavbar'
import WelcomMessage from './home/WelcomMessage'
import CategoryTagsWraper from './home/CategoryTagsWraper'
import GridViewWraper from './home/GridViewWraper'
import RoomCard from '../utils/custom/RoomCard'

function RoomieHomePage() {
  const cards = [1, 1, 1, 1, 1, 1].map((e) => {
    return <RoomCard />
  })
  return (
    <div className='bg-gray-600 pb-5 '>
      <div className="container mx-auto">

        <div className="py-5">
          <RoomieNavbar />
        </div>

        <WelcomMessage />
        <CategoryTagsWraper />
        <GridViewWraper children={cards} />
      </div>
    </div>

  )
}

export default RoomieHomePage