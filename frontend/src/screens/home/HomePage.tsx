import { Button } from '@material-tailwind/react'
import React, { useReducer, useState } from 'react'
import { popularTechnologies, tabs } from './data/technologies'
import Footer from './Footer';
import { useSelector } from 'react-redux';
import { toggleDarkMode } from '../../store/theme/darkModeSlice';
import { RootState } from '../../store/store';
import { useDispatch } from 'react-redux';
import ThemeSwichButton from '../../utils/ThemeSwichButton';
import Navbar from './Nabar';
// import { NavLink } from 'react-router-dom';


function HomePage() {
    const isDarkMode = useSelector((state: RootState) => state.darkMode.isDarkMode);
    return (
        <body className={isDarkMode ? "dark" : 'light'}>
<Navbar/>
            <HomeMainContent />
            <Footer />
        </body>
    )
}


function HomeMainContent() {
    const [selectedTab, setSelectedTab] = useState<number>(0);
    function changeActiveTab(idx: number) {
        setSelectedTab(idx)
    }

    return (
        <div className='container justify-center flex flex-col text-center my-4'>
            <h1 className=' font-thin text-2xl py-5'>
                Become a <span className='font-bold '>Jod</span> in these fields...
            </h1>

            <div id="tab-bar" className='my-4 flex overflow-x-scroll gap-2 [&::-webkit-scrollbar]:hidden '>
                {tabs.map((tab, idx) => (
                    <div
                        onClick={() => changeActiveTab(idx)}
                        key={idx}
                        className={(idx === selectedTab) ? "px-4 py-2 border-b-2 border-red-300 whitespace-nowrap font-medium " : " px-4 py-2 whitespace-nowrap hover:border-red-300  hover:border-b-2 text-gray-700 hover:cursor-pointer"}



                    >
                        <p>
                            {tab.title}
                        </p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tabs[selectedTab].content.map((tech, index) => (
                    <div
                        key={index}
                        className='
                        
                        --bg-blue-gray-900
                        bg-blue-gray-900
                         p-4 rounded-md text-white flex   items-center   transition duration-300 ease-in-out transform hover:ring-2 hover:ring-blue-500 hover:scale-95'
                    >
                        {/* Image on the left */}
                        <div style={{ minWidth: "4rem" }} className="w-16 h-16 bg-red-300  rounded-full mr-4 "></div >
                        {/* Title and subtitle in a column */}
                        <div className='text-start'>
                            <h4 className='font-medium text-md'>{tech.title}</h4>
                            <p className='text-sm
                            font-thin text-gray-300 line-clamp-2'>{tech.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}



export default HomePage