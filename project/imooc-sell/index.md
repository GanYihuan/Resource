# imooc-sell

> Vue-高仿饿了么 APP

## install plugin

> env config

```console
npm isntall vue-cli -g
vue init webpack projectName
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
npm install vue-resource better-scroll --save
npm install node-sass sass-loader --save-dev
```

> better-scroll

```console
npm install better-scroll --save
```

## reset.css

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
<link rel="stylesheet" href="static/css/reset.css">
```

## 跳过 eslint 检测

```js
// eslint-disable `Name`
/* eslint-disable no-new */
```

## 动态路由

```js
// dynamic route
const goods = resolve => {
  import('components/goods/goods.vue').then(module => {
    resolve(module)
  })
}
const ratings = resolve => {
  import('components/ratings/ratings.vue').then(module => {
    resolve(module)
  })
}
const seller = resolve => {
  import('components/seller/seller.vue').then(module => {
    resolve(module)
  })
}
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
    display: block;
    height: 0;
    line-height: 0;
    visibility: hidden;
    clear: both;
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
/* 不同分辨率下的缩放情况 */
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

/* 高度宽度相等 */
div {
  padding-top: 100%;
  width: 100%;
  height: 0;
}
```

## sticky layout: 1,2,3,4,5,6

```html
<div class="detail">
  <!-- 1: A零件 clearfix -->
  <div class="detail-wrapper clearfix"></div>
  <!-- 2: 切分为 A B 两个部分 -->
  <div class="detail-close"></div>
</div>
```

```css
.detail-wrapper {
  width: 100%;
  /* 3: 内容长度会改变 */
  min-height: 100%;
  .detail-main {
    /* 4: A part space for B part */
    padding-bottom: 64px;
  }
  .detail-close {
    position: relative;
    /* 5: B零件边距嵌入A零件的内边距 */
    margin: -64px auto 0;
    /* 6: B零件 clearfix */
    clear: both;
  }
}
```

## width

width: 样式宽
clientWidth: 可视区宽 = 样式宽 + padding
offsetWidth: 占位宽 = 样式宽 + padding + border
getBoundingClientRect(): Get the element relative viewport location

## 实时滚动位置

```js
this.foodsScroll.on('scroll', pos => {
  // scrollY: foodsScroll 滚动位置(实时滚动位置)
  this.scrollY = Math.abs(Math.round(pos.y))
})
```

## 滚动到指定 dom 元素

```js
this.foodsScroll.scrollToElement(el, 300)
```

## better-scroll

```js
this.meunScroll = new BScroll(this.$refs.menuWrapper, {
  click: true,
  probeType: 3
})

selectMenu(index, event) {
  /* 在 PC 将触发两次事件，停止这个 */
  if (!event._constructed) {
    return
  }
}
```

## 获取 dom 元素

```js
let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
```

## 添加属性

```js
/* 添加 food 属性 count=1. */
Vue.set(this.food, 'count', 1)
```

## formatDate.js

```js
let date = new Date(time)
return formatDate(date, 'yyyy-MM-dd hh:mm')
```

## 追随滚动

```js
<li :class="{'current':currentIndex===index}"></li>

currentIndex() {
  for (let i = 0; i < this.listHeight.length; i++) {
    /* 当前索引值的高度 */
    let height1 = this.listHeight[i]
    /* 下一个的高度 */
    let height2 = this.listHeight[i + 1]
    if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
      return i
    }
  }
  return 0
}

_calculateHeight() {
  let foodList = this.$refs.foodsWrapper.getElementsByClassName(
    'food-list-hook'
  )
  let height = 0
  this.listHeight.push(height)
  for (let i = 0; i < foodList.length; i++) {
    let item = foodList[i]
    /*
    width: 样式宽
    clientWidth: 可视区宽 = 样式宽 + padding
    offsetWidth: 占位宽 = 样式宽 + padding + border
    */
    height += item.clientHeight
    this.listHeight.push(height)
  }
},
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

## 一行滚动

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

## util.js, 获取 url

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

## store.js, 保存到 localstorage, 读取数据 loadFromLocal

## prodserver.js

