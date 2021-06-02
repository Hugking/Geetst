import json
import math
import random
import re
import time

import execjs

from process_img import *

S = requests.Session()


def get_trace_normal(distance):
    global current_x
    track = [[random.randint(-30, -19), random.randint(-25, -20), 0]]
    track.append([0, 0, 0])
    x = 0
    x_list = []
    while True:
        x = x + random.randint(1, 4)

        if x < distance:
            x_list.append(x)
        else:
            break
    x = [(10 / 20) * i for i in x_list]
    _y = random.randint(-1, 1)
    current_t = random.randint(-40, -30)
    for _x in x:
        current_x = int(sigmoid(_x, distance))
        _t = random.randint(40, 60)
        current_t += _t
        track.append([current_x, _y, current_t])
    track.append([current_x, _y, current_t + random.randint(100, 200)])
    time.sleep(1)
    return track


# b偏移量
def sigmoid(x, b):
    t = 8

    s = 2 / (2 + math.exp(-x + t))
    return s * b


success_count = 0
failure_count = 0


def geetest():
    global success_count
    global failure_count
    url_demo = f"https://captcha1.scrape.center/api/init?t={int(time.time() * 1000)}"
    headers = {
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.72 Safari/537.36"
    }
    ip = requests.get("http://apiv1.wkaanig.cn/proxy/random").text
    proxies = {"proxies": f'http://{ip}'}
    res = S.get(url=url_demo, headers=headers, proxies=proxies)
    status_code = res.status_code
    print(f"ip :{ip}", status_code)

    while status_code != 200:
        ip = requests.get("http://apiv1.wkaanig.cn/proxy/random").text
        proxies = {"proxies": f'http://{ip}'}
        res = S.get(url=url_demo, headers=headers, proxies=proxies)
        status_code = res.status_code
        print(f"ip :{ip}", status_code)

    res = res.json()
    gt = res["gt"]
    challenge = res["challenge"]

    with open("./js/w1.js", "r", encoding="utf-8") as f_r:
        js_code = f_r.read()

    js_compile = execjs.compile(js_code)
    encrypt_key = js_compile.call("ce")
    w1 = js_compile.call("get_w1", gt, challenge, encrypt_key)

    # url_version = f"https://api.geetest.com/gettype.php?gt={gt}&callback=geetest_{int(time.time() * 1000)}"
    # res = S.get(url_version, headers=headers, proxies=proxies).content.decode("unicode-escape")
    # print("init:", json.loads(re.search("geetest_\d+\((.*?)\)", res).group(1)))

    time.sleep(random.randint(0, 1))
    c_s_url = f"https://api.geetest.com/get.php?gt={gt}&challenge={challenge}&lang=zh-cn&pt=0&client_type=web&w={w1}&callback=geetest_{int(time.time() * 1000)}"
    res = S.get(url=c_s_url, headers=headers, proxies=proxies).content.decode("unicode-escape")
    print("step 1:", json.loads(re.search("geetest_\d+\((.*?)\)", res).group(1)))
    res_data = json.loads(re.search("geetest_\d+\((.*?)\)", res).group(1))
    key_c = res_data.get("data", {}).get("c")
    key_s = res_data.get("data", {}).get("s")
    if key_s and key_c:
        print("step 1 校验成功")

        w2 = js_compile.call("get_w2", gt, challenge, key_c, key_s, encrypt_key)
        ajax_url = f"https://api.geetest.com/ajax.php?gt={gt}&challenge={challenge}&lang=zh-cn&pt=0&client_type=web&w={w2}&callback=geetest_{int(time.time() * 1000)}"
        res = S.get(url=ajax_url, headers=headers, proxies=proxies).content.decode("unicode-escape")
        print("step 2:", json.loads(re.search("geetest_\d+\((.*?)\)", res).group(1)))
        php_url = f"https://api.geetest.com/get.php?is_next=true&type=slide3&gt={gt}&challenge={challenge}&lang=zh-cn&https=true&protocol=https%3A%2F%2F&offline=false&product=embed&api_server=api.geetest.com&isPC=true&autoReset=true&width=100%25&callback=geetest_{int(time.time() * 1000)}"
        res = S.get(url=php_url, headers=headers, proxies=proxies).content.decode("unicode-escape")
        res_data = json.loads(re.search("geetest_\d+\((.*?)\)", res).group(1))

        c = res_data.get("c")
        s = res_data.get("s")
        if c and s:
            print("step 2 校验成功")

            challenge = res_data["challenge"]
            full_bg = "https://static.geetest.com/" + res_data["fullbg"]
            bg = "https://static.geetest.com/" + res_data["bg"]

            full_bg_con = requests.get(url=full_bg, timeout=10, headers=headers).content
            bg_con = requests.get(url=bg, timeout=10, headers=headers).content
            open("img/fullbg.jpg", "wb").write(full_bg_con)
            open("img/bg.jpg", "wb").write(bg_con)

            img1 = get_merge_image("img/fullbg.jpg")
            img2 = get_merge_image("img/bg.jpg")
            os.remove("img/fullbg.jpg")
            os.remove("img/bg.jpg")

            distance = int(get_gap(img1, img2) - 7)
            print("step 3:距离为", distance)
            arr = get_trace_normal(distance)

            lastPoint = arr[-1][0]
            passTime = arr[-1][2]

            with open("./js/w3.js", "r", encoding="utf-8") as f_r:
                js_code = f_r.read()
            js_compile = execjs.compile(js_code)

            w3 = js_compile.call("get_w", arr, c, s, gt, challenge, encrypt_key, lastPoint, passTime)
            last_url = f"https://api.geetest.com/ajax.php?gt={gt}&challenge={challenge}&lang=zh-cn&pt=0&client_type=web&w={w3}&callback=geetest_{int(time.time() * 1000)}"
            res = S.get(url=last_url, headers=headers, proxies=proxies).content.decode("unicode-escape")
            print("step 3:", json.loads(re.search("geetest_\d+\((.*?)\)", res).group(1)))
            res_data = json.loads(re.search("geetest_\d+\((.*?)\)", res).group(1))
            if res_data.get("success", ""):
                print(f'step 3:验证成功，得分{res_data.get("score", "")} ,得分越低越好 {"-" * 18}')
                success_count += 1
            else:
                print(f"step 3:验证失败")


if __name__ == "__main__":
    for i in range(10):
        geetest()
    print(f"成功率：{success_count / 10}")
