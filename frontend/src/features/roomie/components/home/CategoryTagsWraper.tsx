import React from 'react';
import { FaFireAlt } from 'react-icons/fa';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

interface TagProps {
  name: String;
  active: Boolean,
  onclick: (value: String) => void

}

function CategoryTag({ name, active, onclick }: TagProps) {



  return (

    <div className={active ? "rounded-full p-2  overflow-hidden flex flex-row items-center  gap-2 sm:flex-wrap bg-white " : "rounded-full p-2 bg-gray-800 overflow-hidden flex flex-row items-center  gap-2 sm:flex-wrap"} onClick={() => onclick(name)}>

      < div className={active ? "bg-gray-900  p-1 text-2xl rounded-full sm:text-lg md:text-xl text-white " : "bg-white p-1 text-2xl rounded-full sm:text-lg md:text-xl text-black"} >
        <FaFireAlt />
      </div >
      <p className={active ? ' font-medium  text-black' : 'text-white font-medium  '}>{name}</p>
    </div >
  );
}

function CategoryTagsWraper() {

  let [searchParams, setSearchParams] = useSearchParams();

  function handleCategorySelect(value: any) {
    setSearchParams({ q: searchParams.get('q') ?? '', category: value });

  }
  return (
    <div className="flex justify-between py-5">

      <div className="flex gap-4 overflow-x-scroll 
      [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']
      ">

        <CategoryTag name={'low-price'} active={searchParams.get('category') === 'low-price'} onclick={handleCategorySelect} />
        <CategoryTag name={'high-price'} active={searchParams.get('category') === 'high-price'} onclick={handleCategorySelect} />
        {/* <CategoryTag name={'high-rating'} active={searchParams.get('category') === 'high-rating'} onclick={handleCategorySelect}
        /> */}
      </div>

      <div className=''>
        <CategoryTag name={'All'} active={searchParams.get('category') === 'All' || searchParams.get('category') === null} onclick={handleCategorySelect}
        />
      </div>
    </div>
  );
}

export default CategoryTagsWraper;
