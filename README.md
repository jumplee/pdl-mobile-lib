# pdl-mobile-lib
一个基础js代码库，只集成最常用的功能，主要用于移动端展示网站。包含功能dom操作，ajax,类handlebar模版，加载js

## 集成以下框架

jquery3

[jquery3 兼容性说明,移动端](https://jquery.com/browser-support/)

template7

http://idangero.us/template7/

loadScript

[优雅加载js](https://github.com/xiongwilee/blog/issues/8)


# 不再集成
[fastclick](https://github.com/ftlabs/fastclick)
As of late 2015 most mobile browsers - notably Chrome and Safari - no longer have a 300ms touch delay
官方文档已经体现2015年的浏览器几乎都不再有延迟，所以可以移除了。





## 开发

下载git包

环境安装

```
npm install
```

打包

```
npm run build
```


## 推荐使用

promise   移动端全部支持，android4.4+  ios8+

[promise 兼容性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7)

---

[weflow](https://weflow.io/)

开发流程工具，对前端开发效率和规范化很有帮助

ext文件夹中是一些常用的函数，可以需要的时候使用，利用weflow可以自动打包成公共文件使用