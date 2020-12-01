import React from 'react';
import styled from 'styled-components'
import Header from '../components/Header';
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import FilterLanguage from '../components/FilterLanguage'
import FilterCurrency from '../components/FilterCurrency'
import FilterRegion from '../components/FilterRegion'
import DisplayCountry from '../components/DisplayCountry'


const ContainerFilters = styled.section`
    width: 60vw;
    height: 50px;
    /* border: solid black; */
    margin: auto;
    display: flex;
    justify-content: space-between;
`
const ContainerDisplay = styled.main`
    width: 40vw;
    margin: auto;
    display: flex;
    justify-content:center;

    a{
        text-decoration: none;
    }
    
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
            <ContainerDisplay>
                <DisplayCountry/>
            </ContainerDisplay>
            <Footer />
        </>
    )
}

export default HomePage;