import React from 'react';
import styled from 'styled-components'
import Header from '../components/Header';
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import FilterLanguage from '../components/FilterLanguage'
import FilterCurrency from '../components/FilterCurrency'
import FilterRegion from '../components/FilterRegion'

const ContainerFilters = styled.section`
    width: 60vw;
    height: 50px;
    /* border: solid black; */
    margin: auto;
    display: flex;
    justify-content: space-between;
`

function HomePage(): JSX.Element {
    return (
        <>
            <Header />
            <SearchBar />
            <ContainerFilters>
                <FilterLanguage/>
                <FilterCurrency />
                <FilterRegion />
            </ContainerFilters>
            <Footer />
        </>
    )
}

export default HomePage;