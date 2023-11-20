import React from 'react'
import HelpdevNavbar from './HelpdevNavbar'
import WelcomMessage from '../../roomie/components/home/WelcomMessage'
import { BiArrowToRight } from 'react-icons/bi'

function DevScreen() {
    return (
        <div className='bg-slate-100 pb-10'>
            <div className="container mx-auto first-letter:">
                <HelpdevNavbar />

                <div className='mx-2 my-4'>
                    <h1 className='text-5xl font-bold  text-slate-800'>Good Morning ,{null ?? "User"}</h1>
                    <p className='text-lg text-slate-500 mt-4 max-w-3xl'>Get tips and advice on delivering exceptional customer service, engaging and delighting your customers, and building a customer-centric company.</p>
                </div>

                <div className='my-6 flex justify-between gap-6'>
                    {
                        ["Full stack", "Android", "Devops", "Ethical Hacking"].map((e) => {
                            return <div className='px-4 py-2 
                            hover:scale-105 transition-transform
                            hover:bg-slate-900  text-slate-800 hover:text-gray-200 rounded-sm   bg-slate-300 flex-1 text-center '>
                                <p className='text-lg font-medium'>{e}</p>
                            </div>
                        })
                    }


                </div>
                <hr className='mt-5' />
                <div className="flex justify-between my-6">
                    <h1 className='text-3xl font-bold'>

                        Customer Service
                    </h1>
                    <h3 className='flex gap-4 items-center text-lg text-blue-800 font-medium'>

                        View More Posts
                        <i className='text-2xl'>
                            <BiArrowToRight />
                        </i>
                    </h3>
                </div>
                <div className='grid  grid-cols-4 gap-4'>
                    {

                        [1, 2, 3, 34, 4, , 5, 55, 55, 56].map((e) => {
                            return <div className='p-2  bg-white rounded-md '>
                                <div className="rounded-md overflow-hidden">
                                    <img src={'https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F38Hcsm3AYBJBhRDw0t0vuC%2F1206a4d76b8441cb107e5bb0214ce1bf%2FCRM_Marketing_Beginner_s_Guides.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=1075&h=604&s=af29fd3f031c0b8b5cec23d4f89568fb'} alt="images" className='object-cover rounded-md hover:scale-105 transition-transform' />
                                </div>
                                <div className='py-2'>
                                    <code className='text-sm'>Software & Systems</code>
                                    <p className='text-xl font-medium'>
                                        How AI Can Boost Help Desk Productivity (+ 7 Tools to Try)</p>
                                </div>
                            </div>
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default DevScreen