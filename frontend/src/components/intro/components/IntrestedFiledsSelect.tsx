import React, { useState } from 'react'
import { developerCategories } from '../../../data/developer_topics';

interface props{
    selectedCategories: string[],
    setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>
}
function IntrestedFiledsSelect({selectedCategories,setSelectedCategories}:props) {
   
    const toggleCategory = (category: string) => {
        setSelectedCategories((prevCategories: string[]) => {
            if (prevCategories.includes(category)) {
                return prevCategories.filter((c: string) => c !== category);
            } else {
                return [...prevCategories, category];
            }
        });
    }
    return (
        <div className='flex flex-wrap'>
            {Object.keys(developerCategories).map((category, index) => (
                <div
                    key={index}
                    onClick={() => toggleCategory(category)}
                    className={`hover:cursor-pointer px-4 py-2 bg-gray-200 mx-3 my-2 rounded-md ${selectedCategories.includes(category) ? 'text-white bg-blue-700' : ''
                        }`}
                >
                    <div className="flex items-center">
                        {(developerCategories as any)[category].icon}
                        <span className="ml-2">{(developerCategories as any)[category].title}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default IntrestedFiledsSelect