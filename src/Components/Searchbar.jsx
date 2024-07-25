import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const Searchbar = ({ onSearch }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    if (event.target.value.length >= 2) {
      setError(''); // Clear the error if the query length is valid
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.length < 2) {
      setError('Please enter at least 2 characters.');
      return;
    }
    onSearch(searchQuery);
    navigate(`/product/search?q=${searchQuery}`);
  };

  return (
    <div className='w-[320px] lg:ml-6 2xl:ml-11 sm:ml-6 md:ml-14 sm:w-[600px] md:w-[700px] mx-auto justify-center lg:w-[80%] xl:w-[65%] mxl:w-[940px] 2xl:w-[89%]  mt-4 flex items-center h-[50px]'>
      <form onSubmit={handleSubmit} className='w-full h-full flex'>
        <button type='submit' className='w-[50px] h-[50px] rounded-l-md bg-red-600 flex items-center hover:cursor-pointer'>
            <IoSearch size={25} className='mx-auto text-white' />
        </button>
        <input
          type='text'
          placeholder='Search a product...'
          value={searchQuery}
          onChange={handleChange}
          className='border w-full h-full pl-5 bg-white rounded-r-lg border-red-600'
        />
      </form>
      {error && <p className="text-red-500 ml-52 absolute w-full ">{error}</p>}
    </div>
  );
};

export default Searchbar;
