# imooc-travel

> Vue2.5 开发去哪儿网 App 从零基础入门到实战项目

## 生命周期

## 父子组件间的数据传递

```js
/* access father data */
props: ['count'],
/* child component data must function */
data() {
  return {
    /* 父级数据转化为子组件内部数据 */
    number: this.count
  }
},
```

## 给组件绑定原生事件

```js
<!-- @click.native trigger native event -->
<child @click.native="handleClick">native</child>
```

## slot-scope="props"

```js
<!-- 子组件 -->
Vue.component('child', {
  template: `<div>
            <ul>
              <slot v-for='item of list' :item=item></slot>
            </ul>
          </div>`
})
<!-- 父组件 -->
<child>
  <!--
    slot-scope="props": 能调用slot里面的item数据,
    子组件的内容都放在slot-scope里面
  -->
  <template slot-scope="props">
    <h1>{{props.item}} --- hello</h1>
  </template>
</child>
```

## 动态组件

```js
<!-- 动态组件: 根据:is的变化自动加载 -->
<component :is="type"></component>
```

## 动画原理

**动画原理 1.png**
**动画原理 2.png**

```js
<!-- use Animate.css library -->
<!-- mode="in-out": 先显示再隐藏 -->
<!-- enter-active-class="active": define animate name -->
<!-- animated: 启动 Animate.css -->
<!-- swing: Animate.css 的效果 -->
<!-- type="transition": 动画效果以自己定义的 transition 为最优先 -->
<!-- :duration="5000": 总时间5s, 5s 后 animateclass 将会清除 -->
<!-- :duration="{enter: 5000, leave: 10000}": 5s 后, enter animateClass 将会清除, 10s 后, leave animateClass 将会清除 -->
<link rel="stylesheet" href="../animate.css">
<script src="../velocity.min.js"></script>
<style>
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
.active {
  animation: bounce-in 2s;
}
</style>
<transition
  name="fade"
  mode="in-out"
  :duration="{enter: 5000, leave: 10000}"
  type="transition"
  appear
  appear-active-class="animated swing"
  enter-active-class="active"
  leave-active-class="animated shake fade-leave-active"
  @enter="handleEnter"
>
  <div v-if="show">hello world 3</div>
</transition>
<transition-group name="fade">
  <div v-for="(item, index) of list" :key="item.id">
    {{item.title}}
  </div>
</transition-group>
handleEnter(el, done) {
  setTimeout(() => {
    el.style.color = 'green'
  }, 2000)
  setTimeout(() => {
    // animate finished
    done()
  }, 4000)
  Velocity(el,
    {
      fontSize: 30
    },
    {
      duration: 2000,
      complete: done
    })
}
```

## 一像素边框

- 1rem = html font-size = 50px
- border.css
- reset.css
- fastclick 移动端延迟 300ms 解决

```node
npm i fastclick -S
```

```js
import 'styles/reset.css'
import 'styles/border.css'
/* 移动端延迟300ms解决 */
import fastClick from 'fastclick'
/* 移动端延迟300ms解决 */
fastClick.attach(document.body)
/* VueAwesomeSwiper */
Vue.use(VueAwesomeSwiper)
```

## stylus

```node
npm i stylus stylus-loader -S
```

## iconfont

```js
<div class="iconfont back-icon">&#xe624;</div>
```

## 轮播图

```node
npm i vue-awesome-swiper -S
```

## 图片宽高比固定比值

```css
.img {
  padding-bottom: 31.25%;
  width: 100%;
  height: 0;
  overflow: hidden;
}
```

## stylus 样式穿透

```css
/* >>>: 样式穿透 */
/* 不受 scoped 影响 */
/* .wrapper 里面出现 .swiper-pagination-bullet-active 就可以添加样式 */
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}
```

## 显示 `...`

```scss
@mixin ellipsis() {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```
