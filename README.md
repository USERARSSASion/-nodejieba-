nodejieba 安装经验
=======

## 使用

```bash
$ node test.js
```
## 安装

我的 node 与 npm 版本
```bash 
node -v 
10.13.0
```
```bash 
npm -v 
6.4.1
```
1.首先要安装 Visual Studio Build Tools 和 Python

```bash 
npm install --python=python2.7
```
```bash 
npm config set python python2.7
```
```bash 
npm install --global --production windows-build-tools
```
ps: 我使用的是 win7 安装的，我用 win 2008 安装就一直不成功


成功打印如下
```bash 
Now configuring the Visual Studio Build Tools and Python...
All done!
```

2. 安装 node-gyp 用来编译 nodejieba
```bash 
npm install -g node-gyp
npm install nodejieba
```
不报错就代表安装成功了。

我把安装包也上传上去，实在安装不了可以直接下载使用，这样会有个问题就是没有写入 package.json 里面
# -nodejieba-
