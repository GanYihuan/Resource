# imooc-sell

> 慕课网 Vue-高仿饿了么 APP

## basic

- `-S` = `--save`, `-D` = `--save-dev`, `i` = `install`, `cnpm` = `npm`
- vue-loader 合并了小图片; 搞定 css 兼容问题
- 设计稿两倍标的尺寸(iPhone6: dpi=2), style.css 里面写一半的数值
- Flex layout

## install plugin

> env config

```console
npm install vue-cli -g
vue list
vue init webpack imooc-sell
```

> command node>4 version

```console
npm i nvm
nvm ls
nvm install 8.9.1
nvm use 8.9.1
```

> vue-resource: ajax request

```console
npm i vue-resource better-scroll -S
npm i node-sass sass-loader -D
```

> better-scroll

```console
npm i better-scroll -D
```

## 图标字体制作

- [IconMoon](https://icomoon.io/#icons-icomoon)
- **common/fonts**
- **common/scss/icon.scss**

## mock 数据

- [seller data](http://localhost:8088/api/seller)
- [goods data](http://localhost:8088/api/goods)
- [ratings data](http://localhost:8088/api/ratings)
- set data source: **webpack.dev.conf.js**
- set alias path: **build/webapck.base.conf.js**
- run port: **config/index.js**
- modify ESLint rules: **eslintrc.js** [eslint](http://eslint.cn/docs/4.0.0/rules/semi-style)

```console
<!-- Ajax request, XMLHttpRequest -->
npm i vue-resource -S
<!-- Sass -->
npm i node-sass sass-loader -D
```

## reset.css, mobile config

- **index.html**

## ignore eslint

- .eslintrc.js
- .eslintignore

```js
// eslint-disable `Name`
/* eslint-disable no-new */
```

## 手机预览开发的界面

- check IP

```console
ifconfig(mac)
ipconfig(win)
npm run dev
```

- [url](localhost:8088/#/goods)
- url become `IP:8088/#/goods`
- [草料](https://cli.im/) edit `IP:8088/#/goods`

## vue-router, dynamic route

```console
npm i vue-router -S
<!-- dynamic route -->
npm i babel-plugin-syntax-dynamic-import -D
```

- dynamic route, 节省加载时间, 修改 **.babelrc**

```js
// dynamic route
const goods = resolve => {
  import('components/goods/goods.vue').then(module => {
    resolve(module)
  })
}
```

## vue-resource

```console
<!-- Ajax request, XMLHttpRequest -->
npm i vue-resource -S
```

```js
import VueResource from 'vue-resource'
Vue.use(VueResource)
```

```js
created() {
  /* vue-resource ajax request */
  this.$http.get('/api/seller?id=' + this.seller.id).then(res => {
    /* get res.body(json object) */
    res = res.body
    if (res.errno === ERR_OK) {
      /* res.data: <http://localhost:8088/api/seller> */
      /* Object.assign: extend attributes to an object */
      this.seller = Object.assign({}, this.seller, res.data)
    }
  })
}
```

## sticky layout: 1,2,3,4,5,6

```html
<div class="detail">
  <!-- 1: A clearfix -->
  <div class="detail-wrapper clearfix"></div>
  <!-- 2: 切分为 A B 两个部分 -->
  <div class="detail-close"></div>
</div>
```

```css
.detail-wrapper {
  /* 3: 内容长度会改变 */
  min-height: 100%;
  .detail-main {
    /* 4: A 给 B 的放置空间 */
    padding-bottom: 64px;
  }
  .detail-close {
    position: relative;
    /* 5: B 嵌入 A 给 B 的放置空间中 */
    margin: -64px auto 0;
    /* 6: B clearfix */
    clear: both;
  }
}
```

## width

width: 样式宽
clientWidth: 可视区宽 = 样式宽 + padding
offsetWidth: 占位宽 = 样式宽 + padding + border
getBoundingClientRect(): Get the element relative viewport location

## better-scroll

```console
npm install better-scroll -S
```

```js
this.meunScroll = new BScroll(this.$refs.menuWrapper, {
  click: true,
  /*
  probeType: 1，会非实时（屏幕滑动超过一定时间后）派发scroll 事件
  probeType: 2，会在屏幕滑动的过程中实时的派发 scroll 事件
  probeType: 3，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件(实时滚动位置)
  */
  probeType: 3
})

selectMenu(index, event) {
  /* 在 PC 将触发两次事件，停止这个 */
  if (!event._constructed) {
    return
  }

  // 获取 dom 元素
  let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
  let el = foodList[index]

  // better-scroll/scrollToElement(dom, duration)
  // 滚动到指定 dom 元素 el
  this.foodsScroll.scrollToElement(el, 300)
}

/* foodsScroll 实时滚动位置 scrollY */
this.foodsScroll.on('scroll', pos => {
  this.scrollY = Math.abs(Math.round(pos.y))
})
```

## 两个 better-scroll 组件对应联动

- 点击第一个 better-scroll 组件, 第二个组件 currentIndex 高亮 (链表实现, 遍历 listHeight, 实时位置 scrollY 落入哪个 listHeight 之间)
- _calculateHeight 获取 listHeight
- selectMenu/scrollToElement 传入 currentIndex

## 添加属性

```js
/* 添加 food 属性 count=1. */
Vue.set(this.food, 'count', 1)
```

## 小球动画

```js
<transition
  name="drop"
  @before-enter="beforeDrop"
  @enter="dropping"
  @after-enter="afterDrop"
>
  <div class="ball" v-show="ball.show">
    <!-- 两个方向的改变 -->
    <div class="inner inner-hook"></div>
  </div>
</transition>
data() {
  return {
    // 定义小球, 状态为不显示
    balls: [
      { show: false },
      { show: false },
      { show: false },
      { show: false },
      { show: false }
    ],
    // 下落显示的小球
    dropBalls: []
  }
}
drop(el) {
  for (let i = 0; i < this.balls.length; i++) {
    let ball = this.balls[i]
    if (!ball.show) {
      // 将小球的状态变成显示
      ball.show = true
      ball.el = el
      // 下落显示的小球
      this.dropBalls.push(ball)
      return
    }
  }
}
// 下落显示的小球一个接一个消失，造成动画的效果
beforeDrop(el) {
  let count = this.balls.length
  while (count--) {
    let ball = this.balls[count]
    if (ball.show) {
      /* getBoundingClientRect: Get the element relative viewport location */
      let rect = ball.el.getBoundingClientRect()
      /* ball size = 32 */
      let x = rect.left - 32
      let y = -(window.innerHeight - rect.top - 22)
      /* 让小球显示 */
      el.style.display = ''
      el.style.webkitTransform = `translate3d(0,${y}px,0)`
      el.style.transform = `translate3d(0,${y}px,0)`
      let inner = el.getElementsByClassName('inner-hook')[0]
      inner.style.webkitTransform = `translate3d(${x}px,0,0)`
      inner.style.transform = `translate3d(${x}px,0,0)`
    }
  }
}
// 小球动画结束重置状态
dropping(el, done) {
  /* Trigger browser refactoring. */
  /* eslint-disable no-unused-vars */
  let rf = el.offsetHeight
  this.$nextTick(() => {
    /* reset */
    el.style.webkitTransform = 'translate3d(0,0,0)'
    el.style.transform = 'translate3d(0,0,0)'
    let inner = el.getElementsByClassName('inner-hook')[0]
    inner.style.webkitTransform = 'translate3d(0,0,0)'
    inner.style.transform = 'translate3d(0,0,0)'
    el.addEventListener('transitionend', done)
  })
},
// 结束清除小球
afterDrop(el) {
  let ball = this.dropBalls.shift()
  if (ball) {
    ball.show = false
    el.style.display = 'none'
  }
}
```

## 过滤

- **formatDate.js**

```js
<div class="time">{{rating.rateTime | formatDate}}</div>
filters: {
  /* copy from food.vue/formatDate() */
  formatDate(time) {
    let date = new Date(time)
    return formatDate(date, 'yyyy-MM-dd hh:mm')
  }
}
```

## 单行轮播图

```js
_initPics() {
  if (this.seller.pics) {
    let picWidth = 120
    let margin = 6
    let width = (picWidth + margin) * this.seller.pics.length - margin
    this.$refs.picList.style.width = width + 'px'
    /*
    保证dom是渲染的
    async
    在下次 DOM 更新循环结束之后执行延迟回调。
    在修改数据之后立即使用这个方法，获取更新后的 DOM。
    */
    this.$nextTick(() => {
      if (!this.picScroll) {
        this.picScroll = new BScroll(this.$refs.picWrapper, {
          /* horizontal scroll */
          scrollX: true,
          /* ignore vertical scroll */
          eventPassthrough: 'vertical'
        })
      } else {
        this.picScroll.refresh()
      }
    })
  }
}
```

## 获取 url

- **util.js**

```js
seller: {
  /* 直接运行函数 */
  id: (() => {
    /* 从 url 获取 id */
    let queryParam = urlParse()
    return queryParam.id
  })()
}
```

## 缓存, 保存到 localstorage, 读取数据 loadFromLocal

- **store.js**

```js
/* immediately run function */
favorite: (() => {
  return loadFromLocal(this.seller.id, 'favorite', false)
})()

saveToLocal(this.seller.id, 'favorite', this.favorite)
```

## keep-alive

```html
<!--
  keep-alive: 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们
  当组件在 <keep-alive> 内被切换，它的 activated 和 deactivated 
  这两个生命周期钩子函数将会被对应执行
-->
<!-- <keep-alive exclude="Detail"> Detail 组件不缓存处理 -->
<keep-alive>
  <router-view :seller="seller"></router-view>
</keep-alive>
```

## prodserver.js

## style

```css
/* 2x3x image */
@mixin bg-image($url) {
  background-image: url($url+'@2x.png');
  @media (-webkit-min-device-pixel-ratio: 3) {
    background-image: url($url+'@3x.png');
  }
  @media (min-device-pixel-ratio: 3) {
    background-image: url($url+'@3x.png');
  }
}

/* 子级 absolute 定位, 父级应该 relative 定位 */
.content-wrapper {
  position: relative;
  .support-count {
    position: absolute;
  }
}

/* span 变成 block, 能设置 width & height */
display: inline-block;

/* 消除间隙，父元素设置 font-size: 0 */
font-size: 0;

/* 模糊效果 */
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);

/* [动画效果](http://cubic-bezier.com/#.17,.67,.83,.67) */
transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41);

/* 垂直方向居中 */
height: 24px;
line-height: 24px;
/* 水平方向居中 */
text-align: center;

/* 超出显示...(two) */
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
/* 超出显示...(two) */

/* 清浮动 */
.clearfix {
  display: inline-block;
  &:after {
    visibility: hidden;
    clear: both;
    display: block;
    height: 0;
    line-height: 0;
    content: '.';
  }
}

/* 一像素线 */
@mixin border-1px($color) {
  position: relative;
  &:after {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-top: 1px solid $color;
    content: ' ';
  }
}

/* 不同分辨率下的一像素线缩放情况 */
@media (-webkit-min-device-pixel-ratio: 1.5), (min-device-pixel-ratio: 1.5) {
  .border-1px {
    &::after {
      -webkit-transform: scaleY(0.7);
      transform: scaleY(0.7);
    }
  }
}
@media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2) {
  .border-1px {
    &::after {
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
    }
  }
}

.menu-item {
  /* 多行文本, 垂直居中 */
  display: table;
  /* 让其突出显示 */
  &.current {
    z-index: 10;
    position: relative;
    margin-top: -1px;
  }
  .text {
    display: table-cell;
    /* 多行文字, 垂直居中 */
    vertical-align: middle;
  }
}

/* ie盒模型: 已设定的宽度和高度减去边框和内边距才是内容的宽度和高度 */
box-sizing: border-box;

/* 高度9 : 宽度10 */
div {
  padding-top: 90%;
  width: 100%;
  height: 0;
}

/* 动画 */
<transition name='fade' > </transition > &.fade-enter-active,
&.fade-leave-active {
  transition: all 0.2s;
}
&.fade-enter,
&.fade-leave-active {
  opacity: 0;
  z-index: -1;
}
```
