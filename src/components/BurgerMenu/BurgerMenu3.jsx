import React, { useState } from 'react';
import MenuLinks from '../MenuLinks/MenuLinks';

const BurgerMenu3 = ({ connect, account }) => {
	const [open, setOpen] = useState(false);

	const toggleOpen = () => {
		setOpen(!open);
	};

	const toggleMenu = () => {
		setOpen(false);
	};
	return (
		<div className='mobile-menu'>
			<div
				className={`icon nav-icon-5 ${open ? 'open' : null}`}
				onClick={toggleOpen}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			{/* {open && (
				<MenuLinks
					connect={connect}
					account={account}
					open={open}
					toggleMenu={toggleMenu}
				/>
			)} */}

			<MenuLinks
				connect={connect}
				account={account}
				open={open}
				toggleMenu={toggleMenu}
			/>
		</div>
	);
};

export default BurgerMenu3;
