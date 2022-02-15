import { ethers } from 'ethers';
import CryptoHunkz from './CryptoHunkz.json';

const hunkzAddress = '0xc6927890D24f87C6e21e9dc1A6595c5a18bCc289';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(hunkzAddress, CryptoHunkz.abi, signer);

export const ContractContext = {
	contract,
};
