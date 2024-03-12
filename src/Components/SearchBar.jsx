import React, { useState } from 'react';
import { runSearch } from '../contexts/ImageContext';
import { useContext } from 'react';
import { ImageContext } from '../contexts/ImageContext';

function SearchBar({handleSearch}) {
  const { runSearch } = useContext(ImageContext);
  const [searchEntry, setSearchEntry] = useState('');
  return (
    <form onSubmit={(e) => {handleSearch(e, searchEntry)
    runSearch(searchEntry)}}>
      <input onChange={(e) => setSearchEntry(e.target.value)} type="text" placeholder="Search..." />
      <button>Search</button>
    </form>
  );
}

export default SearchBar;
