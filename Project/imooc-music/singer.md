# 热门,A,B... & 歌手数据嵌套

```js
/* handle data */
_normalizeSinger(list) {
  /* data structure */
  let map = {
    hot: {
      title: HOT_NAME,
      items: []
    }
  }
  list.forEach((item, index) => {
    /* previous 10 data, include '热门' */
    if (index < HOT_SINGER_LEN) {
      map.hot.items.push(
        new Singer({
          name: item.Fsinger_name,
          id: item.Fsinger_mid
        })
      )
    }
    /* after 10 data */
    const key = item.Findex
    /* data structure */
    if (!map[key]) {
      map[key] = {
        title: key,
        items: []
      }
    }
    map[key].items.push(
      new Singer({
        name: item.Fsinger_name,
        id: item.Fsinger_mid
      })
    )
  })
  /* handle map become order list */
  let ret = []
  let hot = []
  for (let key in map) {
    let val = map[key]
    if (val.title.match(/[a-zA-Z]/)) {
      ret.push(val)
    } else if (val.title === HOT_NAME) {
      hot.push(val)
    }
  }
  /* ascend sort */
  ret.sort((a, b) => {
    return a.title.charCodeAt(0) - b.title.charCodeAt(0)
  })
  return hot.concat(ret)
}
```
