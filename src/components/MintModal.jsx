import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { ethers } from 'ethers';
import CryptoHunkz from '../utils/CryptoHunkz.json';
import { fadeInDown } from 'react-animations';
import axios from 'axios';
import { customStyle } from '../utils/customStyle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MintModal = ({
	account,
	openModal,
	closeModal,
	modalIsOpen,
	verified,
	getBalance,
	requestAccount,
	contract,
	notifyMint,
}) => {
	Modal.setAppElement('#root');

	const [amount, setAmount] = useState(1);
	const [minted, setMinted] = useState(0);
	// const [balance, setBalance] = useState(null);
	const [wlActive, setwlActive] = useState(false);

	function signMessage(_signer, _address) {
		return _signer.signMessage(
			ethers.utils.arrayify(
				ethers.utils.defaultAbiCoder.encode(['address'], [_address])
			)
		);
	}

	const mintHunkz = async (e) => {
		e.preventDefault();
		try {
			const signer = new ethers.Wallet(process.env.REACT_APP_PRIVATE_KEY);
			if (wlActive && verified) {
				let price = await contract.price();
				let totalPrice = price * amount;
				let signature = await signMessage(signer, account);
				let txn = await contract.whitelistMint(signature, amount, {
					value: ethers.utils.parseUnits(String(totalPrice), 'wei'),
					gasLimit: 3000000,
				});

				toast('NFT is being minted...', {
					position: 'top-right',
					autoClose: 12000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});

				await txn.wait();

				txn &&
					toast.success('Your NFT has been minted!', {
						position: 'top-right',
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
				console.log(txn, 'completed');
			} else {
				let price = await contract.price();
				console.log(price);
				console.log(amount);
				let totalPrice = price * amount;
				console.log(totalPrice);
				let txn = await contract.publicMint(amount, {
					value: ethers.utils.parseUnits(String(totalPrice), 'wei'),
					gasLimit: 3000000,
				});
				await txn.wait;

				toast('NFT is being minted...', {
					position: 'top-right',
					autoClose: 12000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});

				await txn.wait();

				txn &&
					toast.success('Your NFT has been minted!', {
						position: 'top-right',
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
				console.log(await txn, 'completed');
			}
		} catch (error) {
			console.log(error);
			toast.error('Sorry, the transaction has failed!', {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	};

	const handleAmountChange = (e) => {
		setAmount(e.target.value);
		console.log(amount);
	};

	const raiseAmount = () => {
		if (amount < 5) {
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

	const checkMintType = async () => {
		let result = await contract.whiteListActive();
		setwlActive(result);
	};

	const checkTotal = async () => {
		let totalMinted = await contract.totalSupplyMinted();
		setMinted(totalMinted);
	};

	useEffect(() => {
		checkMintType();
		checkTotal();
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
				<p>Total Minted: {Number(minted)} / 7777</p>
				{/* <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="7777" style="width: 75%;">
                    </div>
                </div> */}
				<p style={pStyles}>price per Hunkz: .077 ETH</p>
				{/* <p style={pStyles}>balance: {Number(balance).toFixed(4)}</p> */}
				<p style={pStyles}>Total: {Number(0.077 * amount).toFixed(3)} ETH</p>
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
						+
					</button>
					<button onClick={lowerAmount} className='btn'>
						-
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
