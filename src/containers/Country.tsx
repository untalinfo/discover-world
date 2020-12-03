import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { ContainerHeader, ButtonBack, ContainerInfoCountry, Information, Flag } from '../assets/styles/Country'


function Country(): JSX.Element {
    return (
        <>
            <ContainerHeader>
                <Link to="/home" title=" button back">
                    <ButtonBack>❮</ButtonBack>
                </Link>
                <Header />
                <ButtonBack/>
            </ContainerHeader>
            <ContainerInfoCountry>
                <Information>
                    <span>Colombia</span>
                    <ul>
                        <li>Region:</li>
                        <li>Area:</li>
                        <li>Capital:</li>
                        <li>Population:</li>
                        <li>Currencies:</li>
                        <li>Oficial language:</li>
                    </ul>
                </Information>
                <Flag>
                    🇨🇴
                </Flag>
            </ContainerInfoCountry>
            <Footer />
        </>
    )
}

export default Country;