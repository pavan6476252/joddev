import React from 'react'
interface Props {
    children: React.ReactNode
}
function GridViewWraper({ children }: Props) {
    return (
        <div className='grid  grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>

            {
                children
            }
        </div>
    )
}

export default GridViewWraper