import React, { useState, useEffect } from 'react';
import Modal from 'react-modal'
import { ethers } from 'ethers'
import CryptoHunkz from '../utils/CryptoHunkz.json';

// CONSTANTS
const hunkzAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const MintModal = ({ account, openModal, closeModal, modalIsOpen, getBalance, requestAccount }) => {
    Modal.setAppElement('#root');
    
    const [amount, setAmount] = useState(1);

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
        if(amount < 2){
            setAmount(amount + 1)
        }
    }

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          height: '50%',
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        },
      };

      const nice = {
          color: 'black'
      }

    useEffect(() => {
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const address = account
            provider.getBalance(address).then(bal => {
                const balInEth = ethers.utils.formatEther(bal)
                console.log(`balance: ${balInEth} ETH`)
            })
        }
    }, [])

    

    return (
        <div className="modal-background">
            <button className="btn btn-outline-success" onClick={openModal}>Get Yours Now</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 style={nice} className="text-warning">Where tf is this?</h2>
                {/* <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%;">
                    </div>
                </div> */}
                <div>I am a modal</div>
                <form onSubmit={mintHunkz}>
                    <input className="form-control" type='number' max="2" min="1" value={amount} onChange={handleAmountChange} readOnly={true} />
                    <button className="btn btn-success">Mint</button>
                </form>
                    <button onClick={raiseAmount} className="btn">up</button>
                <button className="btn btn-info" onClick={getBalance}>Balance</button>
                <button className="btn btn-danger" onClick={closeModal}>Close</button>
            </Modal>
        </div>
    );
};

export default MintModal;