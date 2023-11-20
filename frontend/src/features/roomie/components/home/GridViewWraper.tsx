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
    const roomsRes = useAppSelector(state => state.room.res);


    const dispatch = useAppDispatch()
    useEffect(() => {

        dispatch(getRoomAsync());
    }, [dispatch]);


    if (roomStatus === 'failed') {
        return <div>Error: {roomError}</div>;
    }
    if (roomStatus === 'loading') {
        return (
            <>

                <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
                            <PlaceholderCard key={index} />
                        ))
                    }
                </div>

            </>
        )
    }

    return (
        <>
            <h4 className=' text-white text-xl my-3'>Results count :{roomsRes?.count}</h4>
            {/* <p className='text-white'>

                {
                    roomsRes?.count
                }
            </p> */}
            <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {(
                    roomsRes?.rooms.map((room, idx) => (
                        // <p key={idx}> sdfsd </p>
                        <RoomCard key={room._id} data={room} />
                    ))
                )}
            </div>

        </>
    )
}

export default GridViewWraper