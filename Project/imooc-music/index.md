# imooc-music

> Vue-开发移动端音乐 WebApp

- babel-runtime: es6 Escape
- babel-polyfill: es6 api Escape, mobile can use es6 api
- fastclick: Click 300MS delay on the mobile end
- jsonp(url, opts, fn)

```console
npm i babel-polyfill babel-runtime fastclick vue-lazyload -S
npm i jsonp -S
```

```js
/* setTimeout: 20s, dom will Refresh, Because the browser 17s refreshes once */
setTimeout(() => {}, 20)
```

clientWidth: (样式宽 + padding) The visual portion of the box content, not including borders or scroll bars , but includes padding . Can not be calculated directly from CSS, depends on the system's scroll bar size.
offsetWidth: (样式宽 + padding + border) The size of the visual box incuding all borders. Can be calculated by adding width/height and paddings and borders, if the element has display: block
scrollWidth: The size of all of the box's content, including the parts that are currently hidden outside the scrolling area. Can not be calculated directly from CSS, depends on the content.

> dom.js

```js
/*
goToPage(): better-scroll func
pageIndex: x
0: y
400: time interval
*/
this.slider.goToPage(pageIndex, 0, 400)

/* better-scroll: refresh */
/* When the width changes */
this.slider.refresh()
```

## 后端接口代理

```console
npm i axios -S
```

```js
<!-- webpack.dev.conf.js -->
app.get('/api/getDiscList', (req, res) => {
  var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
  // Send an HTTP request
  axios
    .get(url, {
      // The request to cheat qq
      headers: {
        referer: 'https://c.y.qq.com/',
        host: 'c.y.qq.com'
      },
      // params, (recommend.js/getDiscList) pass to url address
      params: req.query
    })
    .then(response => {
      // res: to font-end
      // response.data: qq response data
      res.json(response.data)
    })
    .catch(e => {
      console.log(e)
    })
})
```

```js
<!-- api/recommend.js -->
export function getDiscList() {
  /* request back-end address, the back-end address sends an HTTP request to qq music to obtain the data. */
  const url = '/api/getDiscList'
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
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

## 懒加载

```console
npm i vue-lazyload -S
```

## better-scroll

```js
this.scroll = new BScroll(this.$refs.wrapper, {})
// scroll 底部
this.scroll.maxScrollY
```

## fastclick & better-scroll 冲突

```js
<!-- class="needsclick" fastclick Don't block the click process -->
<img class="needsclick"/>
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

```js
<transition
  name="normal"
  @enter="enter"
  @after-enter="afterEnter"
  @leave="leave"
  @after-leave="afterLeave"
></transition>
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

```js
<audio
  ref="audio"
  :src="currentSong.url"
  @play="ready"
  @error="error"
  @timeupdate="updateTime"
  @ended="end"
>
</audio>
/* <audio>, song jump to begin */
this.currentLyric.seek(0)
this.currentLyric.play()
this.currentLyric.stop()
```

## time

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

## util.js

> 洗牌函数 shuffle()
> 节流函数 debounce()

## 歌词数据处理 (不懂)

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
