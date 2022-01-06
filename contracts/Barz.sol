// SPDX-License-Identifier: MIT


pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface CryptoHunkz {
    function balanceGenesis(address owner) external view returns(uint256);
}

contract Barbellz is ERC20, Ownable {

    iCryptoHunkz public CryptoHunkz;

    uint256 constant public BASE_RATE = 10 ether;
    uint256 public START;
    bool rewardPaused = false;

    mapping(address => uint256) public rewards;
    mapping(address => uint256) public lastUpdate;

    mapping(address => bool) public allowedAddresses;

    constructor(address hunkzAddress) ERC20("Barbellz", "BARZ") {
        CryptoHunkz = iCryptoHunkz(hunkzAddress);
        START = block.timestamp;
    }

    function updateReward(address from, address to) external {
        require(msg.sender == address(CryptoHunkz));
        if(from != address(0)){
            rewards[from] += getPendingReward(from);
            lastUpdate[from] = block.timestamp;
        }
        if(to != address(0)){
            rewards[to] += getPendingReward(to);
            lastUpdate[to] = block.timestamp;
        }
    }

    function claimReward() external {
        require(!rewardPaused, "Claiming reward has been paused"); 
        _mint(msg.sender, rewards[msg.sender] + getPendingReward(msg.sender));
        rewards[msg.sender] = 0;
        lastUpdate[msg.sender] = block.timestamp;
    }

    
    function claimBarzRewards(address _address, uint256 _amount) external {
        require(!rewardPaused,                "Claiming reward has been paused"); 
        require(allowedAddresses[msg.sender], "Address does not have permission to distrubute tokens");
        _mint(_address, _amount);
    }

    function burn(address user, uint256 amount) external {
        require(allowedAddresses[msg.sender] || msg.sender == address(CryptoHunkz), "Address does not have permission to burn");
        _burn(user, amount);
    }

    function getTotalClaimable(address user) external view returns(uint256) {
        return rewards[user] + getPendingReward(user);
    }

    function getPendingReward(address user) internal view returns(uint256) {
        return CryptoHunkz.balanceGenesis(user) * BASE_RATE * (block.timestamp - (lastUpdate[user] >= START ? lastUpdate[user] : START)) / 86400;
    }

    function setAllowedAddresses(address _address, bool _access) public onlyOwner {
        allowedAddresses[_address] = _access;
    }

    function toggleReward() public onlyOwner {
        rewardPaused = !rewardPaused;
    }
}