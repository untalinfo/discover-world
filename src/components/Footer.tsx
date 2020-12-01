import React from 'react'
import styled from 'styled-components'
import TerraSmall from '../assets/images/terra-small.png'
import TerraMedium from '../assets/images/terra-medium.png'
import TerraLarge from '../assets/images/terra-large.png'

const Foot= styled.footer`
    position: fixed;
    width: 100vw;
    height: 20vh;
    bottom: 0;
    left: auto;
    right: auto;

    img {
        width: 100%;
    }
`

function Footer() {
    return (
        <Foot>
            <picture>
                <source media="(min-width:1024px" srcSet={TerraLarge} />
                <source media="(min-width:600px" srcSet={TerraMedium} />
                <img src={TerraSmall} alt="Graphic representation of the world" title="The world"/>
        </picture>
        </Foot>
    )
}

export default Footer;