import React from 'react';
import Nav from '../Nav/Nav';
import LandingPage from '../LandingPage/LandingPage';

const Header = ({ connect, account, admin }) => {
	return (
		<div>
			<Nav connect={connect} account={account} admin={admin} />
			<LandingPage />
		</div>
	);
};

export default Header;
