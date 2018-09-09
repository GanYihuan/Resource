# webpack

## plugins 介绍

- babel-core: babel 编译库的核心包
- babel-loader: 帮你来使用 babel
- babel-preset: 规范的总结, 指定浏览器环境(应用开发需要), env 包含所有规范, es2015, es2016, es2017
- babel-preset-env: 代码编译成什么样子, 可以根据配置的目标浏览器或者运行环境来自动将 ES2015+ 的代码转换为 es5, .babelrc 文件配置特定的目标浏览器
- babel-polyfill: 全局垫片污染全局, 能写 es7/8 新方法, 对编译的代码中新的 API 进行处理, 适合在业务项目(开发应用)使用, 在 main.js 中引用 `import babel-polyfill`
- babel-runtime-transform: 局部垫片不会污染全局, 能写 es7/8 新方法, 对编译的代码中新的 API 进行处理, 适合在组件类库项目中使用, 在 .babelrc 文件中配置

```console
npm install babel-loader@8.0.0-beta.0 @babel/core
<!-- 选上 -->
npm i babel-loader babel-core -D

npm i @babel/preset-env -D
<!-- 选上 -->
npm i babel-preset-env -D

<!-- import 'babel-polyfill' -->
npm i babel-polyfill -S

npm i @babel/plugin-transform-runtime -D
<!-- 选上 -->
npm i babel-plugin-transform-runtime -D

npm i @babel/runtime -S
<!-- 选上 -->
npm i babel-runtime -S
```

## webpack 基础配置

```js
var path = require('path')
output: {
  /* 输出到指定目录下 */
  path: path.resolve(__dirname, './dist'),
  /* 引入资源路径 */
  publicPath: './dist/'
}
```

## 代码分割和懒加载 require.ensure require.include

```js
/* 引入模块, 但不执行, 提前加载第三方模块, 减少加载次数 */
require.include('./moduleA.js')
/*
动态加载模块, 懒加载
把没有使用过的 require 资源进行独立分成一个js文件
['./subPageA.js']: dependencies(不执行代码)
callback(执行代码)
errorCallback(可省略)
chunkName
*/
require.ensure(
  ['./subPageA.js'],
  function() {
    /* callback(执行代码) */
    let subPageA = require('./subPageA')
  },
  'subPageA'
)
```

## 处理 CSS

- style-loader: 在最后生成的 js 文件中进行处理，动态创建 style 标签，塞到 head 标签里
- css-loader: 打包时把 css 文件拆出来，css 相关模块最终打包到一个指定的 css 文件中，手动用 link 标签去引入这个 css 文件

```console
npm i style-loader css-loader file-loader -D
npm i less-loader less -D
npm i sass-loader console-sass -D
```

```js
module: {
  rules: [
    {
      test: /\.scss$/,
      /* 从后往前处理 */
      use: [
        {
          /* 在最后生成的 js 文件中进行处理，动态创建 style 标签，塞到 head 标签里 */
          loader: 'style-loader',
          /* 小众功能: style-loader 使其插入 link 标签, 不能处理多个样式 */
          // loader: 'style-loader/url',
          /* app.js 额外增加 use(), unuse() 方法, 控制样式是否插入页面中 */
          // loader: 'style-loader/useable'
          options: {
            /* insertAt(插入位置) */
            /* insertInto(插入到 dom) */
            /* insertInto: '#app', */
            /* singleton (是否只使用一个 style 标签) */
            singleton: true,
            /* transform 在 style-loader 塞 style 标签时执行, css 加载前提前判断浏览器 */
            transform: './css.transform.js'
          }
        },
        {
          /* 打包时把css文件拆出来，css相关模块最终打包到一个指定的css文件中，我们手动用link标签去引入这个css文件就可以了 */
          loader: 'css-loader',
          /* 小众功能: style-loader 使其插入 link 标签, 不能处理多个样式 */
          // loader: 'file-loader'
          options: {
            /* 解析的别名 */
            // alias
            /* @import */
            // importLoader
            /* 是否压缩 */
            minimize: true,
            /* 启用 css-modules */
            modules: true,
            /* 定义编译出来的名称 */
            localIdentName: '[path][name]_[local]_[hash:base64:5]'
          }
        },
        {
          /* 放置 css-loader 下面 */
          loader: 'sass-loader'
        },
        {
          /* 放置 css-loader 下面 */
          loader: 'less-loader'
        }
      ]
    }
  ]
}
```

