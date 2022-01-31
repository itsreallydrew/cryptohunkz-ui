import React, { useState, useEffect } from 'react';
import CryptoHunkz from '../utils/CryptoHunkz.json';
import { ethers } from 'ethers';

const Admin = () => {
	const [contract, setContract] = useState(null);
	const hunkzAddress = '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707';

	const checkContract = async () => {
		if (typeof window.ethereum !== 'undefined') {
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();
			const theContract = new ethers.Contract(
				hunkzAddress,
				CryptoHunkz.abi,
				signer
			);
			setContract(theContract);
		}
	};
	useEffect(() => {
		checkContract();
	}, []);

	const toggleWhiteList = async (e) => {
		e.preventDefault();
		await contract.toggleWhiteList();
		let whitelistStatus = await contract.whiteListActive();
		console.log(whitelistStatus);
	};

	const toggleSaleLive = async (e) => {
		e.preventDefault();
		await contract.toggleSaleLive();
		let saleStatus = await contract.saleLive();
		console.log(saleStatus);
	};

	return (
		<div>
			<h3>Admin Functions</h3>
			<ul>
				<button onClick={toggleWhiteList}>Toggle WhiteList</button>
				<button onClick={toggleSaleLive}>Toggle sale Live</button>
				{/* <button>Withdraw</button> */}
				{/* <button></button> */}
				{/* <button></button> */}
				{/* <button></button> */}
				{/* <button></button> */}
				{/* <button></button> */}
			</ul>
		</div>
	);
};

export default Admin;
