import React from 'react'
import { Link } from 'react-router-dom'


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
        return <Link to="/country"><span>{country.name}</span></Link>
    })

    return (
        <>
            {Countries()}
        </>
    )
}

export default ListCountries;