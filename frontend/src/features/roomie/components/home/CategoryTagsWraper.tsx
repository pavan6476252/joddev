import React from 'react'
import { FaFireAlt } from 'react-icons/fa'

function CategoryTagsWraper() {
  return (
    <div className="flex justify-between py-5 ">

      <div className='flex gap-4'>

        <CategoryTag />
        <CategoryTag />
        <CategoryTag />
      </div>

      <div className='flex gap-4'>
 
        <CategoryTag />
      </div>
    </div>
  )
}

export default CategoryTagsWraper


function CategoryTag() {
  return <div className="rounded-full p-2 bg-gray-800 overflow-hidden flex flex-row  items-center ">

    <div className="bg-white p-1 text-2xl rounded-full ">
      <FaFireAlt />
    </div>
    <p className='text-xl px-2 font-normal  text-gray-300'>Popular</p>
  </div>
}