import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { getRoomAsync, selectRooms } from '../../../../store/room/roomSlice';
import RoomCard from '../room/widgets/RoomCard';
import PlaceholderCard from '../../utils/shimmers/PlaceholderCard';
interface Props {
    children: React.ReactNode
}
function GridViewWraper({ children }: Props) {
    const roomStatus = useAppSelector(state => state.room.status);
    const roomError = useAppSelector(state => state.room.error);
    const rooms = useAppSelector(selectRooms);


    const dispatch = useAppDispatch()
    useEffect(() => {

        dispatch(getRoomAsync());
    }, [dispatch]);


    if (roomStatus === 'failed') {
        return <div>Error: {roomError}</div>;
    }

    return (
        <>
            <h4 className=' text-white text-xl my-3'>Results count :{rooms.length}</h4>
            <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {roomStatus === 'loading' ? (
                    [1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
                        <PlaceholderCard key={index} />
                    ))
                ) : (
                    rooms.map((room) => (
                        <RoomCard key={room._id} data={room} />
                    ))
                )}
            </div>

        </>
    )
}

export default GridViewWraper