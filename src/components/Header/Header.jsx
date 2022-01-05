import React from 'react';
import Nav from '../Nav/Nav';
import LandingPage from '../LandingPage/LandingPage';

const Header = ({ connect, account }) => {
	return (
		<div>
			<Nav connect={connect} account={account} />
			<LandingPage />
		</div>
	);
};

export default Header;
