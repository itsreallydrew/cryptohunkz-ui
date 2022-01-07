import React from 'react';
import Modal from 'react-modal'

const MintModal = ({ openModal, closeModal, afterOpenModal, subtitle, modalIsOpen, customStyles, mintHunkz, amount, handleAmountChange, getBalance }) => {
    Modal.setAppElement('#root');
    

    return (
        <div className="modal-background">
            <button className="btn btn-outline-success" onClick={openModal}>Get Yours Now</button>
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
            <div>I am a modal</div>
            <form onSubmit={mintHunkz}>
				<input className="form-control" type='number' max="2" min="1" value={amount} onChange={handleAmountChange} />
				<button className="btn btn-success">Mint</button>
			</form>
			<button className="btn btn-info" onClick={getBalance}>Balance</button>
            <br/>
            <button className="btn btn-danger" onClick={closeModal}>close</button>
        </Modal>
        </div>
    );
};

export default MintModal;