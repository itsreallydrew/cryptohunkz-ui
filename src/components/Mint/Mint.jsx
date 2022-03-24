import React, { useState, useEffect } from 'react';
import MintModal from '../MintModal';
import axios from 'axios';
import { checkVerification } from '../../utils/Functions';

const Mint = ({ account, getBalance, requestAccount, contract }) => {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [verified, setVerified] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	async function checkStatus() {
		try {
			const res = await axios.post(`http://localhost:7001/api/message/`, {
				address: account,
			});
			let hash = res.data;
			const status = checkVerification(account, hash);
			setVerified(status);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		checkStatus();
	}, [account]);

	console.log(`Is user verified?: ${verified}`);

	return (
		<div>
			{/* <img
				id='kaiju'
				src='https://kaijukingz.io/static/media/TextBoxAnimation.7bf70956.gif'
				alt='hunk-gif'
			/> */}
			<MintModal
				// mintHunkz={mintHunkz}
				getBalance={getBalance}
				account={account}
				requestAccount={requestAccount}
				openModal={openModal}
				closeModal={closeModal}
				modalIsOpen={modalIsOpen}
				contract={contract}
				verified={verified}
			/>
		</div>
	);
};

export default Mint;
