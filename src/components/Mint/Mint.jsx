import React, { useState } from 'react';
import MintModal from '../MintModal';

// CONSTANTS
const hunkzAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const Mint = ({ account, mintHunkz, getBalance, requestAccount, notifyMint }) => {


	
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
            <img id='kaiju' src="https://kaijukingz.io/static/media/TextBoxAnimation.7bf70956.gif" alt="hunk-gif" />
            <MintModal 
                mintHunkz={mintHunkz}
                getBalance={getBalance}
                account={account}
                requestAccount={requestAccount}
                notifyMint={notifyMint}
                
                openModal={openModal} 
                closeModal={closeModal} 
                modalIsOpen={modalIsOpen}  
            />
            
        </div>
    );
};

export default Mint;