import React, { useState, useEffect } from 'react';
import CryptoHunkz from '../utils/CryptoHunkz.json';
import { ethers } from 'ethers';

const Admin = () => {
	// set contract so we can call methods from it
	const [contract, setContract] = useState(null);
	const hunkzAddress = '0x01EB7513d611C20ed9E2E6f2C552A13D9E8013b6';
	const [root, setRoot] = useState('');

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

	const captureRoot = async (e) => {
		let newRoot = e.target.value;
		setRoot(newRoot);
	};

	const setMerkleRoot = async (e, root) => {
		e.preventDefault();
		await contract.setRoot(root);
		let viewRoot = await contract.merkleRoot();
		console.log(viewRoot);
	};

	return (
		<div>
			<h3>Admin Functions</h3>
			<ul>
				<button onClick={toggleWhiteList}>Toggle WhiteList</button>
				<button onClick={toggleSaleLive}>Toggle sale Live</button>
				<form>
					<input type='password' onChange={captureRoot} />
					<button type='submit' onSubmit={setMerkleRoot}>
						Submit
					</button>
				</form>
				{/* <button></button> */}
				{/* <button>Withdraw</button> */}
				{/* <button></button> */}
				{/* <button></button> */}
				{/* <button></button> */}
			</ul>
		</div>
	);
};

export default Admin;
