// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Compositor {
    // storage for blob
    mapping(uint256 => mapping(uint256 => bytes32)) public pcs;
    uint256 public pcCount;

    function writePc(
        uint256 pcId,
        uint256 startPtr,
        bytes32[] calldata chunk
    ) external {
        for (uint256 i = 0; i < chunk.length; i++) {
            pcs[pcId][startPtr] = bytes32(chunk[i]);
        }
    }

    mapping(uint256 => bytes32) public mean;

    function writeMean(uint256 startPtr, bytes32[] calldata chunk) external {
        for (uint256 i = 0; i < chunk.length; i++) {
            mean[startPtr] = bytes32(chunk[i]);
        }
    }

    function compose(bytes calldata strength) external view {
        bytes memory compostion_canvas = new bytes(256 * 256 * 3);
        // copy mean to canvas
        for (uint i = 0; i < 32 * 256 * 3; i++) {
            bytes32 line = mean[i];
            assembly {
                mstore(add(compostion_canvas, add(0x20, mul(i, 0x20))), line)
            }
        }

        for (uint i = 0; i < strength.length; i++) {
            int8 v = int8(strength[i]);
            for (uint j = 0; j < 256 * 256 * 3; j++) {
                bytes32 line = pcs[i][j];
                int256 row = 0;
                assembly {
                    row := mload(add(line, 0x20))
                    // q: what is this?
                }
                row = row * int256(v);
                // split row to eight 32 bit chunks
                for (uint k = 0; k < 8; k++) {
                    // get 32bit chunk
                    int32 pxl = int32((row >> (k * 32)) & 0xffffffff);
                    // divide by 2**16
                    pxl = pxl / (2 ** 16);
                    // cast to int8
                    int8 upxl = uint8(pxl);
                    // composite to canvas
                    uint row_ptr = j * 8 + k;
                    uint basepx = uint(compostion_canvas[row_ptr]);
                    uint composited_pixel = basepx - upxl;
                    // clamp to 0-255
                    if (composited_pixel > 255) {
                        composited_pixel = 255;
                    }
                    if (composited_pixel < 0) {
                        composited_pixel = 0;
                    }

                    compostion_canvas[row_ptr] = uint8(composited_pixel);
                }
            }
        }
    }
}
