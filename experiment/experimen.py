import numpy as np
from PIL import Image
import pickle
from procutil import *
import streamlit as st
import consts

st.title('AokiApp NFT')

########## image composition screen ##########

#load aoki face and compute PCA on the data
with open("pca.pickle", "rb") as f:
    model = pickle.load(f)

# convert principal components
pc = model.components_[0 : consts.TOKEN_NUM]
pc = (pc*(2**23)).astype(np.int32)
st.text("PC max: {}".format(pc.min()))

mean = model.mean_.astype(np.uint8)


#slider to get token value
token_num = consts.TOKEN_NUM
token_value = np.zeros(token_num, dtype=np.int8)

#purchase price of each token
your_payment = [0]*token_num

col = st.columns(2)

#display slider
with col[0]:
    for i in range(token_num):
        slider_label = f"token {i+1}"
        value = st.slider(slider_label, consts.TOKEN_RANGE_MIN, consts.TOKEN_RANGE_MAX, 0)
        token_value[i] = value
        your_payment[i] = abs(value)

#display an image 
with col[1]:
    complayer = token_value @ pc
    complayer = (complayer / (2**16)).astype(np.int8)
    st.text("complayer dtype:{}, min:{}, max:{}".format(complayer.dtype, complayer.min(), complayer.max()))
    inverse = complayer.astype(np.int16) + mean.astype(np.int16)
    inverse = inverse.astype(np.uint8)
    inverse = to3d(inverse)
    img_pil = Image.fromarray(inverse)
    st.image(img_pil, caption="", use_column_width=True)
