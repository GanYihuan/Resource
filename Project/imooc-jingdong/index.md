# imooc-jingdong

> Vue-05-前端面试项目冲刺，京东金融 Vue 组件化实战

## node version

- manage node version: nvm

```console
npm install nvm
<!-- 查看已经安装的node版本 -->
nvm ls
nvm install 8.9.1
nvm use 8.9.1
```

## 自适应

- [CSS 像素, 物理像素, 逻辑像素, 设备像素比, PPI, Viewport](https://github.com/jawil/blog/issues/21)
- CSS 像素, 逻辑像素: px
- 设备像素比(dpr) = 物理像素 / CSS 像素, retina 屏设备像素比是 4
- rem: 相对于根标签 font-size 来计算
- em: 相对于父级元素来计算

```html
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,minimal-ui">
```

![viewport](static/Q1.png)
![width=device-width](static/Q2.png)
![width=device-width](static/Q3.png)

## style

```css
a {
  /* width: 100% */
  position: fixed;
  right: 0;
  left: 0;
  /* width: 100% */
  top: 0;
  /* 从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度 */
  box-sizing: border-box;
  /* 依靠 box-sizing 能完美实现 50% */
  width: 50%;
}
h4 {
  /* 超出显示...(two) */
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  /* 超出显示... */
}
h3 {
  /* 文字垂直居中 */
  height: 100px;
  line-height: 100px;
  /* 文字水平居中 */
  text-align: center;
  /* dpr=2, 手机网页显示 50px, 设计稿写 50*2=100px */
  height: 100px;
}
.item {
  /* 为下面 position: absolute 准备 */
  position: relative;
  box-sizing: border-box;
  /* 竖线 */
  &:after {
    display: block;
    position: absolute;
    border-right: 1px solid #eee;
    width: 1px;
    height: 100px;
    content: ' ';
  }
  /* 横线 */
  &:after {
    display: block;
    /* 允许有偏移量 */
    position: relative;
    top: -100px;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
    width: 100%;
    height: 0;
    content: ' ';
  }
}
/* nth-child非数组下标 */
&:nth-child(2n) {
}
/* 非数组下标, 第三个开始 */
&:nth-child(n + 3) {
}
```

## css 局域化, 命名空间

```html
<!-- module, $style: 命名空间 -->
<div :class="$style.header"></div>
<style lang="scss" module>
.header {}
</style>
```

## viewport.js

- **viewport.js**
  > [hotcss](https://github.com/imochen/hotcss)移动端布局终极解决方案 --- 让移动端布局开发更加容易
- **webpack.config.js** 打包到项目中

```js
return {
  // viewport.js 打包到项目中
  entry: ['./app/js/viewport.js', './app/js/main.js']
}
```

## view-awesome-swiper

```node
npm i view-awesome-swiper -S
```

<!-- 常见的轮播图 -->

```js
<swiper :options="options" :not-next-tick="options.notNextTick">
  <swiper-slide v-for="item in items" :key="item.href">
    <router-link :to="{name: item.href}">
      <img :src="item.src" alt=""/>
    </router-link>
  </swiper-slide>
  <div class="swiper-pagination" v-if="options.pagination" slot="pagination"/>
</swiper>

props: {
  options: {
    type: Object,
    default() {
      return {
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        /*
        notNextTick 是一个组件自有属性，
        如果notNextTick设置为true，
        组件则不会通过NextTick来实例化swiper，
        也就意味着你可以在第一时间获取到swiper对象，
        假如你需要刚加载就使用获取swiper对象来做什么事，
        那么这个属性一定要是true
        */
        notNextTick: false
      }
    }
  }
}

@import '~swiper/dist/css/swiper.css';
```

<!-- 横向的轮播图 -->

```js
<Slider :options="options" :items="items" cname="product-slider"/>

data() {
  options: {
    slidesPerView: 2.3,
    spaceBetween: 30,
    freeMode: true
  }
}
```

```css
.product-slider {
  .swiper-container {
    box-sizing: border-box;
    padding: 0 24px;
    .swiper-slide {
      a {
        display: inline-block;
        width: 100%;
        img {
          display: block;
          border: 1px solid #fafafa;
          width: 100%;
          height: 314px;
        }
      }
    }
  }
}
```
