import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import ListCountries from '../components/ListCountries';
import { useQuery, gql } from '@apollo/client';
import Filter from '../components/Filter';
import { ContainerFilters, ContainerDisplay } from '../assets/styles/HomePage'


const WORLD_DATA = gql`
    query {
        Region {
            name
        }
        Currency {
            name
        }
        Language {
            name
        }
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

interface IFiltersState {
    language: string;
    currency: string;
    region: string;
}

function HomePage(props: any): JSX.Element {
    
    const [countries, setCountries] = useState<[]>([]);
    const [languageOptions, setLanguageOptions] = useState<[]>([]);
    const [regionOptions, setRegionOptions] = useState<[]>([]);
    const [currencyOptions, setCurrencyOptions] = useState<[]>([]);
    const [filters, setFilters] = useState<IFiltersState>({
        language: '',
        currency: '',
        region: '',
    });

    const { loading, data, error } = useQuery(WORLD_DATA);

    useEffect(() => {
        if (data) {
            setCountries(data.Country);
            setLanguageOptions(data.Language);
            setCurrencyOptions(data.Currency);
            setRegionOptions(data.Region);
        }
    }, [data]);

    const filterSelected = (filterName: string, value: string) => {
    
        setFilters((prevState) => ({
            ...prevState,
            [filterName]: value,
        }));
    };

    return (
        <>
            <Header />
            <SearchBar />
            <ContainerFilters>
                <Filter
                    name={'Language'}
                    options={languageOptions}
                    onSelect={filterSelected}
                />
                <Filter
                    name={'Currency'}
                    options={currencyOptions}
                    onSelect={filterSelected}
                />
                <Filter
                    name={'Region'}
                    options={regionOptions}
                    onSelect={filterSelected}
                />
            </ContainerFilters>
            <ContainerDisplay>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    !error && (
                        <ListCountries
                            countries={countries}
                            filters={filters}
                        />
                    )
                )}
            </ContainerDisplay>
            <Footer />
        </>
    );
}

export default HomePage;