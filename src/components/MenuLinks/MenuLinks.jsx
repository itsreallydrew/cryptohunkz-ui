import { useState, React } from 'react';
import { Link } from 'react-scroll';
import {
	faDiscord as discord,
	faTwitter as twitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Admin from '../Admin';
import 'animate.css';

const MenuLinks = ({ connect, account, open, toggleMenu, admin }) => {
	return (
		<div
			className={`menu-links ${
				open
					? 'animate__animated animate__fadeInLeft'
					: 'menu-links-open animate__animated animate__fadeOutLeft'
			}`}>
			<Link
				activeClass='active'
				to='home'
				data-text='home'
				spy={true}
				smooth={true}
				duration={500}
				className='bm-item'
				onClick={toggleMenu}>
				Home
			</Link>
			<Link
				activeClass='active'
				to='hunkz'
				data-text='hunkz'
				spy={true}
				smooth={true}
				duration={500}
				className='bm-item'
				onClick={toggleMenu}>
				Hunkz
			</Link>
			<Link
				activeClass='active'
				to='mint'
				data-text='mint'
				spy={true}
				smooth={true}
				duration={500}
				className='bm-item'
				onClick={toggleMenu}>
				Mint
			</Link>
			<Link
				activeClass='active'
				to='team'
				data-text='team'
				spy={true}
				smooth={true}
				duration={500}
				className='bm-item'
				onClick={toggleMenu}>
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
				<button className='connectButton'>
					{`${account.slice(0, 6)}..${account.slice(
						account.length - 4,
						account.length
					)}`}
				</button>
			) : (
				<button onClick={connect} className='connectButton'>
					Connect
				</button>
			)}
			<div className='social-icons'>
				<a href='anchor' className='icon'>
					<FontAwesomeIcon icon={discord} />
				</a>
				<a href='anchor' className='icon'>
					<FontAwesomeIcon icon={twitter} />
				</a>
			</div>
		</div>
	);
};

export default MenuLinks;
