// RoomCard.tsx

import React from 'react';
import { RoomResponse } from '../types';

interface RoomCardProps {
  room:RoomResponse
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <div className="bg-white  shadow-lg rounded-lg">
      {/* <img src={room.thumbnail} alt={room.title} className="w-full h-32 object-cover rounded-t-lg" /> */}
      <img src={'https://img.freepik.com/premium-vector/comic-youtube-thumbnail-background-comic-style_530597-997.jpg?w=1380'} alt={room.title} className="w-full h-40 object-cover rounded-t-lg" />
      <div className="px-4 py-2">
        <h2 className="text-lg font-semibold">{room.title}</h2>
        <p className="text-[#888]">{room.subTitle}</p>
        <p className="text-[#888] text-sm mt-2">{room.startTime}</p>
      </div>
    </div>
  );
};

export default RoomCard;
