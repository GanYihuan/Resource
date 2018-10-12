# 技巧

## 取消字体上下间距

```css
/* 取消字体上下间距 */
line-height: 24rpx;
font-size: 24rpx;
/* 取消字体上下间距 */
```

## 覆盖 位置重叠

- 子元素参照元素为 relative 的元素, 不参考 static

子元素覆盖父元素
子元素: `position: absolute;`
父元素: `position: relative;`
