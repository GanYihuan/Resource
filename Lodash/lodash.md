# lodash

## 1. N 次循环

```js
// js原生的循环方法
for (var i = 0; i < 5; i++) {
  console.log(i)
}
// ladash的times方法
_.times(5, function(a) {
  console.log(a)
})
// for 语句是执行循环的不二选择，Array.apply 也可以模拟循环，但在上面代码的使用场景下，_.times() 的解决方式更加简洁和易于理解。
```

## 2. 深层查找属性值

```js
// Fetch the name of the first pet from each owner
var ownerArr = [
  {
    owner: 'Colin',
    pets: [{ name: 'dog1' }, { name: 'dog2' }]
  },
  {
    owner: 'John',
    pets: [{ name: 'dog3' }, { name: 'dog4' }]
  }
]
// jsMap
var jsMap = ownerArr.map(function(owner) {
  return owner.pets[0].name
})
console.log(jsMap)
// Lodash
var lodashMap = _.map(ownerArr, 'pets[0].name')
console.log(lodashMap)
// 使用 pets[0].name 字符串对嵌套数据取值的方式简化了很多冗余的代码，类似使用 jQuery 选择 DOM 节点 ul > li > a，通过一个字符串而不是回调函数来浏览深度嵌套的对象属性
```

## 3. 个性化数组

```js
// Array's map method.
Array.apply(null, Array(6)).map(function(item, index) {
  return 'ball_' + index
})
// Lodash
_.times(6, _.uniqueId.bind(null, 'ball_'))
// Lodash
_.times(6, _.partial(_.uniqueId, 'ball_'))
// eg. [ball_0, ball_1, ball_2, ball_3, ball_4, ball_5]
// 在上面的代码中，我们要创建一个初始值不同、长度为 6 的数组，其中 _.uniqueId 方法用于生成独一无二的标识符（递增的数字，在程序运行期间保持独一无二），_partial 方法是对 bind 的封装。
```

## 4. 深拷贝

```js
var objA = {
  name: 'colin'
}
// Normal method? Too long. See Stackoverflow for solution:
// http://stackoverflow.com/questions/4459928/how-to-deep-clone-in-javascript
// Lodash
var objB = _.cloneDeep(objA)
console.log(objA)
console.log(objB)
console.log(objA === objB)
// JavaScript 没有直接提供深拷贝的函数，但我们可以用其他函数来模拟，比如 JSON.parse(JSON.stringify(objectToClone))，但这种方法要求对象中的属性值不能是函数。Lodash 中的 _.cloneDeep 函数封装了深拷贝的逻辑
```

## 5. 随机数

```js
// Naive utility method
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}
console.log(getRandomNumber(15, 20))
// lodash
console.log(_.random(15, 20))
// 使用 _.random(15, 20, true) 还可以在 15 到 20 之间生成随机的浮点数。
```

## 6. 对象扩展

```js
// Adding extend function to Object.prototype
Object.prototype.extend = function(obj) {
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      this[i] = obj[i]
    }
  }
}
var objA = { name: 'colin', car: 'suzuki' }
var objB = { name: 'james', age: 17 }
objA.extend(objB)
console.log(objA) // {"name": "james", "age": 17, "car": "suzuki"};
// Lodash
console.log(_.assign(objA, objB))
// _.assign 是浅拷贝，和 ES6 新增的 Ojbect.assign 函数功能一致（建议优先使用 Object.assign）。接收多个参数对象进行扩展，都是往后面的对象上合并
```

## 7. 筛选属性

```js
// Naive method: Remove an array of keys from object
Object.prototype.remove = function(arr) {
  var that = this
  arr.forEach(function(key) {
    delete that[key]
  })
}

var objA = { name: 'colin', car: 'suzuki', age: 17 }

objA.remove(['car', 'age'])
objA // {"name": "colin"}

// Lodash
objA = _.omit(objA, ['car', 'age'])
// => {"name": "colin"}
objA = _.omit(objA, 'car')
// => {"name": "colin", "age": 17};
objA = _.omit(objA, _.isNumber)
// => {"name": "colin"};
// 大多数情况下，Lodash 所提供的辅助函数都会比原生的函数更贴近开发需求。在上面的代码中，开发者可以使用数组、字符串以及函数的方式筛选对象的属性，并且最终会返回一个新的对象，中间执行筛选时不会对旧对象产生影响。

// Naive method: Returning a new object with selected properties
Object.prototype.pick = function(arr) {
  var _this = this
  var obj = {}
  arr.forEach(function(key) {
    obj[key] = _this[key]
  })

  return obj
}

var objA = { name: 'colin', car: 'suzuki', age: 17 }

var objB = objA.pick(['car', 'age'])
// {"car": "suzuki", "age": 17}

// Lodash
var objB = _.pick(objA, ['car', 'age'])
// {"car": "suzuki", "age": 17}
// _.pick 是 _.omit 的相反操作，用于从其他对象中挑选属性生成新的对象。
```

## 8. 随机元素

