// SearchBar.jsx

import React from 'react';

const SearchBar = ({ onSearchChange }) => (
  <input
    type="text"
    placeholder="Search by beer name"
    onChange={(e) => onSearchChange(e.target.value)}
    className='focus:outline-none  bg-inherit h-8  text-slate-900 rounded-sm  border-b  mr-4 w-80'
  />
);

export default SearchBar;
