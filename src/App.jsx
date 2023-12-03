// App.jsx

import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import BeerCard from './components/BeerCard';
export default function App() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers')
      .then((response) => response.json())
      .then((data) => setBeers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div >
    <header className='flex  justify-between mb-2 h-10  bg-slate-600  text-center '>
      <h1 className='text-3xl'>Beer Store</h1>
      <SearchBar onSearchChange={setSearchTerm} />
      </header>
      <div className='flex flex-wrap justify-between items-center ' >
        {filteredBeers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
};