```js
var luckyDraw = ['Colin', 'John', 'James', 'Lily', 'Mary']

function pickRandomPerson(luckyDraw) {
  var index = Math.floor(Math.random() * (luckyDraw.length - 1))
  return luckyDraw[index]
}

pickRandomPerson(luckyDraw) // John

// Lodash
_.sample(luckyDraw) // Colin

// Lodash - Getting 2 random item
_.sample(luckyDraw, 2) // ['John','Lily']
// _.sample 支持随机挑选多个元素并返回心的数组。
```

## 9. 针对 JSON.parse 的错误处理

```js
// Using try-catch to handle the JSON.parse error
function parse(str) {
  try {
    return JSON.parse(str)
  } catch (e) {
    return false
  }
}

// With Lodash
function parseLodash(str) {
  return _.attempt(JSON.parse.bind(null, str))
}

parse('a')
// => false
parseLodash('a')
// => Return an error object

parse('{"name": "colin"}')
// => Return {"name": "colin"}
parseLodash('{"name": "colin"}')
// => Return {"name": "colin"}
// 如果你在使用 JSON.parse 时没有预置错误处理，那么它很有可能会成为一个定时炸弹，我们不应该默认接收的 JSON 对象都是有效的。try-catch 是最常见的错误处理方式，如果项目中 Lodash，那么可以使用 _.attmpt 替代 try-catch 的方式，当解析 JSON 出错时，该方法会返回一个 Error 对象。
```

## 10 从列表中随机的选择列表项

```js
var smartTeam = ['戈德斯文', '杨海月', '柴硕', '师贝贝']
function randomSmarter(smartTeam) {
  var index = Math.floor(Math.random() * smartTeam.length)
  return smartTeam[index]
}
console.log(randomSmarter(smartTeam))
// Lodash
console.log(_.sample(smartTeam))
// _.sampleSize(smartTeam,n), n为需要返回的元素个数
console.log(_.sampleSize(smartTeam, 2))
```

## 11 判断对象中是否含有某元素

```js
var smartPerson = {
  name: '戈德斯文',
  gender: 'male'
}
var smartTeam = ['戈德斯文', '杨海月', '柴硕', '师贝贝']
// _.includes()第一个参数是需要查询的对象，第二个参数是需要查询的元素，第三个参数是开始查询的下标
console.log(_.includes(smartPerson, '戈德斯文'))
console.log(_.includes(smartTeam, '杨海月'))
console.log(_.includes(smartTeam, '杨海月', 2))
```

## 12 遍历循环

```js
_([1, 2]).forEach(function(value) {
  console.log(value)
})
_.forEach([1, 3], function(value, key) {
  console.log(key, value)
})
// 都会分别输出‘1’和‘2’, 传入的是对象的时候，key是属性，value是值
```

## 13 遍历循环执行某个方法

```js
function square(n) {
  return n * n
}
console.log(_.map([4, 8], square))
// => [16, 64]
console.log(_.map({ a: 4, b: 8 }, square))
// => [16, 64] (iteration order is not guaranteed)
var users = [{ user: 'barney' }, { user: 'fred' }]
// The `_.property` iteratee shorthand.
console.log(_.map(users, 'user'))
// => ['barney', 'fred']
```

## 14 检验值是否为空

```js
_.isEmpty(null)
// => true
_.isEmpty(true)
// => true
_.isEmpty(1)
// => true
_.isEmpty([1, 2, 3])
// => false
_.isEmpty({ a: 1 })
// => false
```

## 15 查找属性

```js
var users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 1, active: true }
]
console.log(
  _.find(users, function(o) {
    return o.age < 40
  })
)
console.log(_.find(users, { age: 1, active: true }))
console.log(_.filter(users, { age: 1, active: true }))
console.log(_.find(users, ['active', false]))
console.log(_.filter(users, ['active', false]))
console.log(_.find(users, 'active'))
console.log(_.filter(users, 'active'))
// _.find() 第一个返回真值的第一个元素。
// _.filter() 返回真值的所有元素的数组。
// _.reject() 是 _.filter 的反向方法，不返回真值的（集合）元素
```

## 16 数组去重

```js
var arr1 = [2, 1, 2]
var arr2 = _.uniq(arr1)
function unique(arr) {
  var newArr = []
  for (var i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) == -1) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
console.log(arr1)
console.log(arr2)
console.log(unique(arr1))
// _.uniq(array)创建一个去重后的array数组副本。
```

## 17 模板插入

```js
<script type="text/javascript">
    $(function () {
        var data = [{name: '戈德斯文'}, {name: '柴硕'}, {name: '杨海月'}];
        var t = _.template($("#tpl").html());
        $("#container").html(t(data));
    });
</script>
<script type="text/template" id="tpl">
    <% _.each(obj,function(e,i){ %>
        <ul>
            <li><%= e.name %><%= i %></li>
        </ul>
    <%})%>
</script>
```

## 18 orderBy

```js
var users = [
  { user: 'fred', age: 48 },
  { user: 'barney', age: 34 },
  { user: 'fred', age: 40 },
  { user: 'barney', age: 36 }
]
// Sort by `user` in ascending order and by `age` in descending order.
_.orderBy(users, ['user', 'age'], ['asc', 'desc'])
```
