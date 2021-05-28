# 07 陣列操作 Day2

## 需求
* 判斷至少一個人是成年人
* 判斷每個人都是成年人
* 根據ID來找到對應的comment
* 根據ID來找到該資料的index，並且刪除comment

## 此章節教到的函式
### Array.prototype.some()
針對陣列中的每個元素，執行callback，當`至少一個`元素符合條件，就回傳`true`，否則回傳`false`

#### 怎麼寫?
```javascript
const number = [18, 20, 65, 88, 131, 168]

// 判斷{array}是否至少有一個{element}符合{condition}

// 1. 把callback寫成function來使用
// array.some(callback)
function callback(element) {
  return element === 65
}
const boolean1 = number.some(callback)
console.log(boolean1) // true

// 2. 把callback寫在括號內
// array.some(function(element){ return condition })
const boolean2 = number.some(function(element){
  return element < 20
})
console.log(boolean2) // true

// 3. 把callback寫成箭頭函式
// array.some(element => condition)
const boolean3 = number.some(element => element > 200)
console.log(boolean3) // false
```

[Array.prototype.some() - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

### Array.prototype.every()
針對陣列中的每個元素，執行callback，當`全部`元素都符合條件，就回傳`true`，否則回傳`false`

#### 怎麼寫?
```javascript
const number = [18, 20, 65, 88, 131, 168]

// 判斷{array}是否全部的{element}符合{condition}

// 1. 把callback寫成function來使用
// array.some(callback)
function callback(element) {
  return element === 18
}
const boolean1 = number.every(callback)
console.log(boolean1) // false

// 2. 把callback寫在括號內
// array.some(function(element){ return condition })
const boolean2 = number.every(function(element){
  return element <= 10
})
console.log(boolean2) // false

// 3. 把callback寫成箭頭函式
// array.some(element => condition)
const boolean3 = number.every(element => element < 200)
console.log(boolean3) // true
```
[Array.prototype.every() - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/every)


### Array.prototype.find()
針對陣列中的每個元素，執行callback，回傳`一個`符合條件的元素的`值`，否則回傳`undefined`

#### 怎麼寫?
```javascript
const employee = [
  {name:'Amy',department:'AD', phone:1000},
  {name:'Betty',department:'IT', phone:1200},
  {name:'Mary',department:'PM', phone:1300},
  {name:'Susan',department:'MIS', phone:1400},
  {name:'Bill',department:'MIS', phone:1405},
]

// 從{array}找符合{condition}的{element}的值

// 1. 把callback寫成function來使用
// array.find(callback)
function callback(element) {
  return element.phone === 1200
}
const value1 = employee.find(callback)
console.log(value1) // {name: "Betty", department: "IT", phone: 1200}

// 2. 把callback寫在括號內
// array.find(function(element){ return condition })
const value2 = employee.find(function(element){
  return element.department === 'MIS'
})
console.log(value2) // {name: "Susan", department: "MIS", phone: 1400}

// 3. 把callback寫成箭頭函式
// array.find(element => condition)
const value3 = employee.find(element => element.name === 'Bill')
console.log(value3) // {name: "Bill", department: "MIS", phone: 1405}
```

[Array.prototype.find() - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

### Array.prototype.findIndex()
針對陣列中的每個元素，執行callback，回傳`一個`符合條件的元素的`索引值`，否則回傳`-1`

#### 怎麼寫?
```javascript
const employee = [
  {name:'Amy',department:'AD', phone:1000},
  {name:'Betty',department:'IT', phone:1200},
  {name:'Mary',department:'PM', phone:1300},
  {name:'Susan',department:'MIS', phone:1400},
  {name:'Bill',department:'MIS', phone:1405},
]

// 從{array}找符合{condition}的{element}的索引值

// 1. 把callback寫成function來使用
// array.findIndex(callback)
function callback(element){
  return element.phone === 1200
}

const index1 = employee.findIndex(callback)
console.log(index1) // 1

// 2. 把callback寫在括號內
// array.findIndex(function(element){ return condition })
const index2 = employee.findIndex(function(element){
  return element.department === 'MIS'
})
console.log(index2) // 3

// 3. 把callback寫成箭頭函式
// array.findIndex(element => condition)
const index3 = employee.findIndex(element => element.name === 'Bill')
console.log(index3) // 4
```

[Array.prototype.findIndex() - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

### Array.prototype.splice()
對陣列做`刪除`或`插入`資料。
* 會改變原始陣列的內容

#### 怎麼寫?
```javascript
const fruit = ['apple','banana','coconut','durian','grape','kiwi']

// array.splice(start,n)
// 從第{start}開始，刪除{n}筆資料
fruit.splice(1,2)
console.log(fruit) // ['apple','durian','grape','kiwi']

// array.splice(start,0,item)
// 在{start}的位置插入{item}
fruit.splice(1,0,'cherry')
console.log(fruit) // ['apple','cherry','durian','grape','kiwi']

// array.splice(start,n,item)
// 從第{start}開始，刪除{n}筆資料，並在{start}的位置插入{item}
fruit.splice(1,2,'berry')
console.log(fruit) // ["apple", "berry", "grape", "kiwi"]
```


[Array.prototype.splice() - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

### Array.prototype.slice()
`拷貝`陣列的資料。
* 會回傳新的陣列，不會改變原始陣列。

#### 怎麼寫?
```javascript
const fruit = ['apple','banana','coconut','durian','grape','kiwi']

// array.slice(start,end)
// 拷貝{start}到{end}之前的資料(不包含end)
const array1 = fruit.slice(0,3)
console.log(array1) // ["apple", "banana", "coconut"]

// array.slice(start)
// 拷貝{start}之後所有資料
const array2 = fruit.slice(2)
console.log(array2) // ["coconut", "durian", "grape", "kiwi"]

// array.slice(-n)
// 拷貝倒數{-n}個資料
const array3 = fruit.slice(-2)
console.log(array3) // ["grape", "kiwi"]
```
* 若`slice(n)`的`n`為`0`或是`undefined`，則會從0開始拷貝陣列。


[Array.prototype.slice() - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)