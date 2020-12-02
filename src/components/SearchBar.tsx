import React from 'react'
import styled from 'styled-components'


const Search = styled.form`
    width: 60vw;
    height: 4.0rem;
    margin: 1% auto;
    border-radius: 40px;
    border: solid 3px #004c5e;
    background-color: rgba(216, 216, 216, 0.3);
    display: flex;


    input {
        border: none;
        border-radius: 40px;
        width: 100%;
        height: 100%;
        background-color: rgba(216, 216, 216, 0);
        padding: 0 1%;
        text-align: center;
        outline: none;
    }

    .searchIcon {
        width: 2%;
        height: auto;
        font-size: 1.8rem;
        position: absolute;
        left: 75%;
        top: auto;
        bottom: auto;
        right: 0;
        float: left;
    }
`

function SearchBar() {
    return (
        <Search >
            <input type="search" placeholder="Enter name of country..."/>
            <div className="searchIcon">🔍 </div>
        </Search>
    )
}

export default SearchBar;