// RoomsScr.tsx

import React, { useState } from 'react';
import RoomsNavbar from '../components/roomsNavBar';
import RoomCard from '../components/RoomCard';
import { useLoaderData } from 'react-router-dom';
import { RoomResponse } from '../types';
interface props {

}
const RoomsScr: React.FC = () => {
    const roomData = useLoaderData() as

        { myRooms: [RoomResponse], allRooms: [RoomResponse] };

    // console.log(roomData);
    // State for the search value
    const [searchValue, setSearchValue] = useState<string>('');

    // Filter rooms based on the search value
    const filteredMyRooms = roomData.myRooms.filter((room) =>
        room.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    const filteredAllRooms = roomData.allRooms.filter((room) =>
        room.title.toLowerCase().includes(searchValue.toLowerCase())
    );


    return (
        <div className="bg-[#F5F5F5] min-h-screen">
            <RoomsNavbar onchange={setSearchValue}/>
            <div className="container   px-4  py-6">
                <h1 className="text-2xl font-bold mb-4">My Rooms</h1>
                <div className="grid 
                    grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredMyRooms.map((room, idx) => (
                        <RoomCard key={idx} room={room} />
                    ))}
                </div>
            </div>
            {/* all rooms  */}
            <div className="container  px-4   py-6">
                <h1 className="text-2xl font-bold mb-4">All Open Rooms</h1>
                <div className="
                
                    grid grid-cols-1 
                    
                    sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredAllRooms.map((room, idx) => (
                        <RoomCard key={idx} room={room} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RoomsScr;
