import React, { useEffect, useState } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useLazyQuery, gql } from '@apollo/client';
import { country } from './../interfaces/country';
import { ContainerHeader, ContainerInfoCountry, ButtonBack, Information, Flag} from '../assets/styles/Country'


const COUNTRY_DATA = gql`
    query GetCountry($alpha2Code: String!) {
        Country(alpha2Code: $alpha2Code) {
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

interface IProps {
    [x: string]: any;
    selectedCountry: country;
}
function Country(props: IProps): JSX.Element {
    const {
        match: { params },
    } = props;

    const [country, setCountry] = useState(props.selectedCountry);

    const {
        area,
        name,
        subregion,
        population,
        capital,
        officialLanguages,
        currencies,
        flag,
    } = country;

    const [getCountries, { data }] = useLazyQuery(
        COUNTRY_DATA,
        {
            variables: { alpha2Code: params.country.toUpperCase() },
        }
    );

    useEffect(() => {
        if (!props.selectedCountry.name) getCountries();
    }, []);

    useEffect(() => {
        if (data) {
            setCountry(data.Country[0]);
        }
    }, [data]);

    return (
        <>
            <ContainerHeader>
                <Link to="/" title=" button back">
                    <ButtonBack>❮</ButtonBack>
                </Link>
                <Header />
                <ButtonBack />
            </ContainerHeader>
            <ContainerInfoCountry>
                {country.name && (
                    <>
                        <Information>
                            <span>{name}</span>
                            <ul>
                                <li>Region: {subregion.region.name}</li>
                                <li>Area: {area}</li>
                                <li>Capital: {capital}</li>
                                <li>Population: {population}</li>
                                <li>
                                    Currencies:{' '}
                                    {currencies
                                        .map((i: { name: string }) => i.name)
                                        .join()}
                                </li>
                                <li>
                                    Oficial languages:{' '}
                                    {officialLanguages
                                        .map((i: { name: string }) => i.name)
                                        .join()}
                                </li>
                            </ul>
                        </Information>
                        <Flag>{flag.emoji}</Flag>
                    </>
                )}
            </ContainerInfoCountry>
            <Footer />
        </>
    );
}

export default Country;