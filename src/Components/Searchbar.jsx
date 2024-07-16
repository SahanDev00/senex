import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const Searchbar = ({ onSearch }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery); // Update the context with the search query
    navigate(`/search?q=${searchQuery}`);
  };

  return (
    <div className='w-[89%] ml-6 mt-4 flex items-center h-[50px]'>
      <form onSubmit={handleSubmit} className='w-full h-full flex '>
        <button type='submit' className='w-[50px] h-[50px] rounded-l-md bg-red-600 flex items-center hover:cursor-pointer'>
            <IoSearch size={25} className='mx-auto text-white' />
        </button>
        <input
          type='text'
          placeholder='Search a product...'
          value={searchQuery}
          onChange={handleChange}
          className='border w-full h-full pl-5 rounded-r-lg border-red-600'
        />
      </form>
    </div>
  );
};

export default Searchbar;
