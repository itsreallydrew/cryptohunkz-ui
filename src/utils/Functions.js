import { ethers } from 'ethers';

// Used in MintModal to confirm address is on approved list
export function checkVerification(account, storedHash) {
	let newHash;
	newHash = ethers.utils.keccak256(account);
	console.log(`New hash: ${newHash}, Stored hash: ${storedHash}`);
	if (newHash === storedHash) return true;
	return false;
}
