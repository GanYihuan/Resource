# Vscode

## plugin

- Auto Close Tag
- Auto Rename Tag
- Beautify
- Bootstrap 4
- Bracket Pair Colorizer
- Chinese Language
- Class autocomplete for HTML
- Code Outline
- Code Runner
- Color info
- CSS Peek
- Dash
- Debugger for Chrome
- Document This
- Dracula Official
- ESLint
- GitLens
- HTML Boilerplate
- HTML CSS Support
- HTML Snippets
- HTMLHint
- Icon Fonts
- Image preview
- JavaScript(ES6) code snippets
- JavaScript Snippet Pack
- jQuery Code Snippets
- jsx-beautify
- Language Support for Java
- markdownlint
- Material Theme
- Maven for Java
- npm
- npm intellisense
- One Dark
- One Dark Pro
- One Dark (Sublime Babel)
- One Dark Pro
- One Monokai Theme
- Open in Browser
- Path Intellisense
- Project Manager
- React Native Tools
- Sass
- vscode-stylelint
- stylus
- Sublime Text Keymap and Settings Importer
- SVG Viewer
- TSLint
- Vetur
- vscode-faker
- vscode-icons
- Vue 2 Snippets

## User settings

```json
{
	"gitlens.advanced.messages": {
		"suppressShowKeyBindingsNotice": true
	},
	"gitlens.historyExplorer.enabled": true,
	"explorer.confirmDelete": false,
	"workbench.statusBar.visible": true,
	// "editor.fontFamily": "Monaco",
	"terminal.integrated.fontFamily": "Hack",
	"terminal.integrated.fontSize": 12,
	"terminal.integrated.lineHeight": 1,
	"editor.tabSize": 2,
	// 指定在工作台中使用的图标主题
	"workbench.iconTheme": "vscode-icons",
	// 指定工作台中使用的颜色主题。
	"workbench.colorTheme": "Dracula",
	// "editor.codeLens": true,
	// "editor.snippetSuggestions": "inline",
	// "editor.quickSuggestionsDelay": 1,
	// "editor.autoIndent": false,
	// "editor.fontLigatures": true,
	// "editor.wordWrap": "off",
	// "editor.minimap.enabled": false,
	// "editor.wordBasedSuggestions": true,
	// "editor.cursorBlinking": "expand",
	// "editor.emptySelectionClipboard": false,
	// "editor.renderLineHighlight": "none",
	// "editor.accessibilitySupport": "off",
	// "editor.renderIndentGuides": true,
	// "editor.smoothScrolling": true,
	// "editor.scrollBeyondLastLine": true,
	// "editor.lineHeight": 20,
	// "editor.suggestLineHeight": 22,
	// "editor.quickSuggestions": {"other": true, "comments": false, "strings": true},
	// 控制是否显示 minimap
	"editor.minimap.enabled": false,
	// "[cpp]": {
	"editor.quickSuggestions": false,
	// },
	// "[c]": {
	// "editor.quickSuggestions": false
	// },
	// // 以像素为单位控制字号。
	"editor.fontSize": 12,

	// // 通过使用鼠标滚轮同时按住 Ctrl 可缩放编辑器的字体
	"editor.mouseWheelZoom": true,

	// 窗口失去焦点自动保存
	"files.autoSave": "onFocusChange",

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
		"contrastActiveBorder": "#01f77c",
		// "contrastBorder": "#aaaaa0",
		// "focusBorder": "#ffd800",
		// "widget.shadow": "#f2f3f4",
		"scrollbarSlider.background": "#414a4c",
		"scrollbarSlider.activeBackground": "#ecd540",
		"scrollbarSlider.hoverBackground": "#ffba00",
		// "foreground": "#f0ead6",
		// "sideBar.background": "#282a31",

		// "button.background": "#708090",
		// "button.foreground": "#282a31",
		// "button.hoverBackground": "#808080",
		// "input.foreground": "#a7fc00",

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

		// "tab.activeBackground": "#4f4f50",
		// "tab.border": "#e0e0e0",
		// "tab.inactiveForeground": "#e0e0e0",

		// "activityBar.foreground": "#c0c0c0",
		// "statusBar.background": "#6f6f6f",
		// "statusBarItem.activeBackground": "#ff0000",
		// "statusBarItem.hoverBackground": "#06905f"
	},
	// "team.showWelcomeMessage": false,
	"gitlens.mode.active": "zen"
}
```

