import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link, animateScroll as scroll } from 'react-scroll';

const BurgerMenu = () => {
    return (
        <Menu>
            <a href="/" className="menu-item">Home</a>
            <Link activeClass='active' to='mint' spy={true} smooth={true} duration={500} className="menu-item">Mint</Link>
            <Link activeClass='active' to='roadmap' spy={true} smooth={true} duration={500} className="menu-item">Roadmap</Link>
            <Link activeClass='active' to='team' spy={true} smooth={true} duration={500} className="menu-item">Team</Link>
            <Link activeClass='active' to='links' spy={true} smooth={true} duration={500} className="menu-item">Links</Link>
        </Menu>
    )
}

export default BurgerMenu
