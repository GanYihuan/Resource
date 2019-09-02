<!--
 * @Description:
 * @Author: GanEhank
 * @Date: 2018-07-21 23:07:22
 * @LastEditors: GanEhank
 * @LastEditTime: 2019-09-02 21:50:04
 -->

# vscode 保存代码，自动按照 eslint 规范格式化代码设置

- [ESLint官网](https://eslint.org/docs/user-guide/configuring)

## 安装插件

cnpm i eslint eslint-friendly-formatter eslint-loader eslint-plugin-html eslint-plugin-vue -D

"eslint": "^4.19.1",
"eslint-friendly-formatter": "^4.0.1",
"eslint-loader": "^2.0.0",
"eslint-plugin-html": "^4.0.3",

## .editorconfig

```txt
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```

## 根目录里面添加 .prettierrc 文件

```json
{
  "eslintIntegration": true,
  "stylelintIntegration": true,
  "tabWidth": 2,
  "singleQuote": true,
  "semi": false
}
```

## vscode 中添加 eslint 和 vetur 插件

eslint --init 命令在用户目录中生成一个配置文件

## vscode setting.json

/* eslint-disable vue/no-side-effects-in-computed-properties */

```json
{
  "editor.tabSize": 2,
  "files.associations": {
      "*.vue": "vue"
  },
  "eslint.autoFixOnSave": true,
  "eslint.options": {
      "extensions": [
          ".js",
          ".vue"
      ]
  },
  "eslint.validate": [
      "javascript",{
          "language": "vue",
          "autoFix": true
      },"html",
      "vue"
  ],
  "search.exclude": {
      "**/node_modules": true,
      "**/bower_components": true,
      "**/dist": true
  },
  "emmet.syntaxProfiles": {
      "javascript": "jsx",
      "vue": "html",
      "vue-html": "html"
  },
  "git.confirmSync": false,
  "window.zoomLevel": 0,
  "editor.renderWhitespace": "boundary",
  "editor.cursorBlinking": "smooth",
  "editor.minimap.enabled": true,
  "editor.minimap.renderCharacters": false,
  "window.title": "${dirty}${activeEditorMedium}${separator}${rootName}",
  "editor.codeLens": true,
  "editor.snippetSuggestions": "top",
  "editor.fontFamily": "'Droid Sans Mono', 'Courier New', monospace, 'Droid Sans Fallback'",
}
```

## eslint 规则

- [vue 团队](https://github.com/vuejs/eslint-config-vue)
- [饿了么团队](https://www.npmjs.com/package/eslint-config-elemefe)
