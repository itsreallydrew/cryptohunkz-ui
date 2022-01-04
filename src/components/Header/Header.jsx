import React from 'react';
import Nav from '../Nav/Nav'
import LandingPage from '../LandingPage/LandingPage'

const Header = ({connect}) => {
    return (
        <div>
            <Nav connect={connect}/>
            <LandingPage />
        </div>
    );
};

export default Header;