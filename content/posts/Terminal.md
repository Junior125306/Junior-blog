---
title: Windows Terminal 设置备份
date: 2021-07-09
published: true
slug: terminal
tags: ['开发工具']
cover_image: "./images/Terminal.png"
canonical_url: false
description: "备份下设置免得以后找不到"
---
主题来源   https://github.com/mobilemancer/windows-terminal-aurelia

### 下面是样子 

<img src="https://img-1251014762.cos.ap-nanjing.myqcloud.com/blog/21-07-09-terminal/terminal1.jpg" style="zoom: 80%;" />

### 下面是代码和图片

#### 找到目录位置 

找不到的话 打开设置的json 然后打开这个json所在的目录

我的目录在
`C:\Users\Zhang\AppData\Local\Packages\Microsoft.WindowsTerminal_8wekyb3d8bbwe\LocalState`

#### 图片 🔻

<img src="https://dow-1251014762.cos.ap-nanjing.myqcloud.com/au-os-L.png" style="zoom: 80%;" />
<img src="https://dow-1251014762.cos.ap-nanjing.myqcloud.com/au-os-M.png" style="zoom: 80%;" />

#### 配置文件 

```json
{
    "$schema": "https://aka.ms/terminal-profiles-schema",
    "defaultProfile": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
    "disableAnimations": false,
    "experimental.rendering.software": false,
    "initialCols": 100,
    "initialRows": 25,
    // Add any keybinding overrides to this array.
    // To unbind a default keybinding, set the command to "unbound"
    "keybindings": [],
    "profiles": 
    {
        "defaults": {},
        "list": 
        [
            {
                "acrylicOpacity": 0.84999999999999998,
                "backgroundImage": "ms-appdata:///local/au-os-L.png",
                "backgroundImageAlignment": "right",
                "backgroundImageOpacity": 0.80000000000000004,
                "backgroundImageStretchMode": "none",
                "colorScheme": "Aurelia",
                "commandline": "powershell.exe",
                "experimental.retroTerminalEffect": true,
                "fontFace": "JetBrains Mono",
                "fontSize": 12,
                "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
                "hidden": false,
                "icon": "ms-appdata:///local/au-os-M.png",
                "name": "PowerShell",
                "scrollbarState": "visible",
                "startingDirectory": "c:/",
                "tabTitle": "PowerShell",
                "useAcrylic": true
            },
            {
                "acrylicOpacity": 0.85000002384185791,
                "backgroundImage": "ms-appdata:///local/au-os-L.png",
                "backgroundImageAlignment": "bottomRight",
                "backgroundImageStretchMode": "none",
                "colorScheme": "Aurelia",
                "commandline": "cmd.exe",
                "experimental.retroTerminalEffect": true,
                "fontFace": "Cascadia Code",
                "guid": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}",
                "hidden": false,
                "name": "cmd",
                "startingDirectory": "c:/",
                "useAcrylic": true
            },
            {
                "acrylicOpacity": 0.85000002384185791,
                "backgroundImage": "ms-appdata:///local/au-os-L.png",
                "backgroundImageAlignment": "bottomRight",
                "backgroundImageStretchMode": "none",
                "colorScheme": "Aurelia",
                "experimental.retroTerminalEffect": true,
                "fontFace": "Cascadia Code",
                "guid": "{b453ae62-4e3d-5e58-b989-0a998ec441b8}",
                "hidden": false,
                "name": "Azure Cloud Shell",
                "source": "Windows.Terminal.Azure",
                "startingDirectory": "c:/",
                "tabTitle": "Cloud Shell",
                "useAcrylic": true
            },
            {
                "acrylicOpacity": 0.84999999999999998,
                "backgroundImage": "ms-appdata:///local/au-os-L.png",
                "backgroundImageAlignment": "bottomRight",
                "backgroundImageStretchMode": "none",
                "colorScheme": "Aurelia",
                "commandline": "\"%PROGRAMFILES%\\git\\usr\\bin\\bash.exe\" -i -l",
                "experimental.retroTerminalEffect": true,
                "fontFace": "Cascadia Code",
                "guid": "{78b4b215-5722-447b-8b7e-093f96493df2}",
                "hidden": false,
                "icon": "%PROGRAMFILES%\\git\\mingw64\\share\\git\\git-for-windows.ico",
                "name": "Git Bash",
                "startingDirectory": "c:/",
                "tabTitle": "Bash",
                "useAcrylic": true
            }
        ]
    },
    "schemes": 
    [
        {
            "background": "#1A1A1A",
            "black": "#000000",
            "blue": "#579BD5",
            "brightBlack": "#797979",
            "brightBlue": "#9CDCFE",
            "brightCyan": "#2BC4E2",
            "brightGreen": "#1AD69C",
            "brightPurple": "#975EAB",
            "brightRed": "#EB2A88",
            "brightWhite": "#EAEAEA",
            "brightYellow": "#E9AD95",
            "cursorColor": "#FFFFFF",
            "cyan": "#00B6D6",
            "foreground": "#EA549F",
            "green": "#4EC9B0",
            "name": "Aurelia",
            "purple": "#714896",
            "red": "#E92888",
            "selectionBackground": "#FFFFFF",
            "white": "#EAEAEA",
            "yellow": "#CE9178"
        },
        {
            "background": "#0C0C0C",
            "black": "#0C0C0C",
            "blue": "#0037DA",
            "brightBlack": "#767676",
            "brightBlue": "#3B78FF",
            "brightCyan": "#61D6D6",
            "brightGreen": "#16C60C",
            "brightPurple": "#B4009E",
            "brightRed": "#E74856",
            "brightWhite": "#F2F2F2",
            "brightYellow": "#F9F1A5",
            "cursorColor": "#FFFFFF",
            "cyan": "#3A96DD",
            "foreground": "#CCCCCC",
            "green": "#13A10E",
            "name": "Campbell",
            "purple": "#881798",
            "red": "#C50F1F",
            "selectionBackground": "#FFFFFF",
            "white": "#CCCCCC",
            "yellow": "#C19C00"
        },
        {
            "background": "#012456",
            "black": "#0C0C0C",
            "blue": "#0037DA",
            "brightBlack": "#767676",
            "brightBlue": "#3B78FF",
            "brightCyan": "#61D6D6",
            "brightGreen": "#16C60C",
            "brightPurple": "#B4009E",
            "brightRed": "#E74856",
            "brightWhite": "#F2F2F2",
            "brightYellow": "#F9F1A5",
            "cursorColor": "#FFFFFF",
            "cyan": "#3A96DD",
            "foreground": "#CCCCCC",
            "green": "#13A10E",
            "name": "Campbell Powershell",
            "purple": "#881798",
            "red": "#C50F1F",
            "selectionBackground": "#FFFFFF",
            "white": "#CCCCCC",
            "yellow": "#C19C00"
        },
        {
            "background": "#282C34",
            "black": "#282C34",
            "blue": "#61AFEF",
            "brightBlack": "#5A6374",
            "brightBlue": "#61AFEF",
            "brightCyan": "#56B6C2",
            "brightGreen": "#98C379",
            "brightPurple": "#C678DD",
            "brightRed": "#E06C75",
            "brightWhite": "#DCDFE4",
            "brightYellow": "#E5C07B",
            "cursorColor": "#FFFFFF",
            "cyan": "#56B6C2",
            "foreground": "#DCDFE4",
            "green": "#98C379",
            "name": "One Half Dark",
            "purple": "#C678DD",
            "red": "#E06C75",
            "selectionBackground": "#FFFFFF",
            "white": "#DCDFE4",
            "yellow": "#E5C07B"
        },
        {
            "background": "#FAFAFA",
            "black": "#383A42",
            "blue": "#0184BC",
            "brightBlack": "#4F525D",
            "brightBlue": "#61AFEF",
            "brightCyan": "#56B5C1",
            "brightGreen": "#98C379",
            "brightPurple": "#C577DD",
            "brightRed": "#DF6C75",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#E4C07A",
            "cursorColor": "#4F525D",
            "cyan": "#0997B3",
            "foreground": "#383A42",
            "green": "#50A14F",
            "name": "One Half Light",
            "purple": "#A626A4",
            "red": "#E45649",
            "selectionBackground": "#FFFFFF",
            "white": "#FAFAFA",
            "yellow": "#C18301"
        },
        {
            "background": "#002B36",
            "black": "#002B36",
            "blue": "#268BD2",
            "brightBlack": "#073642",
            "brightBlue": "#839496",
            "brightCyan": "#93A1A1",
            "brightGreen": "#586E75",
            "brightPurple": "#6C71C4",
            "brightRed": "#CB4B16",
            "brightWhite": "#FDF6E3",
            "brightYellow": "#657B83",
            "cursorColor": "#FFFFFF",
            "cyan": "#2AA198",
            "foreground": "#839496",
            "green": "#859900",
            "name": "Solarized Dark",
            "purple": "#D33682",
            "red": "#DC322F",
            "selectionBackground": "#FFFFFF",
            "white": "#EEE8D5",
            "yellow": "#B58900"
        },
        {
            "background": "#FDF6E3",
            "black": "#002B36",
            "blue": "#268BD2",
            "brightBlack": "#073642",
            "brightBlue": "#839496",
            "brightCyan": "#93A1A1",
            "brightGreen": "#586E75",
            "brightPurple": "#6C71C4",
            "brightRed": "#CB4B16",
            "brightWhite": "#FDF6E3",
            "brightYellow": "#657B83",
            "cursorColor": "#002B36",
            "cyan": "#2AA198",
            "foreground": "#657B83",
            "green": "#859900",
            "name": "Solarized Light",
            "purple": "#D33682",
            "red": "#DC322F",
            "selectionBackground": "#FFFFFF",
            "white": "#EEE8D5",
            "yellow": "#B58900"
        },
        {
            "background": "#000000",
            "black": "#000000",
            "blue": "#3465A4",
            "brightBlack": "#555753",
            "brightBlue": "#729FCF",
            "brightCyan": "#34E2E2",
            "brightGreen": "#8AE234",
            "brightPurple": "#AD7FA8",
            "brightRed": "#EF2929",
            "brightWhite": "#EEEEEC",
            "brightYellow": "#FCE94F",
            "cursorColor": "#FFFFFF",
            "cyan": "#06989A",
            "foreground": "#D3D7CF",
            "green": "#4E9A06",
            "name": "Tango Dark",
            "purple": "#75507B",
            "red": "#CC0000",
            "selectionBackground": "#FFFFFF",
            "white": "#D3D7CF",
            "yellow": "#C4A000"
        },
        {
            "background": "#FFFFFF",
            "black": "#000000",
            "blue": "#3465A4",
            "brightBlack": "#555753",
            "brightBlue": "#729FCF",
            "brightCyan": "#34E2E2",
            "brightGreen": "#8AE234",
            "brightPurple": "#AD7FA8",
            "brightRed": "#EF2929",
            "brightWhite": "#EEEEEC",
            "brightYellow": "#FCE94F",
            "cursorColor": "#000000",
            "cyan": "#06989A",
            "foreground": "#555753",
            "green": "#4E9A06",
            "name": "Tango Light",
            "purple": "#75507B",
            "red": "#CC0000",
            "selectionBackground": "#FFFFFF",
            "white": "#D3D7CF",
            "yellow": "#C4A000"
        },
        {
            "background": "#000000",
            "black": "#000000",
            "blue": "#000080",
            "brightBlack": "#808080",
            "brightBlue": "#0000FF",
            "brightCyan": "#00FFFF",
            "brightGreen": "#00FF00",
            "brightPurple": "#FF00FF",
            "brightRed": "#FF0000",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#FFFF00",
            "cursorColor": "#FFFFFF",
            "cyan": "#008080",
            "foreground": "#C0C0C0",
            "green": "#008000",
            "name": "Vintage",
            "purple": "#800080",
            "red": "#800000",
            "selectionBackground": "#FFFFFF",
            "white": "#C0C0C0",
            "yellow": "#808000"
        }
    ],
    "tabWidthMode": "titleLength",
    "theme": "dark"
}
```
<img src="https://img-1251014762.cos.ap-nanjing.myqcloud.com/blog/21-07-09-terminal/terminal1.jpg" style="zoom: 80%;" />