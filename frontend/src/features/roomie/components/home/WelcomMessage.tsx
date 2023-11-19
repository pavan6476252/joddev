import React from 'react'
import { useAppSelector } from '../../../../store/hooks'

function WelcomMessage() {
    const username = useAppSelector(state=>state.auth.displayName);
    return (
        <div className='mx-2 my-4'>
            <h1 className='text-5xl font-bold  text-white'>Good Morning ,{username??"User"}</h1>
            <p className='text-lg text-gray-300 mt-4'>Where do you want to live now? Choose best roomie</p>
        </div>
    )
}

export default WelcomMessage