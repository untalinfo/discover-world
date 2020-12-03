import React from 'react'
import TerraSmall from '../assets/images/terra-small.png'
import TerraMedium from '../assets/images/terra-medium.png'
import TerraLarge from '../assets/images/terra-large.png'
import { Foot } from '../assets/styles/Footer'


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