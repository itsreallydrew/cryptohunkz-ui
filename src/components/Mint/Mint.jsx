import React from 'react';
import './Mint.css'

const Mint = ({ mintHunkz, amount, handleAmountChange, getBalance }) => {
    return (
        <div>
            <img src="https://kaijukingz.io/static/media/TextBoxAnimation.7bf70956.gif" alt="hunk-gif" />
            <form onSubmit={mintHunkz}>
				<input className="form-control" type='number' max="2" min="1" value={amount} onChange={handleAmountChange} />
				<button className="btn btn-success">Mint</button>
			</form>
			<button className="btn btn-info" onClick={getBalance}>Balance</button>
        </div>
    );
};

export default Mint;