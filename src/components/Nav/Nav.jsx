import React from 'react';
// import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { Link, animateScroll as scroll } from 'react-scroll';
import BurgerMenu2 from '../BurgerMenu/BurgerMenu2';
import BurgerMenu3 from '../BurgerMenu/BurgerMenu3';

const Nav = ({ connect, account }) => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<h2>CRYPTO HUNKZ</h2>
			{/* <button onClick={connect} className='btn btn-outline-dark'>
				Connect
			</button> */}
			{/* <Link
				activeClass='active'
				to='mint'
				spy={true}
				smooth={true}
				duration={500}
				className='menu-item'>
				Mint
			</Link> */}
			{/* <BurgerMenu /> */}
			{/* <BurgerMenu2 connect={connect} account={account} /> */}
			<BurgerMenu3 connect={connect} account={account} />
		</nav>
	);
};

export default Nav;
