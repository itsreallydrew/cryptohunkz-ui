import React from 'react';
import MintModal from '../MintModal';


const Mint = ({ mintHunkz, amount, handleAmountChange, getBalance, openModal, closeModal, modalIsOpen, customStyles, subtitle, afterOpenModal }) => {
    return (
        <div>
            <img id='kaiju' src="https://kaijukingz.io/static/media/TextBoxAnimation.7bf70956.gif" alt="hunk-gif" />
            <MintModal 
                mintHunkz={mintHunkz}
                amount={amount}
                handleAmountChange={handleAmountChange}
                getBalance={getBalance}
                
                openModal={openModal} 
                closeModal={closeModal} 
                modalIsOpen={modalIsOpen} 
                customStyles={customStyles} 
                subtitle={subtitle} 
                afterOpenModal={afterOpenModal}
            />
            
        </div>
    );
};

export default Mint;