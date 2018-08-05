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
    display: ;                      dis
    visibility: ;                   vis
    float: ;                        fl
    clear: ;                        cle

    /* 2：位置 */
    z-index: ;                      zi10
    position: ;                     po
    top: ;                          t10
    right: ;                        r10
    bottom: ;                       b10
    left: ;                         l10

    /* 3：盒子-内部 */
    /* 改变盒子基础属性: 为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制 */
    box-sizing: border-box;

    /* 4：盒子-外部 */
    padding: ;                      p10
    padding-top: ;                  pt10
    padding-right: ;                pr10
    padding-bottom: ;               pb10
    padding-left: ;                 pl10

    margin: ;                       mg10
    margin-top: ;                   mgt10
    margin-right: ;                 mgr10
    margin-bottom: ;                mgb10
    margin-left: ;                  mgr10

    border: ;                       bd
    border-top: ;                   bdt10
    border-width: ;                 bdw10
    border-bottom-width: ;          bdbw10
    border-style: ;                 bds
    border-left-style: ;            bdls
    border-color: ;                 bdc
    border-right-color: ;           bdrc

    width: ;                        w10
    min-width: ;                    miw10
    max-width: ;                    maw10
    height: ;                       h10
    /* 内容长度会改变 */
    min-height: ;                   mih10
    max-height: ;                   mah10

    /* 5：盒子-装饰 */
    /* 是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。 */
    outline: ;                      ol
    /* 设置列表项标记的类型 */
    list-style: ;                   lstyle

    /* 6: 表格 */
    table-layout: ;                 tlayout   /* 显示表格单元格、行、列的算法规则。*/
    caption-side: ;                 cs        /* 属性设置表格标题的位置。*/
    border-collapse: ;              bcollapse /* 表格的边框是否被合并为一个单一的边框 */
    border-spacing: ;               bspacing  /* 相邻单元格的边框间的距离 */
    empty-cells: ;                  ecells    /* 是否显示表格中的空单元格 * /

    /* 6：字体 */
    /* 垂直方向居中, 大小等于 height */
    line-height: ;                  lh10px
    /* 行内元素的基线相对于该元素所在行的基线的垂直对齐 */
    vertical-align: top;            vta
    /* 水平方向居中 */
    text-align: center;
    text-indent: ;
    text-transform: ;
    text-decoration: ;
    font: ;                         f
    font-family: ;                  ff
    font-size: ;                    fsize
    font-weight: ;                  fw700
    letter-spacing: ;
    word-spacing: ;
    color: ;                        cr

    /* 7:背景 */
    background: ;
    background-image: ;
    background-repeat: ;
    background-position: ;

    /* 超出显示...(two) */
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;               ovfh

    opacity: ;                      op
    cursor: ;
    content: ;
    quotes: ;
    transition: ;                   trs
    transform: ;
}
```
