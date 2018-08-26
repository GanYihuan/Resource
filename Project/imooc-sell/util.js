/**
 * parse url parameter
 * @example ?id=12345&a=b
 * @return Object {id:12345,a:b}
 */
export function urlParse () {
  // get url
  // window.location.search: ?id=12345&a=b
  let url = window.location.search
  let obj = {}
  // part1: ?id=12345
  // [?&] -> ?
  // [^?&]+ -> id
  // = -> =
  // [^?&]+ -> 12345
  // part2: &a=b
  // [?&] -> &
  // [^?&]+ -> a
  // = -> =
  // [^?&]+ -> b
  let reg = /[?&][^?&]+=[^?&]+/g
  // ['?id=12345', '&a=b']
  let arr = url.match(reg)
  if (arr) {
    arr.forEach((item) => {
      // item.substring(1)
      // part1: id=12345
      // part2: a=b
      // .split('=')
      // {id, 12345}, {a, b}
      let tempArr = item.substring(1).split('=')
      // url parameter: decodeURIComponent
      // tempArr[0]: id, a
      // tempArr[1]: 12345, b
      let key = decodeURIComponent(tempArr[0])
      let val = decodeURIComponent(tempArr[1])
      // {id, 12345}
      // {a, b}
      obj[key] = val
    })
  }
  return obj
}
