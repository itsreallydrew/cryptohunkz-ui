import React, { useState } from 'react';
import MintModal from '../MintModal';

// CONSTANTS
// const hunkzAddress = '0x01EB7513d611C20ed9E2E6f2C552A13D9E8013b6';

const Mint = ({ account, getBalance, requestAccount, contract }) => {
	// const Mint = ({ account, mintHunkz, getBalance, requestAccount, notifyMint }) => {

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
			/>
		</div>
	);

	//     return (
	//         <div>
	//             <img id='kaiju' src="https://kaijukingz.io/static/media/TextBoxAnimation.7bf70956.gif" alt="hunk-gif" />
	//             <MintModal
	//                 mintHunkz={mintHunkz}
	//                 getBalance={getBalance}
	//                 account={account}
	//                 requestAccount={requestAccount}
	//                 notifyMint={notifyMint}

	//                 openModal={openModal}
	//                 closeModal={closeModal}
	//                 modalIsOpen={modalIsOpen}
	//             />

	//         </div>
	//     );
};

export default Mint;
