import React, { useState } from 'react';
import MenuLinks from './MenuLinks/MenuLinks';

const BurgerMenu = ({ connect, account, admin }) => {
	const [open, setOpen] = useState(false);

	const toggleOpen = () => {
		setOpen(!open);
	};
	return (
		<div>
			<div
				className={`icon nav-icon-5 ${open ? 'open' : null}`}
				onClick={toggleOpen}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			{open && (
				<MenuLinks
					connect={connect}
					account={account}
					open={open}
					admin={admin}
				/>
			)}
		</div>
	);
};

export default BurgerMenu;
