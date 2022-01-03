import { ethers } from 'ethers';
import { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header';

import CryptoHunkz from './artifacts/contracts/CryptoHunkz.sol/CryptoHunkz.json';

const hunkzAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";



const provider = new ethers.providers.Web3Provider(window.ethereum);
const contract = new ethers.Contract(hunkzAddress, CryptoHunkz.abi);

let wallet = new ethers.Wallet('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80')

const signer = wallet.connect(provider)


provider.on("network", (newNetwork, oldNetwork) => {
  if (oldNetwork) {
    window.location.reload();
  }
});


function App() {
  // console.log(`Hunkz ABI: ${JSON.stringify(CryptoHunkz.abi)}`)
  // console.log(window.ethereum)
  console.log(provider)
  
  const [account, setCurrentAccount] = useState(null)
  const [amount, setAmount] = useState(1)


  
  const requestAccount = async () => {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts"})
    } catch (err) {
        console.log("Must connect to Metamask first")
    }
  }

  const mintHunkz = async (event, amount) => {
    event.preventDefault()
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      const contract = new ethers.Contract(hunkzAddress, CryptoHunkz.abi, signer)
      contract.mintHunk(amount);
      console.log('completed')
    }
  }

  const handleAmountChange = (event) => {
    setAmount(event.target.value)
  }

  async function getBalance(event) {
    event.preventDefault()
    if (typeof window.ethereum !== 'undefined') {
      const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
      console.log({ account }) // outputs { account: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" }
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      const contract = new ethers.Contract(hunkzAddress, CryptoHunkz.abi, signer)

      // THIS THROWS
      contract.TOTAL_SUPPLY()
        .then(data => {
          console.log("total supply: ", data.toString())
        });
        contract.price()
        .then(data => {
          console.log("price: ", data.toString())
        });
        contract.totalMinted()
        .then(data => {
          console.log("minted ", data.toString())
        })
    }
  }

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
    } else {
        console.log("We have the ethereum object", ethereum);
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account)

        setupEventListener()
    } else {
        console.log("No authorized account found")
    }
  } 


  const setupEventListener = async () => {

    try {
      const { ethereum } = window;

      if (ethereum) {

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CryptoHunkz, myNFT.abi, signer);

        connectedContract.on("NewNFTMinted", (from, tokenId) => {
          console.log(from, tokenId.toNumber())
          let numMinted = tokenId.toNumber();
          let nftLink = `https://testnets.opensea.io/assets/${CONTRACT_ADDRESS}/${tokenId.toNumber()}`;
          setLoading(!loading)
          setLink(nftLink)
          setTotalMinted(numMinted);
          // renderInfoToast(tokenId);
          // alert(`Hey there! We've minted your NFT and sent it to your wallet. It may be blank right now. It can take a max of 10 min to show up on OpenSea. Here's the link: https://testnets.opensea.io/assets/${CONTRACT_ADDRESS}/${tokenId.toNumber()}`)
        });

        console.log("Setup event listener!")

      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(async () => {
    checkIfWalletIsConnected()
  }, [])




  return (
    <div className="App">
      <Header />
      <form onSubmit={getBalance}>
        <input type="text" value={amount} onChange={handleAmountChange}/>
        <button>Mint</button>
      </form>

    </div>
  );
}

export default App;
