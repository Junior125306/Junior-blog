---
title: 一加8T 解锁bl刷入面具和XP框架
date: 2020-11-10
published: true
slug: oneplus
tags: ['Android', '搞机']
cover_image: "./images/oneplus.png"
canonical_url: false
description: "写个文章记录自己第一次刷机"
---

害怕下次想刷还要重新网上找教程,自己总结了下   

:::note  参考以下教程

https://www.oneplusbbs.com/thread-5670375-1-1.html  一加论坛-宁静之雨

https://www.oneplusbbs.com/thread-5665055-1-1.html  一加论坛-胖次蓝

https://www.coolapk.com/feed/22790284 酷安-vip大白
:::

机型 1+8T    

### 安装adb

首先需要用到安卓得一个adb工具 ，[点击去官网下载](https://developer.android.com/studio/releases/platform-tools)

![1604799193075](https://img-1251014762.cos.ap-nanjing.myqcloud.com/blog/20-11-10-oneplus/1604799193075.png)

下载所需要得版本，

下载解压后是这个样子，其实用到的只有adb相关的东西![1604799234351](https://img-1251014762.cos.ap-nanjing.myqcloud.com/blog/20-11-10-oneplus/1604799234351.png)

然后再去去环境变量配置一下，在此电脑上右键👉属性👉环境变量👉

在下面的系统变量里找到`PATH` 然后双击，点右侧新建，添加刚才的platform-tools文件夹路径

![1604799445457](https://img-1251014762.cos.ap-nanjing.myqcloud.com/blog/20-11-10-oneplus/1604799445457.png)

打开命令提示符输入`adb version`试一下

![1604799523832](https://img-1251014762.cos.ap-nanjing.myqcloud.com/blog/20-11-10-oneplus/1604799523832.png)

有版本号说明可以使用。

:::warning 重要！
先备份，我是把照片传到了云相册，要装什么软件在酷安弄了个应用集到时候一块下载安装。其他文件打包放到了网盘。
:::
## 一、解锁bootloader

bootloader得中文名称是系统启动加载器，顾名思义，主要功能是在开机进入系统之前，加载某些硬件初始化程序，启动系统进程等。

能不能解锁bootloader，是很多人购机的重要参考因素，因为这是取得手机超级管理员权限的大前提。 

如果不解锁bootloader，手机变砖后，你通常就只能用客服的专用工具救砖，而解锁后，你可能只要刷一下官方的boot文件，或者是全量包，就直接开机了，数据都不丢。 

 解锁的坏处，首先是解开bootloader锁的同时，手机会恢复出厂设置，数据就没了；其次是影响官方系统升级的推送，以一加为例，原本的差量更新会因为解锁了而变成推送全量包；而且有些厂商甚至会直接不再给你提供保修，虽然解锁还可以锁回去，但还是看得出来的，因为状态不是locked而是relocked，也即这是解锁后再回锁的；还有就是解锁手机后，你乱刷机或者乱装一些插件，轻则可能导致隐私泄露、重则手机变砖…… 

充分了解这些信息后，就开冲！

用数据先链接电脑（电脑没有c口找个usb口的线就ok），打开手机开发者选项（<b>设置-关于手机-连戳五下版本号，在进入设置-系统-开发者选项</b>），打开OEM解锁，打开USB调试。会弹出是否允许链接usb调试

<img src="https://img-1251014762.cos.ap-nanjing.myqcloud.com/blog/20-11-10-oneplus/1604801147649.png" alt="1604801147649" style="zoom: 25%;" />

cmd输入`adb devices`查看是否连接成功

![1604801753349](https://img-1251014762.cos.ap-nanjing.myqcloud.com/blog/20-11-10-oneplus/1604801753349.png)

cmd输入命令`adb reboot bootloader`,此时手机进入bootloader模式 

cmd输入命令`fastboot flashing unlock`

![1604803592915](https://img-1251014762.cos.ap-nanjing.myqcloud.com/blog/20-11-10-oneplus/1604803592915.png)

 通过音量键上下选择，电源键确认，选择解锁。 

 之后手机会重启，开机后重走新手机的设置流程，但进入系统后可能会发现一些预装的app不见了，包括一加的云同步之类的，此时不要急，从论坛或者官网下载最新的对应机型的全量固件包（其实不比你当前版本低的全量包都行），下载下来，放到手机里，然后手动升级一次即可（设置里找系统更新，右上角点开有个从本地升级） 

我用的是一加8t   3.4版本的包

```
http://otaafsc-cost.h2os.com/OnePlus8T_CH/OnePlus8THydrogen_15.H.18_0180_2011011545/patch/CHN/OnePlus8THydrogen/OnePlus8THydrogen_15.H.18_0180_2011011545/OnePlus8THydrogen_15.H.18_OTA_0180_all_2011011545_6291e5844.zip
```

上面是链接，手机迅雷下的挺快的，对应的boot.img下载

链接：https://pan.baidu.com/s/1TSlz-wMJv_gGJB0-XH43pw 
提取码：5k1g 

boot.img文件放到根目录下，刷入root得时候需要用，如果你使用的版本和我的不一样，可以试着参考 http://www.oneplusbbs.com/thread-4197994-1.html 自行提取，或者等论坛大佬提取出来



## 二、加载Root补丁

先安装 MagiskManager ，我是从酷安下载的 

设置-个性化-通道选择选择测试版

在magisks旁边点安装，选择  `选择并修补一个文件选项`，

安装好以后会给你说修补好的img文件在哪。

![Slice](https://img-1251014762.cos.ap-nanjing.myqcloud.com/blog/20-11-10-oneplus/Slice1.png)

把修补好的img包放到电脑上，然后执行cmd命令`adb reboot bootloader`,

进入 bootloader以后，输入 `fastboot boot `然后把刚才放到电脑的包拖进命令行

![1604807755331](https://img-1251014762.cos.ap-nanjing.myqcloud.com/blog/20-11-10-oneplus/1604807755331.png)

大概就是这个样子，然后回车，手机自动开机，此实已经拥有了root权限，不过找个权限一重启就没了， 所以还需要获取永久root权限。 

## 三、刷入 **magisk完整包** 

打开MagiskManager的app，联网，点击magisk的安装，然后选择直接安装

或者不想联网下载，就和刷模块一样，手动刷入Magisk框架的zip包也行。

如果后续想恢复未root的状态，除了刷全量包，也可以只恢复boot文件（注意要和当前的系统版本一致），用前面提取的官方固件里的boot.img，在bootloader模式下刷入，然后开机即可：

fastboot flash --slot all boot boot.img

## 四、 **OTA保留仍保留root权限** 

这个操作，简而言之就是收到官方推送系统更新的时候，放心下载并安装，**但千万别重启**（重启就要重新root了，你还得找新版本的全量包打补丁）；

你需要在重启之前，先打开MagiskManager，点击安装magisk，选择安装到未使用的槽位，安装完毕后，重启手机即可。

<img src="https://img-1251014762.cos.ap-nanjing.myqcloud.com/blog/20-11-10-oneplus/1604808769020.png" alt="1604808769020" style="zoom:25%;" />

## 五、刷入edxp框架

1.先安装edxposed的app   EdXposed Manager_4.6.0-pre.apk

2.在通过面具安装Riru(Riru-Core)

3.重启

4.重启后安装，下载 EdXposed-YAHFA-v0.5.0.6-android_r (4564)-release.zip  通过面具本地安装这个包

链接：https://pan.baidu.com/s/1TSlz-wMJv_gGJB0-XH43pw 
提取码：5k1g 

第三步出现卡logo问题可是试着以下解决方案

- 方法一：按音量加+电源键关机  然后 音量减+电源键开机双清

- 方法二：按音量加+电源键关机  然后 开机，出现开机英文的时候按住音量下，一直按住，直到开机进系统，

  进入系统以后  你会发现左下角显示安全模式，直接按住电源键，选择重启，就能进入正常的系统了 





















































































​        
