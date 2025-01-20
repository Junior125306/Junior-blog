---
title: 装机记录
date: 2025-01-20
published: true
slug: computer-setup
tags: ['电脑', '装机']
cover_image: "./images/win11.png"
canonical_url: false
description: "记录一下装机过程"
---

## 😶‍🌫️

周末c盘满了，但是其实我的物理硬盘挺大的
我的磁盘1 总共 500 g 当时给 c盘分的太小了，有些缓存/软件/记录 等都放到了c盘导致原来分的 200g不够用了
但是 c盘后面我又分了个 d盘，不能单独给c扩容了，索性重装系统 物理磁盘1 不进行分区了

装完系统之后糟糕的事情来了 不小心把 `c/users/用户名`  用户名起成了中文的 导致我现在有些软件不兼容，
尝试了网上修改名称的解决方案之后发现还有bug 索性又重装一边
本文章记录下 安装配置的东西

### 必要软件

[jetbrains idea](https://www.jetbrains.com/idea/download)&emsp;
[jetbrains webstrom](https://www.jetbrains.com/webstorm/download)&emsp;
[jetbrains datagrip](https://www.jetbrains.com/datagrip/download)&emsp;
[Visual Studio Code](https://code.visualstudio.com/)&emsp;
[Cursor](https://www.cursor.com/)&emsp;
[chrome](https://www.google.com/intl/zh-CN/chrome/)&emsp;
[git](https://git-scm.com/downloads/win)&emsp;
[Clash](https://pan.baidu.com/s/1B2LAhoE6QZFCxVl7JOklTw?pwd=sqpr)&emsp;
[Typora](https://typoraio.cn/)&emsp;
[网易云音乐](https://music.163.com/#/download)&emsp;
[网易有道词典](https://cidian.youdao.com/download-app/?keyfrom=dict_web_product)&emsp;
[飞书](https://www.feishu.cn/download?from=download_content_recommend_bottom_free_register)&emsp;
[微信](https://weixin.qq.com/)&emsp;
[百度网盘](https://pan.baidu.com/download)&emsp;
[火绒](https://www.huorong.cn/)&emsp;
[fnm](https://github.com/Schniz/fnm/releases)&emsp;

## 配置相关

```bath
# npm 设置缓存目录
npm config set cache "D:\AppData\npm_cache"
# yarn 设置缓存目录
yarn config set cache-folder "D:\AppData\yarn_cache"
# pnpm 设置缓存目录
pnpm config set store-dir "D:\AppData\pnpm_cache"
# 配置 npm 本地代理
npm config set proxy http://127.0.0.1:7890
npm config set https-proxy http://127.0.0.1:7890
yarn config set proxy http://127.0.0.1:7890
yarn config set https-proxy http://127.0.0.1:7890
# 取消 npm 本地代理
npm config delete proxy
npm config delete https-proxy
yarn config delete proxy
yarn config delete https-proxy
# 配置 Git 本地代理
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy http://127.0.0.1:7890
取消 Git 本地代理
git config --global --unset http.proxy
git config --global --unset https.proxy
# powerJob 允许 运行脚本 
set-executionpolicy remotesigned

```

## 环境变量

cargo 设置主目录

环境变量 `CARGO_HOME` `D:\AppData\.cargo`

rustc 设置主目录 `RUSTUP_HOME` `D:\AppData\.rustup`

gradle 设置主目录 `GRADLE_USER_HOME` `D:\AppData\gradle_cache`

npm 设置镜像 `FNM_NODE_DIST_MIRROR` `https://npmmirror.com/mirrors/node/`

## 其他配置

powershell 前置脚本

打开 PowerShell 的配置文件Microsoft.PowerShell_profile.ps1，文件路径为%USERPROFILE%\Documents\WindowsPowerShell，若没有对应文件夹或文件手动创建即可。

将以下内容添加至配置文件末尾

```bath
    fnm env --use-on-cd | Out-String | Invoke-Expression
```
