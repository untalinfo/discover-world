import React from 'react'
import { Search } from '../assets/styles/SearchBar'


function SearchBar() {
    return (
        <Search >
            <input type="search" placeholder="Enter name of country..."/>
        </Search>
    )
}

export default SearchBar;