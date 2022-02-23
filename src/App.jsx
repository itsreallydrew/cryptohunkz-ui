import { ethers } from 'ethers';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Mint from './components/Mint/Mint';
import CryptoHunkz from './utils/CryptoHunkz.json';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import Roadmap from './components/Roadmap/Roadmap';
import Team from './components/Team/Team';
import FAQ from './components/FAQ/FAQ';
import Links from './components/Links/Links';

const hunkzAddress = '0x7cf1200B9568E0b9B1bB240EDB926aE5655a0eCB';

function App() {
	const [account, setCurrentAccount] = useState(null);
	// const [admin, setAdmin] = useState(false);
	const [contract, setContract] = useState(null);

	const requestAccount = async () => {
		try {
			await window.ethereum.request({ method: 'eth_requestAccounts' });
		} catch (err) {
			console.log('Must connect to Metamask first');
		}
	};

	// async function getBalance(e) {
	// 	e.preventDefault();
	// 	if (typeof window.ethereum !== 'undefined') {
	// 		const [account] = await window.ethereum.request({
	// 			method: 'eth_requestAccounts',
	// 		});
	// 		console.log({ account }); // outputs { account: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" }
	// 		const provider = new ethers.providers.Web3Provider(window.ethereum);
	// 		const signer = provider.getSigner();
	// 		const contract = new ethers.Contract(
	// 			hunkzAddress,
	// 			CryptoHunkz.abi,
	// 			signer
	// 		);

	// 		// THIS THROWS
	// 		contract.TOTAL_SUPPLY().then((data) => {
	// 			console.log('total supply: ', data.toString());
	// 		});
	// 		contract.price().then((data) => {
	// 			console.log('price: ', data.toString());
	// 		});
	// 		contract.totalMinted().then((data) => {
	// 			console.log('minted ', data.toString());
	// 		});
	// 	}
	// }

	const checkIfWalletIsConnected = async () => {
		const { ethereum } = window;

		if (!ethereum) {
			console.log('Make sure you have metamask!');
			return;
		} else {
			console.log('We have the ethereum object', ethereum);
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();
			const connectedContract = new ethers.Contract(
				hunkzAddress,
				CryptoHunkz.abi,
				signer
			);
			setContract(connectedContract);
		}

		const accounts = await ethereum.request({ method: 'eth_accounts' });

		if (accounts.length !== 0) {
			const account = accounts[0];
			console.log('Found an authorized account:', account);
			setCurrentAccount(account);
			// checkAdmin();

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

	// const setupEventListener = async () => {
	// 	try {
	// 		const { ethereum } = window;

	// 		if (ethereum) {
	// 			const provider = new ethers.providers.Web3Provider(ethereum);
	// 			const signer = provider.getSigner();
	// 			const connectedContract = new ethers.Contract(
	// 				hunkzAddress,
	// 				CryptoHunkz.abi,
	// 				signer
	// 			);

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

	// 		console.log('Setup event listener!');
	// 	} else {
	// 		console.log("Ethereum object doesn't exist!");
	// 	}
	// } catch (error) {
	// 	console.log(error);
	// }
	// };

	// const checkAdmin = async () => {
	// 	const provider = new ethers.providers.Web3Provider(window.ethereum);
	// 	const signer = provider.getSigner();
	// 	const contract = new ethers.Contract(hunkzAddress, CryptoHunkz.abi, signer);
	// 	// if address is listed as an admin then set admin setting to true
	// 	const adminCheck = await contract.admins(account);
	// 	console.log(adminCheck);
	// 	if (adminCheck) {
	// 		setAdmin(true);
	// 	}
	// };

	useEffect(() => {
		checkIfWalletIsConnected();
	}, []);

	return (
		<div className='App'>
			<Header connect={connectWallet} account={account} />
			<Element name='mint'>
				<Mint
					// mintHunkz={mintHunkz}
					// handleAmountChange={handleAmountChange}
					// getBalance={getBalance}
					requestAccount={requestAccount}
					account={account}
					contract={contract}
				/>
			</Element>
			<Element name='roadmap'>
				<Roadmap />
			</Element>
			<Element name='team'>
				<Team />
			</Element>
			<Element name='faq'>
				<FAQ />
			</Element>
			{/* <Element name='links'>
				<Links />
			</Element> */}
		</div>
	);
}

export default App;
