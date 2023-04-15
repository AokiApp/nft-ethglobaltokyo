// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// import oz ownable
import "@openzeppelin/contracts/access/Ownable.sol";

contract PCRegistry is Ownable {
    // storage for blob
    mapping(uint256 => mapping(uint256 => bytes32)) public pcs;
    uint256 public pcCount;

    function writePc(
        uint256 pcId,
        uint256 startPtr,
        bytes32[] calldata chunk
    ) external onlyOwner {
        uint256 endPtr = startPtr + chunk.length;
        for (uint256 i = startPtr; i < endPtr; i++) {
            pcs[pcId][i] = bytes32(chunk[i - startPtr]);
        }
    }
}
