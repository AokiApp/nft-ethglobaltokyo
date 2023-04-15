#!/usr/bin/env python3
import numpy as np
import pickle
from procutil import *
import consts


def sar(x, y):
    """arithmetic bitshift right, not logical"""
    return x >> y if x >= 0 else -((-x) >> y)

########## image composition screen ##########

bei32_t = np.dtype(">i4")
u8_t = np.dtype(">u1")
i8_t = np.dtype(">i1")

#load aoki face and compute PCA on the data
with open("pca.pickle", "rb") as f:
    model = pickle.load(f)

# convert principal components
pcs = model.components_[0 : consts.TOKEN_NUM]
pcs = [(pc*(2**23)).astype(bei32_t).tobytes() for pc in pcs]

# encode mean into buffer, network byte order
mean = model.mean_.astype(u8_t)
mean: bytes = mean.tobytes()


# save principal components as hex text file
# filename is  "gen/pc/pc_{}.txt".format(i)
for i in range(len(pcs)):
    pc = pcs[i]
    with open("gen/pc/pc_{}.txt".format(i), "w") as f:
        f.write(pc.hex())

# save mean as hex text file
with open("gen/mean.txt", "w") as f:
    f.write(mean.hex())
