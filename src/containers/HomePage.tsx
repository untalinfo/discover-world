import React from 'react';
import styled from 'styled-components'
import Header from '../components/Header';
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'

const ContainerFilters = styled.section`
    width: 60vw;
    height: 50px;
    border: solid black;
    margin: auto;
    display: flex;
`

function HomePage(): JSX.Element {
    return (
        <>
            <Header />
            <SearchBar />
            <ContainerFilters></ContainerFilters>
            <Footer />
        </>
    )
}

export default HomePage;