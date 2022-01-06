import React from 'react';
import { Link } from 'react-scroll';

const MenuLinks = ({ connect, account, open, setOpen }) => {
	return (
		<div className={`menu-links ${open ? 'menu-links-open' : null}`}>
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
			{account ? (
				<div className='btn btn-outline-dark'>
					{`${account.slice(0, 6)}..${account.slice(
						account.length - 4,
						account.length
					)}`}
				</div>
			) : (
				<button onClick={connect} className='btn btn-outline-dark'>
					Connect
				</button>
			)}
		</div>
	);
};

export default MenuLinks;
