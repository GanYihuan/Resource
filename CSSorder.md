# CSS write order

## role

- Display & Flow
- Positioning
- Dimensions
- Margins, Padding, Borders, Outline
- Typographic Styles
- Backgrounds
- Opacity, Cursors, Generated Content

```css
el {
  /* 1：流相关 */
  visibility: ;
  float: ;
  clear: ;
  display: ;

  /* 2：位置 */
  z-index: ;
  position: ;
  top: ;
  right: ;
  bottom: ;
  left: ;

  /* 3：盒子-内部 */
  /* 改变盒子基础属性: 为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制 */
  box-sizing: border-box;

  /* 4：盒子-外部 */
  padding: ;
  padding-top: ;
  padding-right: ;
  padding-bottom: ;
  padding-left: ;

  margin: ;
  margin-top: ;
  margin-right: ;
  margin-bottom: ;
  margin-left: ;

  border: ;
  border-top: ;
  border-width: ;
  border-bottom-width: ;
  border-style: ;
  border-left-style: ;
  border-color: ;
  border-right-color: ;

  width: ;
  min-width: ;
  max-width: ;
  height: ;
  /* 内容长度会改变 */
  min-height: ;
  max-height: ;

  /* 5：盒子-装饰 */
  /* 是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。 */
  outline: ;
  /* 设置列表项标记的类型 */
  list-style: ;

  /* 6: 表格 */
  table-layout: ; /* 显示表格单元格、行、列的算法规则。*/
  caption-side: ; /* 属性设置表格标题的位置。*/
  border-collapse: ; /* 表格的边框是否被合并为一个单一的边框 */
  border-spacing: ; /* 相邻单元格的边框间的距离 */
  empty-cells: ; /* 是否显示表格中的空单元格 * /

  /* 6：字体 */
  /* 垂直方向居中, 大小等于 height */
  line-height: ;
  /* 行内元素的基线相对于该元素所在行的基线的垂直对齐 */
  vertical-align: top;
  /* 水平方向居中 */
  text-align: center;
  text-indent: ;
  text-transform: ;
  text-decoration: ;
  font: ;
  font-family: ;
  font-size: ;
  font-weight: ;
  letter-spacing: ;
  word-spacing: ;
  color: ;

  /* 7:背景 */
  background: ;
  background-image: ;
  background-repeat: ;
  background-position: ;

  /* 超出显示...(two) */
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  opacity: ;
  cursor: ;
  content: ;
  quotes: ;
  transition: ;
  transform: ;
}
```
