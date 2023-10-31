import React from 'react'
import { useGetHomeSongsQuery } from '../../api/music/saavanApi'

function MusicHome() {
    const { data, error, isLoading } = useGetHomeSongsQuery('telugu songs')

    if (isLoading) {
        return <div>Loading</div>
    }
    if (error) {
        return <div>Error</div>
    }

    console.log(data)
    return (
        <div>
           "SDfds"
        </div>
    )
}

export default MusicHome