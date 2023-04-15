from flask import Flask, request, jsonify
import numpy as np
from PIL import Image
import pickle
from procutil import *
import consts
import io
import base64

app = Flask(__name__)

# load aoki face and compute PCA on the data
with open("pca.pickle", "rb") as f:
    model = pickle.load(f)

# convert principal components
pc = model.components_[0 : consts.TOKEN_NUM]
pc = (pc * (2**23)).astype(np.int32)
mean = model.mean_.astype(np.uint8)


@app.route("/generate_image", methods=["GET"])
def generate_image():
    # get token values from query string
    token_values = request.args.get("token_values")
    # comma separated list of integers
    token_values = [int(x) for x in token_values.split(",")]
    # q: how can I pass a list of integers as a query string? url example
    # a: http://localhost:8000/generate_image?token_values=1,2,3,4,5,6,7,8,9,10

    # validate token values
    if len(token_values) != consts.TOKEN_NUM:
        return jsonify({"error": "Invalid number of token values"}), 400
    for value in token_values:
        if value < consts.TOKEN_RANGE_MIN or value > consts.TOKEN_RANGE_MAX:
            return jsonify({"error": "Invalid token value"}), 400

    # compute composite layer
    complayer = np.array(token_values) @ pc
    complayer = (complayer / (2**16)).astype(np.int8)

    # combine with mean to get inverse
    inverse = complayer.astype(np.int16) + mean.astype(np.int16)
    inverse = inverse.astype(np.uint8)
    inverse = to3d(inverse)

    # return image as base64 encoded string
    img_pil = Image.fromarray(inverse)
    img_bytes = io.BytesIO()
    img_pil.save(img_bytes, format="JPEG")

    # response as image/jpeg
    return (
        img_bytes.getvalue(),
        200,
        {"Content-Type": "image/jpeg"},
    )


# cors support
@app.after_request
def after_request(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "*")
    response.headers.add("Access-Control-Allow-Methods", "*")
    return response


if __name__ == "__main__":
    app.run(debug=True)
