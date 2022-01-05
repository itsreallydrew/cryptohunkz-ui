import React from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { Link, animateScroll as scroll } from 'react-scroll';


const Nav = ({ connect }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <h2>CRYPTO HUNKZ</h2>
            <button onClick={connect} className="btn btn-outline-dark">
                Connect
            </button>
            <Link activeClass='active' to='mint' spy={true} smooth={true} duration={500} className="menu-item">Mint</Link>
            {/* <BurgerMenu/> */}
        </nav>
    );
};

export default Nav;