# user setting

```json
{
    "gitlens.historyExplorer.enabled": true,
    "explorer.confirmDelete": false,
    "workbench.statusBar.visible": true,
    // "editor.fontFamily": "Monaco",
    "terminal.integrated.fontFamily": "Hack",
    "terminal.integrated.fontSize": 12,
    "terminal.integrated.lineHeight":1,
    // 指定在工作台中使用的图标主题
    // "workbench.iconTheme": "eq-material-theme-icons-darker",
    "workbench.iconTheme": "vscode-icons",

    // Error warning message: "Experimental support for decorators is a feature that is subject to change in a future release"
    "javascript.implicitProjectConfig.experimentalDecorators": true,

    // 控制是否显示 minimap
    "editor.minimap.enabled": false,
    // },
    // 以像素为单位控制字号。
    "editor.fontSize": 12,

    // 通过使用鼠标滚轮同时按住 Ctrl 可缩放编辑器的字体
    // "editor.mouseWheelZoom": true,

    // 窗口失去焦点自动保存
    "files.autoSave": "afterDelay",

    // the last line of your file will be at the bottom of the editor pane when you scroll down to the maximum.
    "editor.scrollBeyondLastLine": false,

    // 调整窗口的缩放级别。原始大小是 0，每次递增(例如 1)或递减(例如 -1)表示放大或缩小 20%。也可以输入小数以便以更精细的粒度调整缩放级别。
    // "window.zoomLevel": 2,

    // 控制光标样式，接受的值为 "block"、"block-outline"、"line"、"line-thin" 、"underline" 和 "underline-thin"
    "editor.cursorStyle": "line",

    // 控制光标动画样式，可能的值为 "blink"、"smooth"、"phase"、"expand" 和 "solid"
    "editor.cursorBlinking": "smooth",

    // 控制换行方式。可以选择:
    // - "off" (禁用换行)，
    // - "on" (视区换行)，
    // - "wordWrapColumn" (在 "editor.wordWrapColumn" 处换行)或
    // - "bounded" (在最小视区和 "editor.wordWrapColumn" 处换行)。
    "editor.wordWrap": "off",

    // 在 "editor.wordWrap" 为 "wordWrapColumn" 或 "bounded" 时控制编辑器列的换行。
    "editor.wordWrapColumn": 80,

    // 要对鼠标滚轮滚动事件的 "deltaX" 和 "deltaY" 使用的乘数
    // "editor.mouseWheelScrollSensitivity": 1,

    // 控制边栏的位置。它可显示在工作台的左侧或右侧。
    "workbench.sideBar.location": "left",

    // 控制是否应在新窗口中打开文件。
    // - default: 文件将在该文件的文件夹打开的窗口中打开，或在上一个活动窗口中打开，除非该文件通过平台或从查找程序(仅限 macOS)打开
    // - on: 文件将在新窗口中打开
    // - off: 文件将在该文件的文件夹打开的窗口中打开，或在上一个活动窗口中打开
    // 注意，可能仍会存在忽略此设置的情况(例如当使用 -new-window 或 -reuse-window 命令行选项时)。
    "window.openFilesInNewWindow": "on",

    // 配置语言的文件关联(如: "*.extension": "html")。这些关联的优先级高于已安装语言的默认关联。
    // "files.associations": {},

    // 读取和编写文件时将使用的默认字符集编码。
    "files.encoding": "utf8bom",

    // 保存时取消自动格式化
    "editor.formatOnSave": false,

    // When enabled, will attempt to guess the character set encoding when opening files
    // "files.autoGuessEncoding": true,

    // 默认行尾字符。
    // "files.eol": "\r\n",
    // "workbench.colorTheme": "Monokai",
    "workbench.colorCustomizations": {
        // "contrastActiveBorder": "#01f77c",
        // "contrastBorder": "#aaaaa0",
        "focusBorder": "#ffd800",
        // "widget.shadow": "#f2f3f4",
        "scrollbarSlider.background": "#414a4c",
        "scrollbarSlider.activeBackground": "#ecd540",
        "scrollbarSlider.hoverBackground": "#ffba00",
        "foreground": "#f0ead6",
        "sideBar.background": "#282a31",

        // "button.background": "#708090",
        // "button.foreground": "#282a31",
        // "button.hoverBackground": "#808080",
        "input.foreground": "#a7fc00",

        // "editorCursor.foreground": "#7fff00",
        // "editor.findMatchBackground": "#f94d00",
        // "editor.findMatchHighlightBackground": "#f94d00",
        // "editor.foreground": "#f0ead6",
        // "editor.background": "#282a36",
        // "editor.selectionBackground": "#69359c",
        // "editor.selectionHighlightBackground": "#282a36",
        // "editor.inactiveSelectionBackground": "#282a36",
        // "editor.wordHighlightBackground": "#282a36",
        // "editor.wordHighlightStrongBackground": "#282a36",
        // "editor.hoverHighlightBackground": "#0f0f0f",
        // "editor.lineHighlightBackground": "#282a36",
        // "editor.lineHighlightBorder": "#414a4c",
        // "editorLineNumber.foreground": "#40404f",

        /* file bar */
        "tab.activeBackground": "#4f4f50",
        // "tab.border": "#e0e0e0",
        "tab.inactiveForeground": "#e0e0e0",

        // left side bar
        // "activityBar.foreground": "#c0c0c0",
        // "statusBar.background": "#6f6f6f",
        // "statusBarItem.activeBackground": "#ff0000",
        // "statusBarItem.hoverBackground": "#06905f"
    },
    // "docthis.includeAuthorTag": true, // 出现@Author
    // "docthis.includeDescriptionTag": true, // 出现@Description
    // "format": "compressed", // 压缩
    // "extensionName": ".min.css", // 编译后缀名
    // "savePath": "./css",
    // "team.showWelcomeMessage": false, // 编译保存的路径,
    
    // format设置
    "javascript.format.insertSpaceBeforeFunctionParenthesis": false,
    "prettier.singleQuote": true,
    "prettier.semi": false,
    "prettier.useTabs": true,

    // 这里主要是设置emmet对于vue的支持
    "emmet.syntaxProfiles": {
        "vue": "html",
        "vue-html": "html",
    },
    "emmet.includeLanguages": {
      "vue-html": "html",
      "vue": "html",
      "javascript": "javascriptreact",
      "wxml": "html"
    },
    "gitlens.advanced.messages": {
        "suppressShowKeyBindingsNotice": true,
        "suppressWelcomeNotice": true
    },
    // 在这里主要做了对vue语言的支持
    "files.associations": {
      "*.vue": "vue",
      "*.js": "javascript",
      "*.md": "markdown",
      "*.cjson": "jsonc",
      "*.wxss": "css",
      "*.wxs": "javascript"
    },
    // 将一些不必要的搜索范围去掉
    "search.exclude": {
        "**/node_modules": true,
        "**/bower_components": true,
        "**/dist": true,
        "**/.git": true
    },
    // Fira Code是我最喜欢的字体，下面会介绍原因
    "editor.fontFamily": "Fira Code, Menlo, Monaco, 'Courier New', monospace",
    // How to set tab-space style?
    "editor.tabSize": 2,
    "editor.insertSpaces": true,
    "editor.detectIndentation": false,
    "workbench.colorTheme": "Dracula",
    "search.followSymlinks": false,
    "minapp-vscode.disableAutoConfig": true,
    "gitlens.mode.active": "zen",
    "materialTheme.fixIconsRunning": false,
    "html.format.extraLiners": " "
  }
```