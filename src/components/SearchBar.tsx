import React from 'react'
import styled from 'styled-components'


const Search = styled.div`
    width: 60vw;
    height: 4.0rem;
    margin: 1% auto;
    /* padding: 0 2%; */
    border-radius: 40px;
    border: solid 3px #004c5e;
    background-color: rgba(216, 216, 216, 0.3);

    input {
        border: none;
        border-radius: 40px;
        width: 100%;
        height: 100%;
        background-color: rgba(216, 216, 216, 0);
        padding: 0 1%;
        text-align: center;
    }
`

function SearchBar() {
    return (
        <Search >
            <input type="search" placeholder="Name the country"/>
        </Search>
    )
}

export default SearchBar;