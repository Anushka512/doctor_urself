import React from 'react';
import { BsFillSearchHeartFill } from 'react-icons/bs';

const Search = () => {
    return (
        <div className=''>
            <div className="flex w-90 items-center bg-white rounded-lg shadow-xl">
  <span className="w-auto flex justify-end items-center text-gray-500 p-2">
    <BsFillSearchHeartFill/>
  </span>
  <input className="bg-transparent rounded-r-lg p-2 text-black flex-1 border-none outline-none" type="text" placeholder="Search..."/>
</div>
        </div>
    );
};

export default Search;