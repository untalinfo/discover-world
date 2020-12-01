import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'

function HomePage(): JSX.Element {
    return (
        <>
            <Header />
            <SearchBar />
            <Footer />
        </>
    )
}

export default HomePage;