import React from 'react'
import { Search } from '../assets/styles/SearchBar'


interface IProps {
    onChange : Function
}

function SearchBar(props : IProps) {
    const { onChange } = props;
    return (
        <Search>
            <input
                type="search"
                placeholder="Enter name of country..."
                onChange={({ target }) => onChange(target.value)}
            />
        </Search>
    );
}

export default SearchBar;