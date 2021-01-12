---
title: IDEA的奇巧淫记
date: 2020-10-07
published: true
slug: idea
tags: ['IDEA', '开发工具']
cover_image: "./images/idea.png"
canonical_url: false
description: "开始第一次收集创作吧！！"
---

#### IDEA插件

1. `Dracula Theme`<br/>
试过很多主题，这一款是我最最中意的了，配色五彩斑斓却不花哨，底色偏紫但是并不gay里gay气

![官网展示图](https://cdn.zz-yy.top/blog/20-10-07-idea/theme.png)

2. `Nyan Progress Bar`<br/>
我不知道该怎么形容它，是可爱还是酷，感觉自己心里软软的，来看看效果

![加载进度条](https://cdn.zz-yy.top/blog/20-10-07-idea/Nyan.gif)

3. `CodeGlance`<br/>
idea本身是没有类似Sublime那样的代码整体预览的，这个插件恰恰实现了这个功能

<img src="https://cdn.zz-yy.top/blog/20-10-07-idea/CodeGlance.png" style="zoom: 60%;" />
<br/>

4. `Rainbow Brackets`<br/>
有没有过因为代码括号太多看的眼花缭乱，这个插件可以帮助你快速识别每一对括号

<img src="https://cdn.zz-yy.top/blog/20-10-07-idea/Rainbow_Brackets.png" style="zoom: 100%;" />
<br/>

5. `google-java-format`<br/>
因为我是主要写java的这款插件可以让我的idea按快捷键`Ctrl + Alt + L`的时候按照谷歌的规范格式化，感觉自己的代码逼格瞬间提升了

6. `Ide-Eval-reset`<br/>
重置你的idea试用时间，webstorm、datagrip通用

:::note tip 
<a style="color: #669">我并没有对idea的设置进项下手，除了将`Settings->Editor->General->Code Completion`里面的`Match case`取消了勾选（因为这样idea就不会在我输入小写字母的时候不提示大写的代码段了），还有一些默认得开发环境，快捷键也没有进行其他的修改，那么我们看一下Idea实用的快捷键。</a> 
:::

#### 行操作快捷键

**向下复制行 Ctrl + D**
<img src="https://cdn.zz-yy.top/blog/20-10-07-idea/CtrlD.gif" style="zoom: 78%;"/>

**删除行 Ctrl + Y**

> 不过我平常使用的是 Ctrl + X ，意思是剪切一行，也能够达到删除的视觉效果

<img src="https://cdn.zz-yy.top/blog/20-10-07-idea/CtrlY.gif" style="zoom: 80%;" />

<br/>

**上下移动行 Alt + Shift + ↑/↓**
<img src="https://cdn.zz-yy.top/blog/20-10-07-idea/AltShift.gif" style="zoom: 80%;" />

**光标移动到上一行 Ctrl + Alt + Enter**
<img src="https://cdn.zz-yy.top/blog/20-10-07-idea/ctrlalt_enter.gif" style="zoom: 80%;" />


**在光标处换行，光标位置不变 Ctrl + Enter**
> Ctrl + Shift + Enter 换到下一行不会把当前行分成两部分 并且光标在下一行

<img src="https://cdn.zz-yy.top/blog/20-10-07-idea/CtrlEnter.gif" style="zoom: 80%;" />

**和下一行合并 Ctrl + Shift + J**
<img src="https://cdn.zz-yy.top/blog/20-10-07-idea/CtrlSJ.gif" style="zoom: 80%;" />


**缩进/取消缩进  Tab/Shift + Tab**
<img src="https://cdn.zz-yy.top/blog/20-10-07-idea/Tab_STab.gif" style="zoom: 80%;" />


#### 多光标操作快捷键

**向下寻找相同word 并且在word后面生成光标 Alt + J**
<img src="https://cdn.zz-yy.top/blog/20-10-07-idea/Alt_J.gif" style="zoom: 80%;" />


**Alt + 鼠标拖动 自由用鼠标选择光标处**
<img src="https://cdn.zz-yy.top/blog/20-10-07-idea/AltCheck.gif" style="zoom: 80%;" />


**Alt + Shift + 鼠标点击 在鼠标点击处生成光标**
<img src="https://cdn.zz-yy.top/blog/20-10-07-idea/AltShiftcheck.gif" style="zoom: 80%;" />


**Ctrl + Alt + Shift + J 在全文中找到相同的word并且生成光标**
<img src="https://cdn.zz-yy.top/blog/20-10-07-idea/ctrlasJ.gif" style="zoom: 80%;" />


#### 搜索快捷键

**Ctrl + F全文查找**

**Ctrl + Shift + F 查找字段**
```
在左边的资源管理器点击某个文件夹然后按 Ctrl+Shift+F 可在点击文件夹里查找某个字段
```

**Shift+Shift 查找文件**
```
实际上 Ctrl + Shift + N 也能达到相同的效果 只不过感觉 Shift+Shift 比较顺手
```

**Ctrl + E 查看最近修改文件**
```
哇 这个简直太方便了吧   平时经常不小心把标签栏文件关掉的，找不到刚才文件的有福了
```

**Ctrl + Shift + U 切换选中字母大小写**
```
切换选中字母大小写  偶尔回用的到
```

**Ctrl + Q 切换选中字母大小写**
```
查询选中类 变量 方法  表 等等等等 的相关信息
```
#### 其他好用操作(不定时更新)

**快速clone项目**

```
按下 Ctrl + Shift + A
输入 git clone
选择 clone
输入远程仓库地址和要克隆到的文件夹
点击clone
```
**Ctrl + W 我用的最多的快捷键**

:::note tip 
<a style="color: #669">本文的插件、快捷键理论上大部分JetBrains家族的工具都能使用，比如`WebStorm`,`DataGrip` (顺便一提 DataGrip针不戳)</a> 
:::
