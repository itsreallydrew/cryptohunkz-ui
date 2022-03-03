import React from 'react';
// import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { Link, animateScroll as scroll } from 'react-scroll';
import {
	faDiscord as discord,
	faTwitter as twitter,
} from '@fortawesome/free-brands-svg-icons';
import opensea from '../../assets/Logomark-White.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BurgerMenu3 from '../BurgerMenu/BurgerMenu3';

const Nav = ({ connect, account, admin }) => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<div className='nav-title'>
				<h2>CRYPTOHUNKZ</h2>
			</div>
			<div className='primary-nav'>
				<Link
					activeClass='active'
					to='home'
					data-text='home'
					spy={true}
					smooth={true}
					duration={500}
					className='bm-item'>
					Home
				</Link>
				<Link
					activeClass='active'
					to='mint'
					data-text='mint'
					spy={true}
					smooth={true}
					duration={500}
					className='bm-item'>
					Mint
				</Link>
				<Link
					activeClass='active'
					to='hunkz'
					data-text='hunkz'
					spy={true}
					smooth={true}
					duration={500}
					className='bm-item'>
					Hunkz
				</Link>
				<Link
					activeClass='active'
					to='team'
					data-text='team'
					spy={true}
					smooth={true}
					duration={500}
					className='bm-item'>
					Team
				</Link>
				<Link
					activeClass='active'
					to='faq'
					data-text='faq'
					spy={true}
					smooth={true}
					duration={500}
					className='bm-item'>
					FAQ
				</Link>
				{account ? (
					<a href='null' className='connectButton'>
						{`${account.slice(0, 6)}..${account.slice(
							account.length - 4,
							account.length
						)}`}
					</a>
				) : (
					<a href='null' onClick={connect} className='connectButton'>
						Connect
					</a>
				)}
				<div className='social-icons'>
					<a href='anchor' id='discord' className='icon'>
						<FontAwesomeIcon icon={discord} className='fa-sm' />
					</a>
					<a href='anchor' id='twitter' className='icon'>
						<FontAwesomeIcon icon={twitter} />
					</a>
					<a href='anchor' className='os-icon icon'>
						<img src={opensea} alt='' />
					</a>
				</div>
			</div>
			<BurgerMenu3 connect={connect} account={account} admin={admin} />
		</nav>
	);
};

export default Nav;
