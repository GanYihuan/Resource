# listview.vue

## 点击或者滑动右侧 '热门', A, B ... 滚动到对应元素

- 实时滚动位置 与 listHeight(每个歌手 item 累加的高度) 的关系, 对应其落入的区间

```html
<div
  @touchstart="onShortCutTouchStart"
  @touchmove.stop.prevent="onShortCutTouchMove"
>
  <li
    :class="{'current': currentIndex === index}"
    :data-index="index"
  >
    {{item}}
  </li>
</div>
```

- **dom.js** 获取点击元素的 index

```js
onShortCutTouchStart(e) {
  /* 获取点击元素的 index */
  let anchorIndex = getData(e.target, 'index')
  /* e.touches[0]: Finger click position */
  let firstTouch = e.touches[0]
  /* vertical click position */
  this.touch.y1 = firstTouch.pageY
  /* the first time the finger clicks on the letter subscript */
  this.touch.anchorIndex = anchorIndex
  this._scrollTo(anchorIndex)
},
onShortCutTouchMove(e) {
  /* e.touches[0]: Finger click position */
  let firstTouch = e.touches[0]
  /* Vertical click position */
  this.touch.y2 = firstTouch.pageY
  /* | 0: Math.floor */
  /* delta: Shifted a few 'letter' positions after the finger swiped */
  let delta = ((this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT) | 0
  /* After sliding your finger, letter subscript on the stopped position */
  let anchorIndex = parseInt(this.touch.anchorIndex) + delta
  this._scrollTo(anchorIndex)
},
_scrollTo(index) {
  /* click on the upper and lower blank of the letter */ 
  /* !index: index === null */
  if (!index && index !== 0) {
    return
  }
  /* handle boundary */
  if (index < 0) {
    index = 0
  } else if (index > this.listHeight.length - 2) {
    index = this.listHeight.length - 2
  }
  this.scrollY = -this.listHeight[index]
  /* scroll.vue: First parameter: Scroll to the corresponding element, Second parameter: 动画时间 */
  this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 0)
},
/* 实时滚动位置 */
scroll(pos) {
  /* pos.y: Real-time scroll position */
  this.scrollY = pos.y
},
/* 计算 listHeight */
_calculateHeight() {
  let height = 0
  let listGroup = this.$refs.listGroup
  /* listHeight has one more element than listGroup  */
  this.listHeight = []
  this.listHeight.push(height)
  for (let i = 0; i < listGroup.length; i++) {
    let item = listGroup[i]
    height += item.clientHeight
    this.listHeight.push(height)
  }
}
/* 落入的区间判断 */
watch: {
  /* Real-time scroll position */
  scrollY(newY) {
    /* Keep the height of the group */
    let listHeight = this.listHeight
    /* When scrolling to the top newY > 0 */
    if (newY > 0) {
      this.currentIndex = 0
      return
    }
    /*
    When scrolling to the middle section,
    listHeight has one more element than listGroup
    listHeight.length-1: the first element upper limit is the second element lower limit, 
    */
    for (let i = 0; i < listHeight.length - 1; i++) {
      /* Lower limit */
      let height1 = listHeight[i]
      /* Upper limit */
      let height2 = listHeight[i + 1]
      /* -newY: When scrolling occurs, newY Is negative, Add “-” Ensure that it is positive */
      if (-newY >= height1 && -newY < height2) {
        this.currentIndex = i
        /*
        newY is negative
        diff: trigger the animation of the fix title, 
        diff = next element Upper limit(height2) - rolling distance(newY)
        */
        this.diff = newY + height2
        return
      }
      this.currentIndex = 0
    }
    /*
    When scrolling to the bottom,
    -newY is bigger than the last element upper limit
    listHeight.length-2: listHeight has one more element than listGroup
    */
    this.currentIndex = listHeight.length - 2
  },
  /* diff: trigger the animation of the fix title */
  diff(newVal) {
    /* newVal: diff */
    let fixedTop = newVal > 0 && newVal < FIXED_TITLE_HEIGHT 
        ? newVal - FIXED_TITLE_HEIGHT
        : 0
    /*
    When the title animation is not triggered
    fixedTop is not changing
    */
    if (this.fixedTop === fixedTop) {
      return
    }
    this.fixedTop = fixedTop
    /* Turn on GPU acceleration */
    this.$refs.fixed.style.transform = `translate3d(0, ${fixedTop}px, 0)`
  }
}
```
