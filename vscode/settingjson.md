{
  "terminal.integrated.fontFamily": "Roboto Mono Medium for PowerLine",
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
  "editor.minimap.enabled": false,
  "editor.fontSize": 12,
  "editor.lineHeight": 20,
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
  // "editor.wordWrapColumn": 120,
  // 保存时取消自动格式化
  "editor.formatOnSave": false,
  "editor.autoSurround": "quotes",
  "editor.cursorWidth": 2,
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
  "workbench.activityBar.visible": true,
  // 默认行尾字符。
  "workbench.colorCustomizations": {
    // "panel.background": "#f00",
    // "statusBar.background": "#f00",
    "activityBar.background": "#2c2c2c",
    "activityBar.inactiveForeground": "#514f53",
    "activityBar.foreground": "#fff",
    "activityBarBadge.background": "#b52e31",
    "activityBarBadge.foreground": "#fff",
    "sideBar.background": "#1f1f1f",
    "sideBar.foreground": "#8a898f",
    // "sideBarTitle.foreground": "#f00",
    // "sideBarSectionHeader.background": "#ff0",
    // "sideBarSectionHeader.foreground": "#00f",
    "editorGutter.deletedBackground": "#f00",
    "editorGutter.modifiedBackground": "#f2995f",
    "editorGutter.addedBackground": "#91d08f",
    "gitDecoration.addedResourceForeground": "#91d08f",
    "gitDecoration.modifiedResourceForeground": "#f2995f",
    "gitDecoration.deletedResourceForeground": "#f00",
    "input.foreground": "#33e90a",
    "list.hoverBackground": "#656b7b",
    "list.focusBackground": "#000",
    "list.activeSelectionBackground": "#000",
    // "list.activeSelectionForeground": "#f00",
    "list.inactiveSelectionBackground": "#000",
    "list.warningForeground": "#656b7b",
    "tab.activeBackground": "#666",
    "tab.activeForeground": "#fff",
    "tab.inactiveForeground": "#ccc",
    "tab.hoverBackground": "#333",
    "editor.selectionBackground": "#231fa8",
    "editor.selectionHighlightBorder": "#fff",
    "editorCursor.background": "#00f",
    "editorCursor.foreground": "#ff0",
    "editor.background": "#0f111b",
    "terminal.background": "#333",
    "foreground": "#f1f0eb",
    "focusBorder": "#a6ff00",
    "scrollbarSlider.background": "#8c8c8c31",
    "scrollbarSlider.hoverBackground": "#AB47BC50",
    "scrollbarSlider.activeBackground": "#AB47BC50",
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
  // "html.format.extraLiners": "",
  // Error warning message: "Experimental support for decorators is a feature that is subject to change in a future release"
  // "javascript.implicitProjectConfig.experimentalDecorators": true,
  // "javascript.updateImportsOnFileMove.enabled": "always",
  // "javascript.format.insertSpaceBeforeFunctionParenthesis": false,
  "extensions.autoUpdate": true,
  // 插件
  // "materialTheme.autoApplyIcons": false,
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
    "description": "",
    "param": "",
    "return": ""
  },
  // fileheader.customMade	头部注释,默认设置：{'Author':'your name','Date':'Do not edit','LastEditors':'your name','LastEditTime':'Do not edit','Description':'file content'}	[object Object]
  // fileheader.cursorMode	在光标处插入函数注释,默认配置:{'description':'','param':'','return':''}
  "gitlens.views.fileHistory.enabled": true,
  "gitlens.views.lineHistory.enabled": true,
  "prettier.singleQuote": true,
  "prettier.semi": false,
  /* 根据 ESLint的配置 来格式代码 */
  // "prettier.eslintIntegration": true,
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
    "vue",
    "javascriptreact"
  ],
  "git.confirmSync": false,
  "editor.renderWhitespace": "boundary",
  "editor.minimap.renderCharacters": false,
  "window.title": "${dirty}${activeEditorMedium}${separator}${rootName}",
  "editor.codeLens": true,
  "editor.snippetSuggestions": "top",
  "breadcrumbs.enabled": true,
  // 配置
  "git.ignoreMissingGitWarning": true,
  "workbench.startupEditor": "newUntitledFile",
  "javascript.validate.enable": false,
  "files.exclude": {
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    "**/node_modules": true
  },
  "workbench.colorTheme": "Monokai Pro (Filter Spectrum)",
  "materialTheme.accent": "Purple",
  "peacock.favoriteColors": [
    {
      "name": "Angular Red",
      "value": "#b52e31"
    },
    {
      "name": "Auth0 Orange",
      "value": "#eb5424"
    },
    {
      "name": "Azure Blue",
      "value": "#007fff"
    },
    {
      "name": "C# Purple",
      "value": "#68217A"
    },
    {
      "name": "Gatsby Purple",
      "value": "#639"
    },
    {
      "name": "Java Blue-Gray",
      "value": "#557c9b"
    },
    {
      "name": "JavaScript Yellow",
      "value": "#f9e64f"
    },
    {
      "name": "Mandalorian Blue",
      "value": "#1857a4"
    },
    {
      "name": "Node Green",
      "value": "#215732"
    },
    {
      "name": "React Blue",
      "value": "#00b3e6"
    },
    {
      "name": "Something Different",
      "value": "#832561"
    },
    {
      "name": "Vue Green",
      "value": "#42b883"
    }
  ],
  // 基于编辑器设置的颜色主题，自定义语法着色
  "editor.tokenColorCustomizations": {
    "[Monokai Pro (Filter Spectrum)]": {
      "comments": "#7e838b",
      "textMateRules": [
        {
          "scope": "variable.language.this.js",
          "settings": {
              "foreground": "#ed5d89"
          }
        }
      ]
    },
    "[One Monokai]": {
      "comments": "#7e838b",
      "keywords": "#cf5cd9",
      "variables": "#e5c076",
      "strings": "#78bb6e",
      "functions": "#4eace8",
      "numbers": "#78bb6e",
      // "types": "#f00",
      "textMateRules": [
        {
          "scope": "keyword.operator.new.js",
          "settings": {
              "foreground": "#e06a62"
          }
        },
        {
          "scope": "storage.type.function.js",
          "settings": {
              "foreground": "#e06a62"
          }
        },
        {
          "scope": "keyword.control.flow.js",
          "settings": {
              "foreground": "#e06a62"
          }
        },
        {
          "scope": "storage.type.js",
          "settings": {
              "foreground": "#e06a62"
          }
        },
        {
          "scope": "constant.language.boolean.true.js",
          "settings": {
              "foreground": "#78bb6e"
          }
        },
        {
          "scope": "constant.language.boolean.false.js",
          "settings": {
              "foreground": "#78bb6e"
          }
        },
        {
          "scope": "constant.other.character-class.range.regexp",
          "settings": {
              "foreground": "#78bb6e"
          }
        },
        {
          "scope": "string.template.js",
          "settings": {
              "foreground": "#78bb6e"
          }
        },
        {
          "scope": "variable.parameter.js",
          "settings": {
              "foreground": "#AE81FF"
          }
        },
        {
          "scope": "variable.other.readwrite.js",
          "settings": {
              "foreground": "#AE81FF"
          }
        },
        {
          "scope": "variable.other.object.js",
          "settings": {
              "foreground": "#AE81FF"
          }
        },
        {
          "scope": "support.constant.json.js",
          "settings": {
              "foreground": "#e5c076"
          }
        },
        {
          "scope": "variable.other.property.js",
          "settings": {
              "foreground": "#e5c076"
          }
        },
        {
          "scope": "entity.name.function.js",
          "settings": {
              "foreground": "#4eace8"
          },
        },
        {
          "scope": "meta.object-literal.key.js",
          "settings": {
              "foreground": "#fff"
          }
        },
        {
          "scope": "entity.name.label.js",
          "settings": {
              "foreground": "#fff"
          }
        },
        {
          "scope": "support.type.object.module.js",
          "settings": {
              "foreground": "#4eace8"
          }
        },
        {
          "scope": "support.variable.object.node.js",
          "settings": {
              "foreground": "#e5c076"
          }
        },
        {
          "scope": "punctuation.separator.comma.js",
          "settings": {
              "foreground": "#7e838b"
          }
        },
        {
          "scope": "punctuation.separator.key-value.js",
          "settings": {
              "foreground": "#7e838b"
          }
        },
        {
          "scope": "punctuation.definition.string.end.js",
          "settings": {
              "foreground": "#7e838b"
          }
        },
        {
          "scope": "punctuation.definition.string.begin.js",
          "settings": {
              "foreground": "#7e838b"
          }
        },
        {
          "scope": "entity.other.attribute-name.html",
          "settings": {
              "foreground": "#e5c076"
          }
        },
        {
          "scope": "support.type.object.module.js",
          "settings": {
              "foreground": "#e5c076"
          }
        },
        {
          "scope": "entity.other.attribute-name.js",
          "settings": {
              "foreground": "#e5c076"
          }
        },
        {
          "scope": "entity.other.inherited-class.js",
          "settings": {
              "foreground": "#4eace8"
          }
        },
        {
          "scope": "variable.other.object.property.js",
          "settings": {
              "foreground": "#e5c076"
          }
        },
        {
          "scope": "constant.language.null.js",
          "settings": {
              "foreground": "#AE81FF"
          }
        },
        {
          "scope": "support.class.component.js",
          "settings": {
              "foreground": "#e06a62"
          }
        },
        {
          "scope": "support.class.console.js",
          "settings": {
              "foreground": "#e5c076"
          }
        },
        {
          "scope": "support.class.builtin.js",
          "settings": {
              "foreground": "#e5c076"
          }
        },
        {
          "scope": "variable.language.this.js",
          "settings": {
              "foreground": "#e06a62"
          }
        }
      ]
    }
  },
  "workbench.iconTheme": "vscode-icons"
}
