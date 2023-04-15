import numpy as np
from PIL import Image
import pickle
from procutil import *
import streamlit as st
import consts
import math

st.title('AokiApp NFT')

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


def go(pcs: list[bytes], mean: bytes, strength: bytes):
    # initialize composition canvas by mean
    composition_canvas = bytearray(mean)
    assert(len(pcs) >= len(strength))

    for i in range(len(strength)):
        v = strength[i] # strength of each token
        pc = pcs[i] # principal component of each token

        for j in range(256*256*3*4//32):
            # get for each 32bytes row
            row_ptr = j * 32
            row = pc[row_ptr:row_ptr+32]
            # decode as big-endian 256bit python native int
            row = int.from_bytes(row, byteorder='big', signed=False)

            # multiply by strength
            row = row * v
            
            row = row.to_bytes(33, byteorder='big', signed=False)

            row = row[1:] # remove the first byte
            
            # split row to eight 32 bit chunks
            for k in range(8):
                # get 32bit chunk
                pxl = row[k*4:k*4+4]
                # decode as big-endian 32bit python native int
                pxl = int.from_bytes(pxl, byteorder='big', signed=True)
                # divide by 2**16
                pxl = int(pxl // (2**16))
                

                # composite to canvas
                row_ptr = j * 8 + k
                basepx = composition_canvas[row_ptr]
                composited_pixel = basepx - pxl
                # clamp to 0-255
                composited_pixel = max(0, composited_pixel)
                composited_pixel = min(255, composited_pixel)

                composition_canvas[row_ptr] = composited_pixel

    # convert to numpy array
    composition_canvas = np.frombuffer(composition_canvas, dtype=np.uint8)

    # convert to 3d
    composition_canvas = to3d(composition_canvas)
    # convert to PIL image
    img_pil = Image.fromarray(composition_canvas)
    # display
    st.image(img_pil, caption="", use_column_width=True)

cl = st.columns(2)
with cl[0]:
    # four sliders
    strength = [0, 0, 0, 0]
    for i in range(len(strength)):
        strength[i] = st.slider("strength {}".format(i), 0 ,127, 0)
    strength = np.array(strength, dtype=i8_t).tobytes()
with cl[1]:
    go(pcs, mean, strength)
