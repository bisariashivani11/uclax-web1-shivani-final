import React from 'react';

import Header from './Header.jsx';
import Nav from './Nav.jsx'
import MountainAndBeach from './MountainAndBeach.jsx';
import Footer from './Footer.jsx';

const Container = () => {

    return (
        <div className='Container'>
            CONTENT
            <Header />
            <Nav />
            <MountainAndBeach />
            <Footer />
        </div>
    );
}

export default Container;