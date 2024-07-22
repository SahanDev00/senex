import React, { useContext } from 'react'
import HeroPic from "../Assets/Images/Hero.png"
import Searchbar2 from "../Components/Searchbar2"
import { SearchContext } from '../SearchContext';
import { Link } from 'react-router-dom';

const Hero = () => {

  const { setSearchQuery } = useContext(SearchContext);

  return (
    <div className='w-full mx-auto mb-14'>
    <div className='w-[85%] h-[85vh] mt-3 mb-5 flex mx-auto'>
        <div className='mt-[20vh] w-full float-up ml-10'>
          <h1 className='text-7xl font-bold text-red-600 drop-shadow-md cursor-default font-poppins'>SENƎX</h1>
          <p className='text-2xl mt-4 leading-relaxed text-white drop-shadow-md font-poppins'>Welcome to our online store, where we provide high quality merchandise at unbeatable prices. Our customer service is unmatched, and that we stock all the newest and greatest items on store.</p>
          <Searchbar2 onSearch={setSearchQuery} products={[]}/>
          <Link to='/product'>
            <button className='px-6 py-3 font-poppins rounded-full mt-7 text-white font-semibold bg-red-600 border-white border-2 hover:scale-105 duration-300 hover:shadow-md active:scale-95'>SHOP NOW</button>
          </Link>
        </div>
        <div className='flex mx-auto items-center'>
          <img className='w-[1100px] ml-10 float-to-right z-10 drop-shadow' src={HeroPic} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Hero