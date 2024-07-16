import React, { useContext, useState } from 'react'
import { Outlet, } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
import Searchbar from '../Components/Searchbar'
import { SearchContext } from '../SearchContext';

const Home = () => {

    const { setSearchQuery } = useContext(SearchContext);

  return (
    <div className="flex w-[99%] mx-auto">
      <div className="hidden lg:block">
          <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
          <Searchbar onSearch={setSearchQuery} products={[]}/>
          <div className=" w-[1340px] ml-6">
              <Outlet />
          </div>
      </div>
  </div>
  )
}

export default Home