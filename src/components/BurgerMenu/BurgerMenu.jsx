import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link, animateScroll as scroll } from 'react-scroll';

const BurgerMenu = () => {
	return (
		<div>
			<div className='bm-overlay'></div>
			<div>
				<div className='bm-burger-button'>
					<button id='react-burger-menu-btn'>Open Menu</button>
					<span>
						<span className='bm-burger-bars'></span>
						<span className='bm-burger-bars'></span>
						<span className='bm-burger-bars'></span>
					</span>
				</div>
			</div>
			<div className='bm-menu-wrap'>
				<div className='bm-menu'>
					<Menu className='bm-item-list' right>
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
					</Menu>
				</div>
				<div>
					<div className='bm-cross-button'>
						<button id='react-burger-cross-button'>Close Menu</button>
						<span id='bm-cross-span'>
							<span className='bm-cross'></span>
							<span className='bm-cross'></span>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BurgerMenu;
