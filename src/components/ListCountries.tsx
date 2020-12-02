import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const desktop = `@media (min-width: 1024px)`;
const tablet = `@media (min-width: 600px)`;

const Item = styled.span`
    width: 50vw;
    font-size: 0.3rem;
    font-style: normal;
    text-align: center;
    color: #0d2338;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

    ${tablet} {
        font-size: 2rem;
    }

    ${desktop} {
        font-size: 3rem;
    }
`
type country = {
    name: string
}

interface IProps {
    countries: Array<country>
}

function ListCountries(props: IProps) {

    const { countries } = props;
    console.log(countries)
    const Countries = () => countries.map((country: country) => {
        return <Link to="/country"><Item>{country.name}</Item></Link>
    })

    return (
        <>
            {Countries()}
        </>
    )
}

export default ListCountries;