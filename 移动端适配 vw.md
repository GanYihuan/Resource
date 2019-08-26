<!--
 * @Description:
 * @version:
 * @Author: GanEhank
 * @Date: 2019-08-25 22:46:28
 * @LastEditors: GanEhank
 * @LastEditTime: 2019-08-25 23:39:37
 -->
# vuecli3vw

# 总体思路
- 你可以参考此文档完成`vw`布局适配移动端,适用于`vuecli3.x`搭建的项目
- 此文档是带领你完成一项具体任务,而不是教你如何编程
## 1. 使用`vuecli3.x`搭建项目
## 2. 在项目根目录的`.postcssrc.js`文件中增加配置项
## 3. 使用`npm`下载相关包
## 4. 在`index.html`引入js插件并使用该插件
## 5. 在`App.vue`组件中尝试使用vw布局
## 6. 运行项目,验证是否成功
# 操作流程
### 1. 使用`vuecli3.x`创建项目
```
vue create vuecli3vw
```
- 具体操作步骤参考一下gif图片,此项目勾选了 vue-router, vuex, babel
![image](./public/vueclivw.gif)
```
需要注意的是: 询问配置 PostCSS 时需要选择的是 `In dedicated config files` 在专用配置文件中
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? (Use arrow keys)
> In dedicated config files
  In package.json
```


### 2. 在项目根目录的`.postcssrc.js`文件中增加配置项
- `.postcssrc.js`全部内容
```
//https://github.com/michael-ciniawsky/postcss-load-config

// module.exports = {
//      plugins: {
//          autoprefixer: {}
//      }
// }

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



### 3. 使用`npm`下载相关包
```
npm i cssnano postcss-aspect-ratio-mini postcss-cssnext postcss-px-to-viewport postcss-viewport-units postcss-write-svg -S

npm i cssnano-preset-advanced -D

npm i postcss-import postcss-url autoprefixer -D
```
### 4. 在`index.html`引入js插件并使用该插件
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title>vuecli3vw</title>
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
### 5. 在`App.vue`组件中尝试使用vw布局

```
<template>
  <div id="app">
    <div class='box'>
      使用 vw 布局
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
html,body{
  margin: 0;
  padding: 0;
}
.box{
  width: 750px;
  height: 1000px;
  background-color: #ccc;
  color: darkred;
  font-size: 40px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

```
### 6. 运行项目,验证是否成功
```
npm run serve
```
- 查看`.box`的`css  px`是否成功转为`vw`
- 如果成功转为`vw`,恭喜你成功啦!



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
