<!--
 * @Description:
 * @version:
 * @Author: GanEhank
 * @Date: 2019-08-25 22:46:28
 * @LastEditors: GanEhank
 * @LastEditTime: 2019-09-02 21:53:37
 -->

# vuecli3vw

## 基础

vw : 1vw 等于视口宽度的1%
vh : 1vh 等于视口高度的1%
vmin : 选取 vw 和 vh 中最小的那个
vmax : 选取 vw 和 vh 中最大的那个
![vw](https://i.loli.net/2019/09/02/H2i7krnuTEZSJ3R.png)

### 一: 设置 html & css

```html
<meta name="viewport" content="width=device-width, initial-scale=2.0, maximum-scale=2.0, minimum-scale=2.0, user-scalable=no">
```

```css
html {
  font-size: 13.3333333333333vw // 100px
}
```

### 二: 在项目根目录的`.postcss.config.js`文件中增加配置项

- `.postcss.config.js`全部内容

[a](https://github.com/michael-ciniawsky/postcss-load-config)

```node
module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {},
      "postcss-write-svg": {
        utf8: false
      },
      "postcss-cssnext": {},
      "postcss-px-to-viewport": {
        viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
        viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
        unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
        viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
        selectorBlackList: ['.ignore', '.hairlines', 'van'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
        minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
        mediaQuery: false // 允许在媒体查询中转换`px`
      },
      "postcss-viewport-units":{},
      "cssnano": {
        preset: "advanced",
        autoprefixer: false,
        "postcss-zindex": false
      },
  }
}
```

### 三: 使用`npm`下载相关包

```node
npm i cssnano postcss-aspect-ratio-mini postcss-cssnext postcss-px-to-viewport postcss-viewport-units postcss-write-svg -S
npm i cssnano-preset-advanced -D
npm i postcss-import postcss-url autoprefixer -D
```

### 四. 在`index.html`引入js插件并使用该插件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title>vue-vant-mall</title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but vuecli3vw doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
    <script src="//g.alicdn.com/fdilab/lib3rd/viewport-units-buggyfill/0.6.2/??viewport-units-buggyfill.hacks.min.js,viewport-units-buggyfill.min.js"></script>
    <script>
      window.onload = function () {
        window.viewportUnitsBuggyfill.init({
          hacks: window.viewportUnitsBuggyfillHacks
        });
        // var winDPI = window.devicePixelRatio;
        // var uAgent = window.navigator.userAgent;
        // var screenHeight = window.screen.height;
        // var screenWidth = window.screen.width;
        // var winWidth = window.innerWidth;
        // var winHeight = window.innerHeight;
        // alert(
        // "Windows DPI:" + winDPI +
        // ";\ruAgent:" + uAgent +
        // ";\rScreen Width:" + screenWidth +
        // ";\rScreen Height:" + screenHeight +
        // ";\rWindow Width:" + winWidth +
        // ";\rWindow Height:" + winHeight
        // )
      }
    </script>
  </body>
</html>
```

### 五. 在`App.vue`组件中尝试使用vw布局

```js
<template>
  <div id="app">
    <div class='box'>
      使用 vw 布局
    </div>
  </div>
</template>

<style>
.box{
  width: 750px;
  height: 1000px;
  background-color: #ccc;
  color: darkred;
  font-size: 40px;
}
</style>
```

### 六. 运行项目,验证是否成功

```node
npm run serve
```

- 查看`.box`的`css  px`是否成功转为`vw`
- 如果成功转为`vw`,恭喜你成功啦!
