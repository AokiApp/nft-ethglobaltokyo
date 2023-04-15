from math import sqrt
from typing import Tuple, Union
import numpy as np
from PIL import Image
import json
from datetime import datetime


def ishow(img: np.ndarray, mode="RGB"):
    """Show image"""
    # if img is one-D array, reshape it to 3-D array
    if len(img.shape) == 1 and mode == "L":
        img = to3dgray(img)
    elif len(img.shape) == 1:
        img = to3d(img)
    img = Image.fromarray(img, mode=mode)
    img.show()


def to1d(img: np.ndarray):
    """Convert image to 1-D array"""
    return img.reshape(-1)


def to3d(img: np.ndarray):
    """Convert image to 3-D array"""
    s = int(sqrt(img.shape[0] // 3))
    return img.reshape(s, s, 3)


def to3dgray(img: np.ndarray):
    """Convert image to 3-D array"""
    s = int(sqrt(img.shape[0]))
    return img.reshape(s, s, 1)


def tohsv(rgbimg: np.ndarray):
    """Convert RGB image to HSV image"""
    return np.array(Image.fromarray(rgbimg, mode="RGB").convert("HSV"))


def torgb(hsvimg: np.ndarray):
    """Convert HSV image to RGB image"""
    return np.array(Image.fromarray(hsvimg, mode="HSV").convert("RGB"))


def tohalf(img: np.ndarray, mode="RGB"):
    """Convert image to half size"""
    makura = Image.fromarray(img, mode=mode)
    return np.array(makura.resize((makura.width // 2, makura.height // 2)))


def tosmall(img: np.ndarray, size=128, mode="RGB"):
    """Convert image to half size"""
    return np.array(Image.fromarray(img, mode=mode).resize((size, size)))


def normalize255(img: np.ndarray):
    """Normalize image to 0-255"""
    img = img - img.min()
    img = img / img.max()
    img = img * 255
    return img.astype(np.uint8)


def normalize1(img: np.ndarray):
    """Normalize image to 0-1"""
    img = img - img.min()
    img = img / img.max()
    return img


def conv255to1(img: np.ndarray):
    """Convert 0-255 image to 0-1 image"""
    return img.astype(np.float64) / 255


def conv1to255(img: np.ndarray):
    """Convert 0-1 image to 0-255 image"""
    return (img * 255).astype(np.uint8)


alpha = np.array(Image.open("./mask.png").convert("L")) * (1 / 255)


def apply_alphamask(img: np.ndarray):
    """Apply mask to image"""
    # for each pixel, multiply alpha value
    for i in range(3):
        img[:, :, i] = img[:, :, i] * alpha

    return img


def apply_alphamask_all(allimgs_rgb: np.ndarray) -> np.ndarray:
    """Apply mask to all images"""
    return np.array([to1d(apply_alphamask(to3d(img))) for img in allimgs_rgb])


loadimgrgb_cache = None


def loadimgrgb() -> np.ndarray:
    global loadimgrgb_cache
    if loadimgrgb_cache is None:
        loadimgrgb_cache = np.load("/mnt/h/final/allimgs_rgb.npy")
    return loadimgrgb_cache


loadmetacahe = None


def loadmeta() -> dict:
    global loadmetacahe
    if loadmetacahe is None:
        with open("/mnt/h/final/alldata.json") as f:
            loadmetacahe = json.load(f)
    return loadmetacahe


def loadall(apply_mask=True) -> Tuple[np.ndarray, np.ndarray, dict]:
    allimgs_rgb = loadimgrgb()

    if apply_mask:
        allimgs_rgb = apply_alphamask_all(allimgs_rgb)

    alldata = loadmeta()

    allimgs_hsv = np.array([to1d(tohsv(to3d(img))) for img in allimgs_rgb])

    return allimgs_rgb, allimgs_hsv, alldata


def loadtimeseries(apply_mask=True) -> Tuple[np.ndarray, np.ndarray]:
    """Load RGB image and time series in Aoki Date Time(aokiDT)"""
    allimgs_rgb = loadimgrgb()

    if apply_mask:
        allimgs_rgb = apply_alphamask_all(allimgs_rgb)

    alldata = loadmeta()
    timeseries = np.array(
        [
            toaokidt(data["gphotos"]["photoTakenTime"])
            if data["gphotos"] is not None
            else 0
            for data in alldata
        ],
        dtype=np.float64,
    )
    return allimgs_rgb, timeseries


def eightbit(img: np.ndarray):
    """Convert image to 8-bit"""
    return img.astype(np.uint8)


def toaokidt(unixtime: Union[int,str]) -> float:
    """
    Converts unixtime to Aoki Date Time(aokiDT)
    Aoiki Date Time is 0-1 time of 2017-01-01 00:00:00 to 2023-02-01 00:03:20
    1. Subtract 2017-01-01 00:00:00 from unixtime
    2. Divide by 191981000 (duration of 2017-01-01 00:00:00 to 2023-02-01 00:03:20)
    3. Add 1
    """
    if isinstance(unixtime, str):
        try:
            unixtime = int(unixtime)
        except ValueError:
            unixtime = int(datetime.strptime(unixtime, "%Y:%m:%d %H:%M:%S").timestamp())
    return (unixtime - 1483228800) / 191981000


def togray(img: np.ndarray) -> np.ndarray:
    """Convert image to grayscale"""
    return np.array(Image.fromarray(img, mode="RGB").convert("L"))


def tomonorgb(img: np.ndarray) -> np.ndarray:
    """Convert image to RGB"""
    return np.array(Image.fromarray(img, mode="L").convert("RGB"))


def load_with_tag(*tags: list[str], apply_mask=True) -> Tuple[np.ndarray, dict]:
    """Load images with tag"""

    # if first argument is list, use it as tags
    if len(tags) == 1 and isinstance(tags[0], list):
        tags = tags[0]

    data = loadmeta()
    allimgs_rgb = loadimgrgb()

    assert len(data) == len(allimgs_rgb)

    filtered_data = []
    filtered_imgs = []

    for i in range(len(data)):
        yes = False
        if (
            ("tags" not in data[i])
            or (data[i]["tags"] is None)
            or (data[i]["tags"] == {})
        ):
            if "p:aoki" in tags:
                yes = True
        else:
            for tag in data[i]["tags"].keys():
                if data[i]["tags"][tag] and (tag in tags):
                    yes = True
                    break

        if yes:
            filtered_data.append(data[i])
            im = allimgs_rgb[i]
            if apply_mask:
                im = to1d(apply_alphamask(to3d(im)))
            filtered_imgs.append(im)

    return np.array(filtered_imgs), filtered_data
