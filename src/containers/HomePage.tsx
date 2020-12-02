import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Header from '../components/Header';
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import FilterLanguage from '../components/FilterLanguage'
import FilterCurrency from '../components/FilterCurrency'
import FilterRegion from '../components/FilterRegion'
import ListCountries from '../components/ListCountries'
import { useQuery, gql } from '@apollo/client';


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
    height: 50vh;
    overflow-y: scroll;
    margin: auto;

    a{
        text-decoration: none;
        text-align:center;
        font-size: 3rem;
        display: block;
    }
    
`;

function HomePage(props: any): JSX.Element {

    const COUNTRIES = gql`
    query {
        Country {
        name
      }
    }
`;

    const [countries, setCountries] = useState<[]>([]);

    const { loading, data, error } = useQuery(COUNTRIES)

    useEffect(() => {
        if (data) {
            setCountries(data.Country)
        }
    }, [data])

    return (
        <>
            <Header />
            <SearchBar />
            <ContainerFilters>
                <FilterLanguage />
                <FilterCurrency />
                <FilterRegion />
            </ContainerFilters>
            <ContainerDisplay>
                {loading ? 'Loading' : (!error) && <ListCountries countries={countries} />}

            </ContainerDisplay>
            <Footer />
        </>
    )
}

export default HomePage;