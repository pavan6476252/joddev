import { Typography, Button } from "@material-tailwind/react"
import React from "react"
import { useLocation } from "react-router-dom"
import { DevBlogCard } from "../components/DevBlogCard" 
import { GlobalNavbar } from "../../../components/GlobalNavBar"

export default function DevLayout() {
    const location = useLocation()

    // return LATEST BLOG POSTS

    // Blog Posts
    // This is the paragraph where you can write more details about blogs.Keep you user engaged by providing meaningful information.

    return (
        <div >
            <GlobalNavbar />
            <div className='container'>

                <div className='flex flex-col mt-8 '>

                    <div className='mb-4'>

                        <Typography variant='h4' >LATEST BLOG POSTS</Typography>
                        
                    </div>
                    <div className="blogs grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {
                            [1, 2, 3, 3].map((data) => {
                                return <DevBlogCard  />
                            })
                        }
                    </div>
                    <Button className=' mt-5'>View more</Button>
                </div>
            </div>

        </div>)

}