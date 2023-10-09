import './styles/searchbar.css'
import React, { useState, useEffect }from 'react'
// import { useSearchParams } from 'react-router-dom';
// import AllProducts from './AllProducts'

const Searchbar = ({placeholder, word, setWord}) => {
  const [searchBar, setSearchBar] = useState("");
  
  const handleSearchChange = (value) => {
    setWord(value);
    console.log(value);
    }
    
  return (
    <div className="search">
      <div className='searchInputs'>
        <input 
            id='searchbar'
            className='product-search'
            type='text'
            name='searchbar' 
            value={word} 
            placeholder={placeholder}
            onChange={(e) => handleSearchChange(e.target.value)} 
            />
          <div className="searchIcon"></div>
      </div>
    </div>
  );
}

export default Searchbar