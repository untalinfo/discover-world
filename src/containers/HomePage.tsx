import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Header from '../components/Header';
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import ListCountries from '../components/ListCountries'
import { useQuery, gql } from '@apollo/client';
import Filter from '../components/Filter';


const desktop = `@media (min-width: 1024px)`;
const tablet = `@media (min-width: 600px)`;

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
    text-align: center;

    p {
        font-size: 4rem;
    }

    a{
        text-decoration: none;
        font-size: 1rem;
        display: block;
        font-size: 0.3rem;
        font-style: normal;
        color: #0d2338;

        &:hover {
            font-size: 3.4rem;
            color: #70a32d;
        }

        ${tablet} {
            font-size: 2rem;
        }

        ${desktop} {
            font-size: 3rem;
        }
    }
    
`;

function HomePage(props: any): JSX.Element {

    const COUNTRIES = gql`
    query {
            Country {
            name
            alpha2Code
            area
            population
            capital
            subregion {
                name
                region {
                    name
                }
            }
            officialLanguages {
                name
            }
            currencies {
                name
            }
            flag {
                emoji
            }
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
                <Filter name={'Language'} />
                <Filter name={'Curriency'} />
                <Filter name={'Region'} />
            </ContainerFilters>
            <ContainerDisplay>
                {loading ? <p>Loading...</p> : (!error) && <ListCountries countries={countries} />}

            </ContainerDisplay>
            <Footer />
        </>
    )
}

export default HomePage;