import React from 'react';
import { Link } from 'react-scroll';

const MenuLinks = ({ connect, account, open, setOpen }) => {
	return (
		<div className={`menu-links ${open ? 'menu-links-open' : null}`}>
			<Link
				activeClass='active'
				to='home'
				data-text='home'
				spy={true}
				smooth={true}
				duration={500}
				className='bm-item'>
				{' '}
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
				to='roadmap'
				data-text='roadmap'
				spy={true}
				smooth={true}
				duration={500}
				className='bm-item'>
				Roadmap
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
				to='links'
				data-text='links'
				spy={true}
				smooth={true}
				duration={500}
				className='bm-item'>
				Links
			</Link>
			{account ? (
				<a href='null' className='btn btn-outline-dark'>
					{`${account.slice(0, 6)}..${account.slice(
						account.length - 4,
						account.length
					)}`}
				</a>
			) : (
				<a href='null' onClick={connect} className='btn btn-outline-dark'>
					Connect
				</a>
			)}
		</div>
	);
};

export default MenuLinks;
