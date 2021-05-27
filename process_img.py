import os

import numpy as np
import requests
from PIL import Image
import matplotlib.pyplot as plt


# 图片排序 具体见js中的逻辑
def sequence():
    e = "6_11_7_10_4_12_3_1_0_5_2_9_8".split("_")
    t = []

    for n in range(0, 52):
        r = int(e[int(n % 26 / 2)]) * 2 + n % 2

        if not int(n / 2) % 2:
            r += -1 if (n % 2) else 1

        r += 26 if (n < 26) else 0
        t.append(r)

    return t


def gen(_seq, _img):
    """
    用于将图片还原
    @param _seq: 图片的序列号，也就是 Sequence 方法生成的结果
    @param _img: 图片
    @return new img
    """
    n = 160

    s = int(n / 2)
    u = 10

    np_image = np.array(_img)
    new_np_img = np.zeros((160, 312, 3), dtype=np.uint8)

    for c in range(0, 52):
        _ = _seq[c] % 26 * 12 + 1
        f = s if _seq[c] > 25 else 0

        xpos = c % 26 * 10
        ypos = s if (25 < c) else 0

        # var i = document["createElement"]("canvas");
        # var o = i["getContext"]("2d");
        # var l = o["getImageData"](_, f, u, s);
        # var a = t["getContext"]("2d");
        # a["putImageData"](l, c % 26 * 10, c > 25 ? s : 0);

        slice_img = np_image[f:(f + s), _:(_ + u)]
        e = len(slice_img[0])
        new_np_img[ypos:(ypos + s), xpos:(xpos + e)] = slice_img

    return new_np_img


def get_merge_image(img):
    new_img = gen(sequence(), Image.open(img))
    return Image.fromarray(new_img)


def test_gen_img():
    headers = {
        'Connection': 'keep-alive',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
        'Accept': 'application/json, text/plain, */*',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://captcha1.scrape.center/',
        'Accept-Language': 'zh-CN,zh;q=0.9',
    }
    full_block_url = 'https://static.geetest.com/pictures/gt/b9694f3e8/bg/110185427.webp'
    full_bg_url = 'https://static.geetest.com/pictures/gt/b9694f3e8/b9694f3e8.webp'
    image = requests.get(full_bg_url, headers=headers).content
    with open(f'{os.getcwd()}/img/full_bg.jpg', 'wb') as f:
        f.write(image)

    seq = sequence()
    img = Image.open(f'{os.getcwd()}/img/full_bg.jpg')
    new_img = gen(seq, img)
    im = Image.fromarray(new_img)
    im.save(f'{os.getcwd()}/img/new_full_bg.jpg')

    plt.figure()
    plt.subplot(1, 2, 1)
    plt.imshow(img)
    plt.subplot(1, 2, 2)
    plt.imshow(new_img)
    plt.show()


# 寻找缺口位置
def is_px_equal(img1, img2, x, y):
    """
    判断两个像素是否相同
    :param img1: 图片1
    :param img2:图片2
    :param x:位置1
    :param y:位置2
    :return:像素是否相同
    """
    pix1 = img1.load()[x, y]
    pix2 = img2.load()[x, y]
    threshold = 60

    if abs(pix1[0] - pix2[0]) < threshold and abs(pix1[1] - pix2[1]) < threshold and abs(
            pix1[2] - pix2[2]) < threshold:
        return True
    else:
        return False


def get_gap(img1, img2):
    """
    获取缺口偏移量
    :param img1: 不带缺口图片
    :param img2: 带缺口图片
    :return:
    """
    left = 0
    for i in range(left, img1.size[0]):
        for j in range(img1.size[1]):
            if not is_px_equal(img1, img2, i, j):
                left = i
                return left
    return left


def test_get_gap():
    img1 = Image.open(f'{os.getcwd()}/img/new_full_bg.jpg')
    img2 = Image.open(f'{os.getcwd()}/img/new_full_block_bg.jpg')
    return get_gap(img1, img2)


if __name__ == '__main__':
    # test_gen_img()
    print(test_get_gap())
