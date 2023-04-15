# nft-internal

## presition conversion

- Principal component:
  - from: float64, [-0.020774446912512665, +0.021831309279252063]
  - to: sint32, padded-18bit, [-174269, +183134]
  - multiplier: 2^23
- component strength:
  - from: float [-12274 -- +11726]
  - to: sint8 [-128 -- +127]
  - multiplier: 1/2^7
- composed layer
  - from: sint32, padded-26bit
  - to: sint8 [-128 -- 127]
  - multiplier: 1/2^16
- mean:
  - from: uint8, [0, 255]
  - to: uint32, [0, 255]
- pixel
  - from: uint8, [0, 255]
  - to: uint32, [0, 255]

## test

token 2 を MAX 取ると、左から光が当たる画像になる

## memo

256.0 / pc.max() == 11726.277921558103

## size spec

`64 * 64 * 3 + 32`
