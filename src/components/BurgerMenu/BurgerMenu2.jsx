import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link, animateScroll as scroll } from 'react-scroll';

const BurgerMenu2 = ({ connect }) => {
	return (
		<Menu right>
			<Link
				activeClass='active'
				to='home'
				spy={true}
				smooth={true}
				duration={500}
				className='bm-item'>
				Home
			</Link>
			<Link
				activeClass='active'
				to='mint'
				spy={true}
				smooth={true}
				duration={500}
				className='bm-item'>
				Mint
			</Link>
			<Link
				activeClass='active'
				to='roadmap'
				spy={true}
				smooth={true}
				duration={500}
				className='bm-item'>
				Roadmap
			</Link>
			<Link
				activeClass='active'
				to='team'
				spy={true}
				smooth={true}
				duration={500}
				className='bm-item'>
				Team
			</Link>
			<Link
				activeClass='active'
				to='links'
				spy={true}
				smooth={true}
				duration={500}
				className='bm-item'>
				Links
			</Link>
			<button onClick={connect} className='btn btn-outline-dark'>
				Connect
			</button>
		</Menu>
	);
};

export default BurgerMenu2;
