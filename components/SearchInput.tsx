'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchInput = () => {
  return (
    <div className="justify-center my-5">
      {/* Search container */}
      <div className="relative w-1/2 max-w-[859px] h-[78px]">
        {/* Font Awesome search icon */}
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-14 top-1/2 transform -translate-y-1/2 text-searchIcon w-[18.67px] h-[18.67px]"
        />

        {/* Search input */}
        <input
          type="text"
          placeholder="Search FAQs here"
          className="w-[300px] md:w-full h-full pl-24 pr-4 border border-gray-300 rounded-[10px] text-[18px] placeholder-primary focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
    </div>
  );
};

export default SearchInput;
