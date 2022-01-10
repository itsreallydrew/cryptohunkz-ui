import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { ethers } from 'ethers';
import CryptoHunkz from '../utils/CryptoHunkz.json';
import { fadeInDown } from 'react-animations';

// CONSTANTS
const hunkzAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const MintModal = ({
	account,
	openModal,
	closeModal,
	modalIsOpen,
	getBalance,
	requestAccount,
}) => {
	Modal.setAppElement('#root');

	const [amount, setAmount] = useState(1);
	const [balance, setBalance] = useState(null);

	const mintHunkz = async (e) => {
		e.preventDefault();
		if (typeof window.ethereum !== 'undefined') {
			await requestAccount();
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();
			const contract = new ethers.Contract(
				hunkzAddress,
				CryptoHunkz.abi,
				signer
			);
			let price = await contract.price();
			console.log(price);
			console.log(amount);
			let totalPrice = price * amount;
			console.log(totalPrice);
			let txn = contract.mintHunk(amount, {
				value: ethers.utils.parseUnits(totalPrice.toString(), 'wei'),
				gasLimit: 3000000,
			});
			await txn.wait;
			console.log(await txn, 'completed');
		}
	};

	const handleAmountChange = (e) => {
		setAmount(e.target.value);
		console.log(amount);
	};

	const raiseAmount = () => {
		if (amount < 3) {
			setAmount(amount + 1);
		}
	};

	const lowerAmount = () => {
		if (amount > 1) {
			setAmount(amount - 1);
		}
	};

	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
			height: '75%',
			width: '75%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
			borderRadius: '15px',
			backgroundColor: 'black',
			//   border: '.5rem solid purple',
			boxShadow:
				'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
			boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
			boxShadow:
				'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
			boxShadow:
				'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
			boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px',
			//   boxShadow: "rgba(0,255, 228, 0.4) -5px 5px, rgba(0, 255, 228, 0.3) -10px 10px, rgba(0, 255, 228, 0.2) -15px 15px, rgba(174, 0, 255, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px"
			boxShadow:
				'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
		},
	};

	const nice = {
		color: 'black',
		textAlign: 'center',
		fontSize: '5rem',
	};

	const divStyles = {
		fontSize: '4rem',
		color: 'lightgreen',
		//   backgroundColor: 'black',
		textAlign: 'center',
	};

	const pStyles = {
		fontSize: '1.5rem',
	};

	useEffect(() => {
		if (typeof window.ethereum !== 'undefined') {
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const address = account;
			provider.getBalance(address).then((bal) => {
				const balInEth = ethers.utils.formatEther(bal);
				console.log(`balance: ${balInEth} ETH`);
				setBalance(balInEth);
			});
		}
	}, [balance]);

	return (
		<div className='modal-background'>
			<button className='btn btn-outline-success' onClick={openModal}>
				Get Yours Now
			</button>
			<Modal
				closeTimeoutMS={400}
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				// className='mint-modal'
				contentLabel='Example Modal'>
				<h2 style={pStyles} className='text-warning'>
					GET PAMP'd
				</h2>
				{/* <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%;">
                    </div>
                </div> */}
				<p style={pStyles}>price per Hunkz: .077 ETH</p>
				<p style={pStyles}>balance: {Number(balance).toFixed(4)}</p>
				<form onSubmit={mintHunkz}>
					<div
						// style={divStyles}
						className='mint-div'
						type='number'
						max='2'
						min='1'
						onChange={handleAmountChange}>
						{amount}
					</div>
					<button className='btn btn-success'>Mint</button>
				</form>
				<button onClick={raiseAmount} className='btn'>
					up
				</button>
				<button onClick={lowerAmount} className='btn'>
					down
				</button>
				<button className='btn btn-info' onClick={getBalance}>
					Balance
				</button>
				<button className='btn btn-danger' onClick={closeModal}>
					Close
				</button>
			</Modal>
		</div>
	);
};

export default MintModal;
