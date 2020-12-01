import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const desktop = `@media (min-width: 1024px)`;
const tablet = `@media (min-width: 600px)`;

const Display = styled.span`
    width: 50vw;
    font-size: 2rem;
    font-style: normal;
    text-align: center;
    color: #0d2338;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

    ${tablet} {
        font-size: 5rem;
    }

    ${desktop} {
        font-size: 10rem;
    }

`

function DisplayCountry() {
    return (
        <Link to="/country">
            <Display>Colombia</Display>
        </Link>
        
    )
}

export default DisplayCountry;