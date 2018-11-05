{
	"gitlens.historyExplorer.enabled": true,
	"explorer.confirmDelete": false,
	"workbench.statusBar.visible": true,
	"terminal.integrated.fontFamily": "Hack",
	"terminal.integrated.fontSize": 12,
	"terminal.integrated.lineHeight": 1,
	// 指定在工作台中使用的图标主题
	"workbench.iconTheme": "vscode-icons",

	// Error warning message: "Experimental support for decorators is a feature that is subject to change in a future release"
	"javascript.implicitProjectConfig.experimentalDecorators": true,

	// Fira Code是我最喜欢的字体，下面会介绍原因
	"editor.fontFamily": "Fira Code, Menlo, Monaco, 'Courier New', monospace",
	"editor.tabSize": 2,
	"editor.insertSpaces": true,
	"editor.detectIndentation": false,
	// 控制是否显示 minimap
	"editor.minimap.enabled": false,
	// },
	// 以像素为单位控制字号。
	"editor.fontSize": 12,
	"editor.lineHeight": 20,

	// 窗口失去焦点自动保存
	"files.autoSave": "afterDelay",

	// the last line of your file will be at the bottom of the editor pane when you scroll down to the maximum.
	"editor.scrollBeyondLastLine": false,

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

	// 控制边栏的位置。它可显示在工作台的左侧或右侧。
	"workbench.sideBar.location": "left",

	// 控制是否应在新窗口中打开文件。
	// - default: 文件将在该文件的文件夹打开的窗口中打开，或在上一个活动窗口中打开，除非该文件通过平台或从查找程序(仅限 macOS)打开
	// - on: 文件将在新窗口中打开
	// - off: 文件将在该文件的文件夹打开的窗口中打开，或在上一个活动窗口中打开
	// 注意，可能仍会存在忽略此设置的情况(例如当使用 -new-window 或 -reuse-window 命令行选项时)。
	"window.openFilesInNewWindow": "on",

	// 读取和编写文件时将使用的默认字符集编码。
	"files.encoding": "utf8bom",

	// 保存时取消自动格式化
	"editor.formatOnSave": false,

	// 默认行尾字符。
	"workbench.colorCustomizations": {
		"sideBar.background": "#333",
		"input.foreground": "#a7fc00",
		"list.hoverBackground": "#db6454",
		"list.focusBackground": "#db6454",
		"list.activeSelectionBackground": "#db6454",
		"list.activeSelectionForeground": "#fff",
		"list.inactiveSelectionBackground": "#000",
		"list.inactiveSelectionForeground": "#AB47BC",
		"list.warningForeground": "#db6454",
		"tab.activeBackground": "#333",
		"tab.activeForeground": "#fff",
		"tab.inactiveForeground": "#ccc",
		"tab.activeBorder": "#AB47BC",
		"tab.hoverBackground": "#db6454",
		"terminal.background": "#333",
		"editor.selectionBackground": "#444859",
		"editor.background": "#222",
		"editorWidget.resizeBorder": "#AB47BC",
		"editorWidget.border": "#AB47BC",
		"editorSuggestWidget.highlightForeground": "#AB47BC",
		"foreground": "#f1f0eb",
		"focusBorder": "#a6ff00",
		"scrollbarSlider.background": "#414a4c",
		"scrollbarSlider.hoverBackground": "#ffba00",
		"activityBarBadge.background": "#AB47BC",
		"scrollbarSlider.activeBackground": "#AB47BC50",
		"textLink.foreground": "#AB47BC",
		"progressBar.background": "#AB47BC",
		"pickerGroup.foreground": "#AB47BC",
		"notificationLink.foreground": "#AB47BC",
		"settings.modifiedItemIndicator": "#AB47BC",
		"settings.headerForeground": "#AB47BC",
		"panelTitle.activeBorder": "#AB47BC",
		"breadcrumb.activeSelectionForeground": "#AB47BC",
		"menu.selectionForeground": "#AB47BC",
		"menubar.selectionForeground": "#AB47BC",
		"list.highlightForeground": "#AB47BC"
	},

	// format设置
	"javascript.format.insertSpaceBeforeFunctionParenthesis": false,
	"prettier.singleQuote": true,
	"prettier.semi": false,
	"prettier.useTabs": true,

	// 这里主要是设置emmet对于vue的支持
	"emmet.syntaxProfiles": {
		"vue": "html",
		"vue-html": "html"
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
	"search.followSymlinks": false,
	"minapp-vscode.disableAutoConfig": true,
	"gitlens.mode.active": "zen",
	"html.format.extraLiners": " ",
	"materialTheme.autoApplyIcons": false,
	"window.zoomLevel": -1,
	"javascript.updateImportsOnFileMove.enabled": "always",
	"workbench.colorTheme": "Dracula Soft",
	"extensions.autoUpdate": false,
	"materialTheme.accent": "Purple",
	"vsicons.dontShowNewVersionMessage": true,
	"window.titleBarStyle": "native",
  "workbench.activityBar.visible": true
}