```js
/* webpack.config.js */
/* loader: 'style-loader/useable' */
/* 是否使用 style-loader */
base.use()
base.unuse()
var flag = false
setInterval(function() {
  if (flag) {
    base.unuse()
    flag = false
  } else {
    base.use()
  }
  flag = !flag
}, 1000)
```

```css
/* 引入不同文件下的样式 */
.box {
  composes: bigBox from './common.css';
}
```

## 提取 CSS

```console
npm install extract-text-webpack-plugin webpack -D
npm i extract-text-webpack-plugin@next -D
```

```js
module: {
  rules: [
    {
      test: /\.scss$/,
      /* 提取 css */
      use: ExtractTextWebpackPlugin.extract({
        /* 提取出来的文件用什么处理 */
        fallback: {
          /* 在引入css时，在最后生成的js文件中进行处理，动态创建style标签，塞到head标签里 */
          loader: 'style-loader',
          options: {
            /* singleton(是否只使用一个 style 标签) */
            singleton: true,
            /* transform(转化, 浏览下, 插入页面前, 根据不同浏览器配置不同样式) */
            transform: './css.transform.js'
          }
        },
        use: [
          {
            /* 打包时把css文件拆出来，css相关模块最终打包到一个指定的css文件中，我们手动用link标签去引入这个css文件就可以了 */
            loader: 'css-loader',
            options: {
              /* 是否压缩 */
              minimize: true,
              /* 启用 css-modules */
              modules: true,
              /* 定义编译出来的名称 */
              localIdentName: '[path][name]_[local]_[hash:base64:5]'
            }
          },
          {
            /* 放置 css-loader 下面 */
            loader: 'sass-loader'
          }
        ]
      })
    }
  ]
},
plugins: [
  /* 提取 css */
  new ExtractTextWebpackPlugin({
    /* 提取出来的 css 文件名字 */
    filename: '[name].min.css',
    /* 指定提取 css 范围, 提取初始化 */
    allChunks: false
  })
]
```

## PostCSS

- postcss(js 转换 css, 打包时期)
- autoprefixer(css 前缀)
- cssnano(帮助压缩, css-loader 借助了 cssnano 的功能)
- postcss-cssnext(使用未来的 css 语法)

```console
npm i postcss postcss-loader autoprefixer cssnano postcss-cssnex -D
```

## Tree-shaking

```js
/* 检查打包后的 css 文件 */
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
/* 对 js 文件进行压缩 */
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')
/* 去除多余的 css, 进行 CSS Tree Shaking 操作 */
var PurifyCss = require('purifycss-webpack')
/* glob-all 的作用就是帮助 PurifyCSS 进行路径处理，定位要做 Tree Shaking 的路径文件 */
var glob = require('glob-all')

plugins: [
  /* 提取 css, 检查打包后的 css 文件 */
  new ExtractTextWebpackPlugin({
    filename: '[name].min.css',
    /* 指定提取 css 范围, 提取初始化 */
    allChunks: false
  }),
  /* 放 ExtractTextWebpackPlugin 后面 */
  /* 去除多余的 css, 进行 CSS Tree Shaking 操作 */
  new PurifyCss({
    /* glob-all 的作用就是帮助 PurifyCSS 进行路径处理，定位要做 Tree Shaking 的路径文件 */
    paths: glob.sync([
      path.join(__dirname, './*.html'),
      path.join(__dirname, './src/*.js')
    ])
  }),
  /* 对 js 文件进行压缩 */
  new UglifyJsPlugin()
]
```
