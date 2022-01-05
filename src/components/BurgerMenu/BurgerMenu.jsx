import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link, animateScroll as scroll } from 'react-scroll';

const BurgerMenu = () => {
    return (
        <Menu>
            <a href="/" className="menu-item">Home</a>
            <Link activeClass='active' to='mint' spy={true} smooth={true} duration={500} className="menu-item">Mint</Link>
            <a href="/roadmap" className="menu-item">Roadmap</a>
            <a href="/team" className="menu-item">Team</a>
            <a href="/links" className="menu-item">Links</a>
        </Menu>
    )
}

export default BurgerMenu
