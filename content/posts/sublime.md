---
title: 一个复杂的代码文本编辑器 - sublime
date: 2021-01-30
published: true
slug: sublime
tags: ['开发工具']
cover_image: "./images/sublime.png"
canonical_url: false
description: "A sophisticated text editor for code, markup and prose"
---

:::warning 一个复杂的代码文本编辑器
&emsp;&emsp;这是官网对Sublime的描述，如果说Notepad++是一款不错Code神器，那么Sublime Text应当称得上是神器滴哥。Sublime Text最大的优点就是跨平台，Mac和Windows均可完美使用；其次是强大的插件支持，几乎无所不能。
:::

### 🦴前往官网下载

http://www.sublimetext.com/ <br/>
中文官网  http://www.sublimetext.cn/

点击右上角 Download  选择版本进行下载

### 🦴安装Package Control 组件

&emsp;&emsp;Package Control 是 Sublime Text 插件包管理器。它包含可供安装的将近3000个软件包的列表，用户可以自己添加任何 GitHub 或 BitBucket 存储库。简单的说，也就是 sublime Text 只有安装了 Package control 组件，后期才能安装各种不同的插件。有了它，我们就可以很方便的浏览、安装和卸载 Sublime Text 中的插件。

#### 安装方式一 

按快捷键 `Ctrl + Shift + P`  搜索 `install package control` 然后点击 即可安装

#### 安装方式二

按快捷键 `Ctrl + ~`  粘贴以下命令并回车

```
import urllib.request,os; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read()
```

然后耐心等待即可

#### 安装插件

按快捷键 `Ctrl + Shift + P`  搜索 `package control` <br/>  然后点击 `Package Control: Install Package` 进入组件

<img src="https://img-1251014762.cos.ap-nanjing.myqcloud.com/blog/21-01-30-sublime/sub_install1.png" style="zoom: 80%;" />

这个看到的就是插件目录啦 👇

<img src="https://img-1251014762.cos.ap-nanjing.myqcloud.com/blog/21-01-30-sublime/sub_install2.png" style="zoom: 80%;" />

这里搜索`SideBarEnhancements` 这是一个展示文件目录的插件（其他大多插件我已经安装过不方便演示），选择插件回车或者双击安装

<img src="https://img-1251014762.cos.ap-nanjing.myqcloud.com/blog/21-01-30-sublime/sub_install3.png" style="zoom: 80%;" />

点击后左下角会有显示在安装  安装完成后会提示 

`Package SideBarEnhancements successfully installed`

即已经安装完毕 

按 `Ctrl + ~` 也可以查看安装进度

<img src="https://img-1251014762.cos.ap-nanjing.myqcloud.com/blog/21-01-30-sublime/sub_install6.png" style="zoom: 80%;" />

### 🦴查看插件

按快捷键 `Ctrl + Shift + P`  搜索 `package control list`

### 🦴卸载插件

按快捷键 `Ctrl + Shift + P`  搜索 `remove`

<img src="https://img-1251014762.cos.ap-nanjing.myqcloud.com/blog/21-01-30-sublime/sub_install5.png" style="zoom: 80%;" />


### 🦴推荐插件

**ConvertToUTF8**
```angular2html
 打开文件时将其他编码转换为utf-8编码  如果乱码会一刹那转换为正常字体
```
**Emme**
```html
 html必备 可以通过指定格式生成html代码  比如输入ul#nav>li.item$*3>a{Index $}  然后按下tab键，
 👇👇👇👇👇👇👇
 <ul id="nav">
   <li class="item1"><a href="">Index 1</a></li>
   <li class="item2"><a href="">Index 2</a></li>
   <li class="item3"><a href="">Index 3</a></li>
 </ul>
```
**JsFormat**
```angular2html
 格式化js代码
```
**HTML-CSS-JS Prettify**
```angular2html
 HTML、CSS、JS格式化。
```
**LESS**
```angular2html
 less语法高亮插件
```
**Bracket Highlighter**
```angular2html
 点击前一半的括号后一半的括号会高亮  支持 [], (), {}, “”, ”, <tag></tag>
```
**Trailing spaces**
```angular2html
 删除多余空格 CTRL+SHITF+T （需要自己配置快捷键）
在Preferences / Key Bindings – User加上代码（数组内）
```
**GBK Encoding Support**
```angular2html
识别GBK和ANSI
```
**ChineseLocalizations**
```angular2html
中文插件
```
