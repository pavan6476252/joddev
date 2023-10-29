import { Typography, Button } from "@material-tailwind/react"
import React from "react"
import { useLocation } from "react-router-dom"
import { DevBlogCard } from "../components/DevBlogCard"
import { GlobalNavbar } from "../../../components/GlobalNavBar"
import { DevMustCheckBlogCard } from "../components/DevMustCheckBlogCard"
import { DevJoinChannelCard } from "../components/DevJoinChannelCard"
import Footer from "../../../components/Footer"

export default function DevLayout() {
    const location = useLocation()

    // return LATEST BLOG POSTS

    // Blog Posts
    // This is the paragraph where you can write more details about blogs.Keep you user engaged by providing meaningful information.

    return (
        <div >
            <div className="sticky top-0 z-10 ">
                <GlobalNavbar />

            </div>
            <div className='container'>
                {/* blogs section  */}

                <div className='flex flex-col mt-8 '>

                    <div className='mb-4  flex items-center justify-between'>

                        <Typography

                            variant='h4' >LATEST BLOG POSTS</Typography>
                        <Button
                            variant="outlined"
                            className='  '>View more</Button>
                    </div>
                    <div className="blogs grid 
                    grid-cols-2
                    sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {
                            [1, 2, 3, 3].map((data) => {
                                return <DevBlogCard />
                            })
                        }
                    </div>

                </div>

                {/* must check channels  */}
                <div className='flex flex-col mt-8 '>

                    <div className='mb-4  flex items-center justify-between'>

                        <Typography

                            variant='h5' >Must check</Typography>
                        <Button
                            variant="outlined"
                            className='  '>View more</Button>
                    </div>
                    <div className="blogs grid 
                    grid-cols-2
                    sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-4">

                        {
                            [1, 2, 3].map((x) => <DevMustCheckBlogCard />)
                        }
                    </div>
                </div>

                {/* rooms / channels  */}
                <div className='flex flex-col mt-8 '>


                    <DevJoinChannelCard />
                </div>

            </div>

            <Footer />
        </div >)

}