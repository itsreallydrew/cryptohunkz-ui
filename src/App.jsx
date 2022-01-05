import { ethers } from 'ethers';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Mint from './components/Mint/Mint';
import CryptoHunkz from './utils/CryptoHunkz.json';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import Roadmap from './components/Roadmap/Roadmap';
import Team from './components/Team/Team';

// CONSTANTS
const hunkzAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';

function App() {
	const [account, setCurrentAccount] = useState(null);
	const [amount, setAmount] = useState(1);

	const requestAccount = async () => {
		try {
			await window.ethereum.request({ method: 'eth_requestAccounts' });
		} catch (err) {
			console.log('Must connect to Metamask first');
		}
	};

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

	async function getBalance(e) {
		e.preventDefault();
		if (typeof window.ethereum !== 'undefined') {
			const [account] = await window.ethereum.request({
				method: 'eth_requestAccounts',
			});
			console.log({ account }); // outputs { account: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" }
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();
			const contract = new ethers.Contract(
				hunkzAddress,
				CryptoHunkz.abi,
				signer
			);

			// THIS THROWS
			contract.TOTAL_SUPPLY().then((data) => {
				console.log('total supply: ', data.toString());
			});
			contract.price().then((data) => {
				console.log('price: ', data.toString());
			});
			contract.totalMinted().then((data) => {
				console.log('minted ', data.toString());
			});
		}
	}

	const checkIfWalletIsConnected = async () => {
		const { ethereum } = window;

		if (!ethereum) {
			console.log('Make sure you have metamask!');
			return;
		} else {
			console.log('We have the ethereum object', ethereum);
		}

		const accounts = await ethereum.request({ method: 'eth_accounts' });

		if (accounts.length !== 0) {
			const account = accounts[0];
			console.log('Found an authorized account:', account);
			setCurrentAccount(account);

			// setupEventListener();
		} else {
			console.log('No authorized account found');
		}
	};

	const connectWallet = async () => {
		try {
			const { ethereum } = window;

			if (!ethereum) {
				alert('Get MetaMask!');
				return;
			}

			const accounts = await ethereum.request({
				method: 'eth_requestAccounts',
			});
			console.log('Connected', accounts[0]);
			setCurrentAccount(accounts[0]);
		} catch (error) {
			console.log(error);
		}
	};

	const setupEventListener = async () => {
		try {
			const { ethereum } = window;

			if (ethereum) {
				const provider = new ethers.providers.Web3Provider(ethereum);
				const signer = provider.getSigner();
				const connectedContract = new ethers.Contract(
					hunkzAddress,
					CryptoHunkz.abi,
					signer
				);

				// connectedContract.on('NewNFTMinted', (from, tokenId) => {
				// console.log(from, tokenId.toNumber());
				// let numMinted = tokenId.toNumber();
				// let nftLink = `https://testnets.opensea.io/assets/${CONTRACT_ADDRESS}/${tokenId.toNumber()}`;
				// setLoading(!loading);
				// setLink(nftLink);
				// setTotalMinted(numMinted);
				// renderInfoToast(tokenId);
				// alert(`Hey there! We've minted your NFT and sent it to your wallet. It may be blank right now. It can take a max of 10 min to show up on OpenSea. Here's the link: https://testnets.opensea.io/assets/${CONTRACT_ADDRESS}/${tokenId.toNumber()}`)
				// });

				console.log('Setup event listener!');
			} else {
				console.log("Ethereum object doesn't exist!");
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		checkIfWalletIsConnected();
	}, []);

	return (
		<div className='App'>
			<Header connect={connectWallet} account={account} />
			<Element name='mint'>
				<Mint
					mintHunkz={mintHunkz}
					amount={amount}
					handleAmountChange={handleAmountChange}
					getBalance={getBalance}
				/>
			</Element>
			<Element name='roadmap'>
				<Roadmap />
			</Element>
			<Element name='team'>
				<Team />
			</Element>
			<Element name='links'></Element>
		</div>
	);
}

export default App;
