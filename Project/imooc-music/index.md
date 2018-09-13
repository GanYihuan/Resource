# imooc-music

> Vue-开发移动端音乐 WebApp

## install plugin

> command node>4 version

```console
npm i nvm
nvm ls
nvm install 10.0.0
nvm use 10.0.0
```

> env config

```console
npm i -g vue-cli
vue list
vue init webpack imooc-music
npm install
npm run start
```

> plugins

- babel-runtime: es6 Escape **babelrc**
- babel-polyfill: es6 api Escape, mobile can use es6 api
- fastclick: Click 300MS delay on the mobile end
- jsonp(url, opts, fn) **common/js/jsonp**

```console
npm i babel-polyfill babel-runtime fastclick vue-lazyload -S
npm i jsonp -S
```

```js
**main.js**
import 'babel-polyfill'
import fastclick from 'fastclick'
/* fastclick: mobile end Clicks 300MS Delay */
fastclick.attach(document.body)
```

> webpack

- 别名配置 **webpack.base.conf.js**
- 后端接口代理 **webpack.dev.conf.js**
- 端口配置 **config/index.js**

> chrome jsonp

- (chrome) XHR: ajax request
- browser 17s refreshes once
- Promise:
  > pass async message object
  > an event which indicate that result will be know in the future
- jsonp(url, opts, fn) **jsonp.js**
  > 动态创建 script 标签(没有同源限制可以跨域), script 的 src 指向服务端地址, 有一个 callback, 后端解析这个 url, 带 callback=a 这个参数, 返回数据里调用 a 包裹一个方法, 在前端执行 a 这个方法, window 注册这个方法, 定义这个 a 方法获得数据
- axios: XMLHttpRequests from the browser **api/recommend.js**

```console
<!-- jsonp -->
npm i jsonp -S
<!-- 后端接口代理 -->
npm i axios -S
```

```js
import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
/* ajax */
import axios from 'axios'
/* use jsonp fetch data (carousel data) */
export function getRecommend() {
  /* static/jsonp1.png: open in chrome, copy url(copy '?' before) */
  const url =
    'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  /* Object.assign: copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object */
  /* It will return the target object. */
  const data = Object.assign({}, commonParams, {
    platform: 'h5'
    ...
  })
  return jsonp(url, data, options)
}
```

```js
import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
/* ajax */
import axios from 'axios'
export function getDiscList() {
  /* request back-end address, the back-end address sends an HTTP request to qq music to obtain the data. */
  const url = '/api/getDiscList'
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    ...
  })
  return axios
    .get(url, {
      /* api/recommend.js/getDiscList invoked back-end interface */
      /* webpack.dev.conf.js app.get('/api/getDiscList', (req, res) => {}) */
      params: data
    })
    .then(res => {
      return Promise.resolve(res.data)
    })
}
```

```js
getRecommend().then(res => {
  /* res: [推荐界面数据](https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg) */
  if (res.code === ERR_OK) {
    this.recommends = res.data.slider
  }
})
```

## better-scroll

- [better-scroll](https://github.com/ustbhuangyi/better-scroll)

```console
npm i better-scroll@0.1.15 -S
```

## scroll

- **scroll.vue**

## basic

clientWidth: (样式宽 + padding) The visual portion of the box content, not including borders or scroll bars , but includes padding . Can not be calculated directly from CSS, depends on the system's scroll bar size.
offsetWidth: (样式宽 + padding + border) The size of the visual box incuding all borders. Can be calculated by adding width/height and paddings and borders, if the element has display: block
scrollWidth: The size of all of the box's content, including the parts that are currently hidden outside the scrolling area. Can not be calculated directly from CSS, depends on the content.

> 增加类名 **common/dom.js**

```js
addClass(child, 'slider-item')
```

## 轮播组件, 难度大

- **slider.vue/\_setSliderWidth**
- **slider.vue/\_initSlider**
- **slider.vue/\_autoPlay**

## 懒加载

```console
npm i vue-lazyload -S
```

```js
/* VueLazyload */
Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})
```

```html
<!-- v-lazy: when scroll then load -->
<img width="60" height="60" v-lazy="item.imgurl"/>
```

## fastclick & better-scroll 冲突

```js
// class="needsclick" fastclick Don't block the click process
<img class="needsclick" />
```

## 双数组嵌套的数据

- **singer.md**

## 点击或者滑动右侧 '热门', A, B ... 滚动到对应元素

- **listview.md**

## vuex

```console
npm i vuex -S
```

> 储存数据

```js
import { mapMutations } from 'vuex'
/* invoked vuex/mutations */
...mapMutations({
  /* SET_SINGER: vuex/mutation-type */
  setSinger: 'SET_SINGER'
}),
```

> 获取数据

```js
import { mapGetters } from 'vuex'
...mapGetters(['singer']),
title() {
  return this.singer.name
}
```

- actions.js

```js
export const insertSong = function({ commit, state }, song) {}
```

## 各个浏览器 css 前缀

- **dom.js**

```js
import { prefixStyle } from 'common/js/dom'
const transform = prefixStyle('transform')
const backdrop = prefixStyle('backdrop-filter')

this.$refs.layer.style[transform] = `translate3d(0,${translateY}px,0)`
this.$refs.filter.style[backdrop] = `blur(${blur}px)`
```

## 高级动画

```console
npm i create-keyframe-animation -S
```

```html
<transition
  name="normal"
  @enter="enter"
  @after-enter="afterEnter"
  @leave="leave"
  @after-leave="afterLeave"
>
</transition>
```

```js
import animations from 'create-keyframe-animation'
enter(el, done) {
  let animation = {
    0: {},
    100: {}
  }
  animations.registerAnimation({
    name: 'move',
    animation,
    presets: {
      duration: 400,
      easing: 'linear'
    }
  })
  /* done: func */
  animations.runAnimation(this.$refs.cdWrapper, 'move', done)
},
afterEnter() {
  animations.unregisterAnimation('move')
},
```

## audio

```html
<audio
  ref="audio"
  :src="currentSong.url"
  @play="ready"
  @error="error"
  @timeupdate="updateTime"
  @ended="end"
>
</audio>
```

```js
/* <audio>, song jump to begin */
this.currentLyric.seek(0)
this.currentLyric.play()
this.currentLyric.stop()
```

## time 转换为 00:00

```js
format(interval) {
  /* | 0: math.floor */
  interval = interval | 0
  const minute = (interval / 60) | 0
  /* _pad: Use 0 to fill 2 bits */
  const second = this._pad(interval % 60)
  return `${minute}:${second}`
},
/* _pad: use 0 to fill 2 bits */
_pad(num, n = 2) {
  let len = num.toString().length
  while (len < n) {
    num = '0' + num
    len++
  }
  return num
},
```

## SVG

- **progress-cicle.vue**

## util.js

> 洗牌函数 shuffle()
> 节流函数 debounce()

## mixin

```js
import { playerMixin } from 'common/js/mixin'
mixins: [playerMixin],
```

## 缓存

```console
npm install good-storage --save
```

- **common/js/cache.js**

## server

- **prod.server.js**
