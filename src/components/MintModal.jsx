import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { ethers } from 'ethers';
import CryptoHunkz from '../utils/CryptoHunkz.json';
import { fadeInDown } from 'react-animations';
import axios from 'axios';
import { customStyle } from '../utils/customStyle';

// CONSTANTS
// const hunkzAddress = '0x01EB7513d611C20ed9E2E6f2C552A13D9E8013b6';

const MintModal = ({
	account,
	openModal,
	closeModal,
	modalIsOpen,
	getBalance,
	requestAccount,
	contract,
	notifyMint,
}) => {
	Modal.setAppElement('#root');

	const [proof, setProof] = useState(null);
	const [amount, setAmount] = useState(1);
	const [balance, setBalance] = useState(null);

	const mintHunkz = async (e) => {
		e.preventDefault();
		const wlActive = await contract.whiteListActive();
		if (wlActive) {
			let price = await contract.price();
			console.log(price);
			console.log(amount);
			let totalPrice = price * amount;
			console.log(totalPrice);
			let txn = contract.whitelistMint(proof, amount, {
				value: ethers.utils.parseUnits(String(totalPrice), 'wei'),
				gasLimit: 3000000,
			});
			await txn.wait;
			console.log(await txn, 'completed');
		} else {
			let price = await contract.price();
			console.log(price);
			console.log(amount);
			let totalPrice = price * amount;
			console.log(totalPrice);
			let txn = contract.publicMint(amount, {
				value: ethers.utils.parseUnits(String(totalPrice), 'wei'),
				gasLimit: 3000000,
			});
			await txn.wait;
			console.log(await txn, 'completed');
			notifyMint();
		}
		// if (typeof window.ethereum !== 'undefined') {
		// 	await requestAccount();
		// 	const provider = new ethers.providers.Web3Provider(window.ethereum);
		// 	const signer = provider.getSigner();
		// 	const contract = new ethers.Contract(
		// 		hunkzAddress,
		// 		CryptoHunkz.abi,
		// 		signer
		// 	);
		// 	let price = await contract.price();
		// 	console.log(price);
		// 	console.log(amount);
		// 	let totalPrice = price * amount;
		// 	console.log(totalPrice);
		// 	let txn = contract.whitelistMint(proof, amount, {
		// 		value: ethers.utils.parseUnits(totalPrice.toString(), 'wei'),
		// 		gasLimit: 3000000,
		// 	});
		// 	await txn.wait;
		// 	console.log(await txn, 'completed');
		// }
	};

	const handleAmountChange = (e) => {
		setAmount(e.target.value);
		console.log(amount);
	};

	const raiseAmount = () => {
		if (amount < 6) {
			setAmount(amount + 1);
		}
	};

	const lowerAmount = () => {
		if (amount > 1) {
			setAmount(amount - 1);
		}
	};

	const pStyles = {
		fontSize: '1.5rem',
	};

	// useEffect(() => {
	// 	if (typeof window.ethereum !== 'undefined') {
	// 		const provider = new ethers.providers.Web3Provider(window.ethereum);
	// 		const address = account;
	// 		provider.getBalance(address).then((bal) => {
	// 			const balInEth = ethers.utils.formatEther(bal);
	// 			console.log(`balance: ${balInEth} ETH`);
	// 			setBalance(balInEth);
	// 		});
	// 	}
	// }, [balance]);

	const checkMintType = async () => {
		try {
			console.log(account);
			const res = await axios.post(`http://localhost:7001/api/proof/`, {
				address: account,
			});
			console.log(res);
			setProof(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		checkMintType();
	}, [account]);

	return (
		<div className='modal-background'>
			<button
				className='btn btn-outline-success'
				id='modal-button'
				onClick={openModal}>
				Get Yours Now!!!
			</button>
			<Modal
				closeTimeoutMS={400}
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyle}
				contentLabel='Mint Modal'>
				<h2 style={pStyles} className='text-warning'>
					GET YOUR HUNK!!!
				</h2>
				{/* <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%;">
                    </div>
                </div> */}
				<p style={pStyles}>price per Hunkz: .077 ETH</p>
				<p style={pStyles}>balance: {Number(balance).toFixed(4)}</p>
				<form onSubmit={mintHunkz}>
					<div
						className='mint-div'
						type='number'
						max='5'
						min='1'
						onChange={handleAmountChange}>
						{amount}
					</div>
					<button className='btn btn-success'>Mint</button>
				</form>
				{/* Div to separate up and down button */}
				<div className='selection-div'>
					<button onClick={raiseAmount} className='btn'>
						up
					</button>
					<button onClick={lowerAmount} className='btn'>
						down
					</button>
				</div>
				{/* Div to separate close and balance buttons */}
				<div className='extra-buttons'>
					{/* <button className='btn btn-info' onClick={getBalance}>
						Balance
					</button> */}
					<button className='btn btn-danger' onClick={closeModal}>
						Close
					</button>
				</div>
			</Modal>
		</div>
	);
};

export default MintModal;