## 快捷键 描述

- ctrl + shift + p 或者 F1 打开控制面板
- ** ctrl + p ** 快速打开
- ctrl + shift + n 新窗口
- ctrl + shift + w 关闭窗口

## 基本编辑快捷键

- Ctrl + X 剪切当前行/当前选中内容
- Ctrl + C 复制当前行/当前选中内容
- Alt + ↑ / ↓ 上/下移动一行
- Shift + Alt + ↓ / ↑ 向上/向下复制一行
- Ctrl + Shift + K 删除一行
- Ctrl + Enter 向下插入一行
- Ctrl + Shift + Enter 向上插入一行
- Ctrl + Shift + \\ 跳转到匹配的括号
- Ctrl+] / [ 代码行缩进/减少缩进
- Home 光标跳转到行头
- End 光标跳转到行尾
- Ctrl + Home 跳转到文件开头
- Ctrl + End 跳转到文件结尾
- Ctrl + ↑ / ↓ 向上/向下滚动一行
- Ctrl + ← / → 按单词移动光标 word
- Alt + PgUp / PgDown 向上/向下滚动页面
- Ctrl + Shif t+ [ 折叠区域代码
- Ctrl+Shift+] 展开区域代码
- Ctrl + K Ctrl + [ 折叠所有子区域代码
- Ctrl + K Ctrl + ] 展开所有折叠的子区域代码
- Ctrl + K Ctrl + 0 折叠所有区域代码
- Ctrl + K Ctrl + J 展开所有折叠区域代码
- Ctrl + K Ctrl + C 添加一行注释
- Ctrl + K Ctrl + U 取消注释
- Ctrl + / 切换添加/取消一行注释，等同 ctrl + K ctrl + C 和 Ctrl + K Ctrl + U
- Shift + Alt + A 切换 添加/取消 大块注释
- Alt + Z Toggle word wrap

## 导航

- Ctrl + T 列出所有符号（变量或者函数）
- Ctrl + G 跳转行
- Ctrl + P 跳转文件
- Ctrl + Shift + O 跳转到符号处（搜索变量或者函数）
- Ctrl + Shift + M 打开问题展示面板
- F8 下一个错误或警告
- Shift + F8 上一个错误或警告
- Ctrl + Shift + Tab 历史编辑窗口导航 Navigate editor group history
- Alt + ← / → Go back / forward
- Ctrl + M 进入用 Tab 来移动焦点 Toggle Tab moves focus

## 查找和替换

- Ctrl + F Find
- Ctrl + H Replace
- F3 / Shift + F3 向下/向上查找
- Alt + Enter 添加与选中元素匹配的所有元素（等同 atom 中的 Alt+F3）
- Ctrl + D 添加选中匹配元素中的下一个
- Ctrl + K Ctrl + D 移动当前选择到下个匹配选择的位置(光标选定) Move last selection to next Find match
- Alt + C / R / W 切换大小写敏感/正则表达式/整词

## 多行操作

- ** Alt + Click** 插入光标-支持多个
- ** Ctrl + Alt + ↑ / ↓** 向上/向下插入光标
- ** Ctrl + U ** 撤销最后一次光标操作
- Shift + Alt + I 插入光标到选中范围内所有行结束符 Insert cursor at end of each line selected
- Ctrl + I 选中当前行
- Ctrl + Shift + L 选择所有出现在当前选中的行-操作 Select all occurrences of current selection
- Ctrl + F2 匹配当前选中的词并插入光标 Select all occurrences of current word
- Shift + Alt + → 从光标处扩展选中全行 Expand selection
- Shift + Alt + ← 收缩选择区域 Shrink selection
- Shift + Alt + (drag mouse) 鼠标拖动区域，同时在多个行插入光标 Column (box) selection
- Ctrl + Shift + Alt + (arrow key) Column (box) selection
- Ctrl + Shift + Alt + PgUp/PgDown Column (box) selection page up/down

## 丰富的语言编辑

- Ctrl + Space 输入建议[智能提示] Trigger suggestion
- Ctrl + Shift + Space 输入建议[智能提示]
- Tab Emmet 指令触发/缩进 Emmet expand abbreviation
- Shift + Alt + F 格式化代码
- Ctrl + K Ctrl + F 格式化选中部分的代码
- F12 Go to Definition
- Alt + F12 Peek Definition
- Ctrl + K F12 在侧边打开定义 Open Definition to the side
- Ctrl + . 快速修复部分可以修复的语法错误 Quick Fix
- Shift + F12 显示所有引用
- F2 重命名
- Ctrl + Shift + . / , 替换下个值 Replace with next/previous value
- Ctrl + K Ctrl + X 移除空白字符 Trim trailing whitespace
- Ctrl + K M 更改页面文档格式 Change file language

## 编辑器管理

- Ctrl + F4, Ctrl + W 关闭编辑器
- Ctrl + K F 关闭当前打开的文件夹
- Ctrl + \\ 拆分编辑器
- Ctrl + 1 / 2 / 3 编辑器 tab 页切换 Focus into 1st, 2nd or 3rd editor group
- Ctrl + K Ctrl + ←/→ 编辑器 tab 页切换 Focus into previous/next editor group
- Ctrl + Shift + PgUp / PgDown 左/右移动编辑器 Tab 页位置
- Ctrl + K ← / → Move active editor group

## 文件管理

- Ctrl + N New File
- Ctrl + O Open File...
- Ctrl + S Save
- Ctrl + Shift + S Save As...
- ** Ctrl + K S ** 保存所有当前已经打开的文件
- Ctrl + F4 Close
- Ctrl + K Ctrl + W 关闭所有编辑窗口
- Ctrl + Shift + T 重新打开关闭的编辑器
- Ctrl + K Enter 保持打开状态 Keep Open
- Ctrl + Tab Open next
- Ctrl + Shift + Tab 调出最近打开的文件列表，重复按会切换
- Ctrl + K P 复制当前打开文件的存放路径
- **Ctrl + K R ** 打开文件所在文件夹
- Ctrl + K O 在新窗口打开当前文件

## 显示

- F11 切换全屏模式 Toggle full screen
- Shift + Alt + 1 Toggle editor layout
- Ctrl + = / - 放大 / 缩小
- Ctrl + B Toggle Sidebar visibility
- Ctrl + Shift + E 资源视图和编辑视图的焦点切换 Show Explorer / Toggle focus
- Ctrl + Shift + F 显示搜索
- Ctrl + Shift + G Show Git
- Ctrl + Shift + D Show Debug
- Ctrl + Shift + X Show Extensions
- Ctrl + Shift + H 全局替换 Replace in files
- Ctrl + Shift + J 切换（打开或关闭）搜索面板中的搜索设置 Toggle Search details
- Ctrl + Shift + C 打开 cmd 命令窗口 Open new command prompt/terminal
- Ctrl + Shift + U 显示输出面板
- Ctrl + Shift + V 切换 Markdown 预览
- Ctrl + K V 在侧边打开 markdown 预览

## 调试

- F9 添加解除断点
- F5 启动调试、继续
- Shift + F5 Stop
- F11 / Shift + F11 Step into/out
- F10 Step over
- Ctrl + K Ctrl + I 显示悬浮

## 集成终端

- Ctrl + shift + \ `打开集成终端面板 Show integrated terminal Ctrl + Shift + \` 创建一个新的集成终端终端 Create new terminal
- Ctrl + Shift + C 复制所选 Copy selection
- Ctrl + Shif t+ V 复制到当前激活的终端 Paste into active terminal
- Ctrl + ↑ / ↓ Scroll up/down
- Shift + PgUp / PgDown 页面上下翻屏 Scroll page up/down```
- Ctrl + Home / End 滚动到页面头部或尾部 Scroll to top/bottom
