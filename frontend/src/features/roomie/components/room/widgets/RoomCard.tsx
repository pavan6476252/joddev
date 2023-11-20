import React from 'react'
import {Room  } from '../../../../../store/room/roomSlice';
interface RoomCardProps {
  data: Room
}

const RoomCard: React.FC<RoomCardProps> = ({data}:RoomCardProps) => {
  const cardStyles = 'rounded-md bg-gray-800 hover:scale-105 transform transition-transform   p-4';
  const imageStyles = 'h-52  w-full rounded-md bg-white';
  const priceStyles = 'text-2xl font-medium text-white';
  const ratingStyles = 'text-sm text-gray-300';
  const locationStyles = 'text-gray-300';
  const titleStyles = 'text-white';
  const descriptionStyles = 'text-gray-300';
  return (
    <div className={cardStyles}>
      <img src={data.images[0]} alt="image" className={imageStyles} />

      <div className="flex justify-between my-2">
        <p>
          <span className={priceStyles}>${data.title}</span>
          <span className={ratingStyles}>/night</span>
        </p>

        <div className="flex gap-2 items-center">
          <span className="text-gray-300">⭐</span>
          <p className={ratingStyles}>5.0</p>
        </div>
      </div>

      <p className={locationStyles}>Jakarta, India</p>
      <h4 className={titleStyles}>Luxury Room Mid Space</h4>
      <p className={descriptionStyles}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis id aperiam ea mollitia.
      </p>
      <div className="border-2 rounded-md border-blue-600 mt-3  p-3 text-center">
        <p className='text-blue-600 font-medium '>Choose Room</p>
      </div>
    </div>
  );
};

export default RoomCard;
