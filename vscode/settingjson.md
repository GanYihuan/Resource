{
  "terminal.integrated.fontFamily": "Roboto Mono Medium for PowerLine",
  // "terminal.integrated.fontFamily": "Hack",
  "terminal.integrated.fontSize": 14,
  "terminal.integrated.lineHeight": 1,
  "terminal.integrated.cursorStyle": "line",
  "terminal.integrated.cursorBlinking": true,
  "explorer.confirmDelete": false,
  // 关闭代码提示
  // "editor.quickSuggestions": false,
  // "editor.wordBasedSuggestions": false,
  // "editor.snippetSuggestions": "none",
  "editor.fontFamily": "Fira Code, Menlo, Monaco, 'Courier New', monospace",
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.detectIndentation": false,
  // 控制是否显示 minimap
  "editor.minimap.enabled": false,
  // 以像素为单位控制字号。
  "editor.fontSize": 12,
  "editor.lineHeight": 20,
  // the last line of your file will be at the bottom of the editor pane when you scroll down to the maximum.
  "editor.scrollBeyondLastLine": false,
  // 控制光标样式，接受的值为 "block"、"block-outline"、"line"、"line-thin" 、"underline" 和 "underline-thin"
  "editor.cursorStyle": "line",
  // 控制光标动画样式，可能的值为 "blink"、"smooth"、"phase"、"expand" 和 "solid"
  "editor.cursorBlinking": "blink",
  // 控制换行方式。可以选择:
  // - "off" (禁用换行)，
  // - "on" (视区换行)，
  // - "wordWrapColumn" (在 "editor.wordWrapColumn" 处换行)或
  // - "bounded" (在最小视区和 "editor.wordWrapColumn" 处换行)。
  "editor.wordWrap": "off",
  // 保存时取消自动格式化 12067c
  "editor.formatOnSave": false,
  // 在 "editor.wordWrap" 为 "wordWrapColumn" 或 "bounded" 时控制编辑器列的换行。
  // "editor.wordWrapColumn": 80,
  "editor.autoSurround": "quotes",
  "window.zoomLevel": -2,
  "window.titleBarStyle": "native",
  // 控制是否应在新窗口中打开文件。
  // - default: 文件将在该文件的文件夹打开的窗口中打开，或在上一个活动窗口中打开，除非该文件通过平台或从查找程序(仅限 macOS)打开
  // - on: 文件将在新窗口中打开
  // - off: 文件将在该文件的文件夹打开的窗口中打开，或在上一个活动窗口中打开
  // 注意，可能仍会存在忽略此设置的情况(例如当使用 -new-window 或 -reuse-window 命令行选项时)。
  "window.openFilesInNewWindow": "off",
  // 控制边栏的位置。它可显示在工作台的左侧或右侧。
  "workbench.sideBar.location": "left",
  "workbench.statusBar.visible": false,
  // 指定在工作台中使用的图标主题
  "workbench.iconTheme": "vscode-icons",
  "workbench.activityBar.visible": true,
  "workbench.colorTheme": "Monokai Pro (Filter Spectrum)",
  // 默认行尾字符。
  "workbench.colorCustomizations": {
    // "editorCursor.foreground": "#4677c8",
    "editorGutter.deletedBackground": "#f00",
    "editorGutter.modifiedBackground": "#f2995f",
    "editorGutter.addedBackground": "#91d08f",
    "gitDecoration.addedResourceForeground": "#91d08f",
    "gitDecoration.modifiedResourceForeground": "#f2995f",
    "gitDecoration.deletedResourceForeground": "#f00",
    "sideBar.background": "#333",
    "input.foreground": "#33e90a",
    "sideBar.foreground": "#8a898f",
    // "input.background": "#fffafa",
    "list.hoverBackground": "#656b7b",
    "list.focusBackground": "#000",
    "list.activeSelectionBackground": "#000",
    "list.inactiveSelectionBackground": "#000",
    "list.warningForeground": "#656b7b",
    "tab.activeBackground": "#666",
    "tab.activeForeground": "#fff",
    "tab.inactiveForeground": "#ccc",
    "tab.hoverBackground": "#333",
    "editor.selectionBackground": "#9a97993b",
    "editor.background": "#222",
    "editor.selectionHighlightBorder": "#fff",
    "terminal.background": "#333",
    "foreground": "#f1f0eb",
    "focusBorder": "#a6ff00",
    "scrollbarSlider.hoverBackground": "#AB47BC50",
    "scrollbarSlider.activeBackground": "#AB47BC50",
    "activityBarBadge.background": "#AB47BC",
    "list.activeSelectionForeground": "#AB47BC",
    "list.inactiveSelectionForeground": "#AB47BC",
    "list.highlightForeground": "#AB47BC",
    "editorSuggestWidget.highlightForeground": "#AB47BC",
    "textLink.foreground": "#AB47BC",
    "progressBar.background": "#AB47BC",
    "pickerGroup.foreground": "#AB47BC",
    "tab.activeBorder": "#AB47BC",
    "notificationLink.foreground": "#AB47BC",
    "editorWidget.resizeBorder": "#AB47BC",
    "editorWidget.border": "#AB47BC",
    "settings.modifiedItemIndicator": "#AB47BC",
    "settings.headerForeground": "#AB47BC",
    "panelTitle.activeBorder": "#AB47BC",
    "breadcrumb.activeSelectionForeground": "#AB47BC",
    "menu.selectionForeground": "#AB47BC",
    "menubar.selectionForeground": "#AB47BC"
  },
  // 这里主要是设置 emmet 对于 vue 的支持
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
  // "gitlens.historyExplorer.enabled": true,
  // 窗口失去焦点自动保存
  "files.autoSave": "afterDelay",
  // 读取和编写文件时将使用的默认字符集编码。
  "files.encoding": "utf8bom",
  // 在这里主要做了对 vue 语言的支持
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
  // 解决卡顿
  "search.followSymlinks": false,
  "minapp-vscode.disableAutoConfig": true,
  "html.format.extraLiners": "",
  // Error warning message: "Experimental support for decorators is a feature that is subject to change in a future release"
  // "javascript.implicitProjectConfig.experimentalDecorators": true,
  // "javascript.updateImportsOnFileMove.enabled": "always",
  // "javascript.format.insertSpaceBeforeFunctionParenthesis": false,
  "extensions.autoUpdate": false,
  "vsicons.dontShowNewVersionMessage": true,
  // 插件
  "materialTheme.autoApplyIcons": false,
  "gitlens.mode.active": "zen",
  "fileheader.customMade": {
    "Description": "",
    "version": "",
    "Author": "GanEhank",
    "Date": "Do not edit",
    "LastEditors": "GanEhank",
    "LastEditTime": "Do not edit"
  },
  "fileheader.cursorMode": {
    "param": "",
    "return": ""
  },
  "materialTheme.accent": "Purple",
  "gitlens.views.fileHistory.enabled": true,
  "gitlens.views.lineHistory.enabled": true,
  /* 根据 ESLint的配置 来格式代码 */
  "prettier.eslintIntegration": true,
  "eslint.autoFixOnSave": true,
  "eslint.options": {
    "extensions": [".js", ".vue"]
  },
  "eslint.validate": [
    "javascript",
    {
      "language": "vue",
      "autoFix": true
    },
    "html",
    "vue"
  ],
  "git.confirmSync": false,
  // "window.zoomLevel": 0,
  "editor.renderWhitespace": "boundary",
  // "editor.cursorBlinking": "smooth",
  // "editor.minimap.enabled": true,
  "editor.minimap.renderCharacters": false,
  // "editor.fontFamily": "'Droid Sans Mono', 'Courier New', monospace, 'Droid Sans Fallback'",
  "window.title": "${dirty}${activeEditorMedium}${separator}${rootName}",
  "editor.codeLens": true,
  "editor.snippetSuggestions": "top",
  "breadcrumbs.enabled": true,
  // "color-highlight.markerType": "dot-before"
}
