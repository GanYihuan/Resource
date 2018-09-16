# webpack

## webpack 核心概念

- entry: 某段代码入口, 打包入口
- output: 输出
- loaders: 文件转化为模块
- plugins: 参与打包过程
- chunk: 代码块
- bundle: 打包生成的文件
- module: 模块

## 使用 webpack

```console
webpack -h
webpack -v
webpack <entry> <output>
```

> webpack-cli: 交互式初始化项目, 迁移 v1->v2

```console
npm install webpack-cli -g
webpack-cli -h
webpack-cli init webpack-addons-demo
```

> 打包 JS

```console
webpack
<!-- 自定义 webpack 打包 -->
webpack --config webpack-config.js
```

## 编译 ES6

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

## 编译 typescript

- js 超集
- lodash: 封装了诸多对字符串、数组、对象等常见数据类型的处理函数

```console
npm i webpack typescript ts-loader awesome-typescript-loader -D

<!-- 说明文件, 编译出问题能抛出问题 -->
npm i @types/lodash -S
<!-- 选上 -->
npm i loadash -S

<!-- 类型文件管理 -->
npm i typings -g
typings i lodash -S
```

## 打包公共代码

- 分割 Chunk, 减少代码冗余, 加快速度
- lodash: 封装了诸多对字符串、数组、对象等常见数据类型的处理函数
- webpack4 删除了 webpack.optimize.CommonsChunkPlugin

```console
npm i webpack -D
npm i lodash -S
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

- require.ensure: 动态加载模块, callback 才执行
- require.include: 引入模块(提取引入公共模块))

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

## PostCSS

- postcss(js 转换 css, 打包时期)
- autoprefixer(css 前缀)
- cssnano(帮助压缩, css-loader 借助了 cssnano 的功能)
- postcss-cssnext(使用未来的 css 语法)

```console
npm i postcss postcss-loader autoprefixer cssnano postcss-cssnex -D
```

```console
npm i postcss postcss-loader autoprefixer cssnano postcss-cssnext -D

npm install babel-loader@8.0.0-beta.0 @babel/core
<!-- 选上 -->
npm i babel-loader babel-core -D

npm i @babel/preset-env -D
<!-- 选上 -->
npm i babel-preset-env -D
```

## Tree-shaking

- Tree-shaking(没使用到的代码删除掉)
- [webpack.optimize.UglifyJsPlugin 版本没有跟上 webpack4 导致问题](https://github.com/webpack-contrib/uglifyjs-webpack-plugin)
- glob-all 的作用就是帮助 PurifyCSS 进行路径处理，定位要做 Tree Shaking 的路径文件

```console
<!-- 第三方引用 -->
npm i lodash-es -S
<!-- babel -->
npm i babel-loader babel-core babel-preset-env babel-plugin-lodash -D
<!-- 对 js 文件进行压缩 -->
npm i uglifyjs-webpack-plugin -D
<!-- glob-all 的作用就是帮助 PurifyCSS 进行路径处理，定位要做 Tree Shaking 的路径文件。 -->
npm i glob-all -D
npm i purifycss-webpack -D

<!-- .babelrc 参考 3-3 -->
npm install babel-loader@8.0.0-beta.0 @babel/core
<!-- 选上 -->
npm i babel-loader babel-core -D

npm i @babel/preset-env -D
<!-- 选上 -->
npm i babel-preset-env -D
```

```js
/* 放 ExtractTextWebpackPlugin 后面 */
/* 去除多余的 css */
new PurifyCss(
  {
    paths: glob.sync(
      [
        path.join(__dirname, './*.html'),
        path.join(__dirname, './src/*.js')
      ]
    )
  }
),
/* 对 js 文件进行压缩 */
new UglifyJsPlugin()
```

## 4-1, 4-2, 4-3 文件处理（2）- 图片处理 - 压缩图片、自动合成雪碧图 Base64 编码 sprite、retina 处理 处理字体文件

```console
npm i file-loader url-loader img-loader postcss-sprites -D
```

- 1@2x.png retina 屏幕上用的图片
- 样式表 1px = retina 2px

## 处理第三方 JS 库

```console
npm i jquery -S
npm i imports-loader -D
```

```js
<!-- install jquery 后, 可以不用引入 jquery -->
plugins: [
  /* 第三方 js 库 */
  new webpack.ProvidePlugin({
    $: 'jquery'
  })
]
```

```js
<!-- 找到本地 jquery, src/libs/jquery.js -->
resolve: {
  alias: {
    jquery$: path.resolve(__dirname, 'src/libs/jquery.min.js')
  }
},
```

```js
<!-- 第三方 js 库 -->
{
  test: path.resolve(__dirname, 'src/app.js'),
  use: [{
    loader: 'imports-loader',
    options: {
      $: 'jquery'
    }
  }]
}
```

## 自动生成 HTML, js, css 自动插入 html

```console
npm i html-webpack-plugin -S
```

```js
var HtmlWebpackPlugin = require('html-webpack-plugin')
/* 生成 HTML */
new HtmlWebpackPlugin(
  {
    /* 输出位置文件 */
    filename: 'index.html',
    /* 模板文件 */
    template: './index.html',
    /* css, js 通过标签形式插入页面中 */
    // inject: false,
    /* 指定有哪些要加入到页面来 */
    chunks: ['app'],
    /* 压缩 */
    minify: {
      collapseWhitespace: true
    }
  }
)
```

## HTML 中引入图片

```console
npm i html-loader -S
```

```js
{
  test: /\.html$/,
  use: [{
    /* 将 HMTL 模板文件当做一个 string 输出 */
    loader: 'html-loader',
    options: {
      attrs: ['img:src', 'img:data-src']
    }
  }]
}
```

## 配合优化

- 提前载入 webpack 加载代码

```console
<!-- webpack 生成的文件插入到 html 中, 潜在 bug -->
npm i inline-mainifest-webpack-plugin -D
<!-- 选择各种 chunk 插入 html 中 -->
npm i html-webpack-inline-chunk-plugin -D
```

```js
plugins: [
  /*
  它内联您使用HtmlWebpackPlugin编写为链接或脚本的块。
  它可用于在脚本标记内嵌入清单以保存http请求，如本示例中所述。 
  它不仅限于清单块，而是可以内联任何其他块。
  */
  new HtmlInlinkChunkPlugin({
    inlineChunks: ['manifest']
  })
]
```
