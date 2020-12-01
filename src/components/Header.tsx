import React from 'react'
import styled from 'styled-components'

const desktop = `@media (min-width: 1024px)`;
const tablet = `@media (min-width: 600px)`;

const Title = styled.h1`
    text-align: center;
    font-size: 1.0rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #0d2338;

    ${tablet} {
        font-size: 3.0rem;
    }

    ${desktop} {
        font-size: 5.0rem;
    }

`

function Header() {
    return (
        <header>
            <Title>Discover the world</Title>
        </header>
    )
}

export default Header;