# JS

## Cloning an object

```js
var obj = { a: 1 }
var copy = Object.assign({}, obj)
console.log(copy) // { a: 1 }
```

## Warning for Deep Clone

```js
let obj1 = { a: 0, b: { c: 0 } }
let obj2 = Object.assign({}, obj1)
console.log(JSON.stringify(obj2)) // { a: 0, b: { c: 0}}

obj1.a = 1
console.log(JSON.stringify(obj1)) // { a: 1, b: { c: 0}}
console.log(JSON.stringify(obj2)) // { a: 0, b: { c: 0}}

obj2.a = 2
console.log(JSON.stringify(obj1)) // { a: 1, b: { c: 0}}
console.log(JSON.stringify(obj2)) // { a: 2, b: { c: 0}}

<!-- 注意, obj2 影响 Object.assign 里面的 obj1 -->
obj2.b.c = 3
console.log(JSON.stringify(obj1)) // { a: 1, b: { c: 3}}
console.log(JSON.stringify(obj2)) // { a: 2, b: { c: 3}}

// Deep Clone
obj1 = { a: 0, b: { c: 0 } }
let obj3 = JSON.parse(JSON.stringify(obj1))
obj1.a = 4
obj1.b.c = 4
<!-- 注意, obj1 不影响 Object.assign 外面的 obj3 -->
console.log(JSON.stringify(obj3)) // { a: 0, b: { c: 0}}
```
