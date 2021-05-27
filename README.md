# jy 滑动验证码（2021.5.27）

目标网址：https://captcha1.scrape.center/

1. 安装[babel](https://www.babeljs.cn/docs/) 对js进行AST反混淆

   代码可见 ast_fullpage.9.0.5.js，ast_slide.7.8.1.js

   教程可参考[AST还原混淆代码](https://mp.weixin.qq.com/s?__biz=MzU2NjQ2NzMyNw==&mid=2247488294&idx=1&sn=7740315267b2fed9299edd417aeb6bab&chksm=fcad5cb6cbdad5a03dd99ba327d35386add22d59b2957944c99fc16ca98d207204e92d8c3826&scene=21#wechat_redirect)

2. 分析 gt,challenge 生成的流程 [参考流程](https://www.cnblogs.com/rnckty/p/12755879.html)

3. js替换（可使用[ReRes](https://chrome.google.com/webstore/detail/reres/gieocpkbblidnocefjakldecahgeeica?utm_source=chrome-ntp-icon) ,或者其他工具替换为反混淆的js代码），调试打断点扣参数生成逻辑

4. 图片拼合参考 [图片拼合](https://www.cnblogs.com/rnckty/p/12756016.html)

5. 移动轨迹生成
   
6. 上传加密移动轨迹
