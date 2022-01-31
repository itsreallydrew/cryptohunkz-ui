import React, { useState } from 'react';
import MintModal from '../MintModal';

// CONSTANTS
const hunkzAddress = '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9';

const Mint = ({ account, mintHunkz, getBalance, requestAccount }) => {
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		// subtitle.style.color = '#f00';
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<div>
			<img
				id='kaiju'
				src='https://kaijukingz.io/static/media/TextBoxAnimation.7bf70956.gif'
				alt='hunk-gif'
			/>
			<MintModal
				mintHunkz={mintHunkz}
				getBalance={getBalance}
				account={account}
				requestAccount={requestAccount}
				openModal={openModal}
				closeModal={closeModal}
				modalIsOpen={modalIsOpen}
			/>
		</div>
	);
};

export default Mint;
