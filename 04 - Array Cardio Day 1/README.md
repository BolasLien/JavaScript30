# 04 陣列操作 Day1

## 為什麼要學陣列操作
for迴圈也能解上述的需求，但是用陣列操作的函式則可以寫得更少，做得更多

## 需求
1. 過濾出15世紀出生的人
2. 用一個Array來裝人名
3. 依照出生日期，由老到年輕來排序
4. 把每個人的年紀加總起來
5. 依照活了幾年來排序
6. 把有'de'的名稱做成一個列表
7. 按照姓氏字母來排序
8. 加總每個字出現的次數

## 此章節教到的函式
### Array.prototype.filter()
`過濾`陣列的元素，`符合條件`的元素會`留下來`做成新的陣列。

#### 怎麼寫?
```javascript
const fruits = [
  { price: 15, name:'apple'},
  { price: 29, name:'banana'},
  { price: 90, name:'coconut'},
  { price: 365, name:'durian'},
  { price: 99, name:'grape'},
  { price: 19, name:'kiwi'}
]

// 從{array}找符合{condition}的{element}，留下來做成新的陣列
// array.filter(element => condition)
const array1 = fruits.filter(fruit => fruit.price < 30)
console.log(array1) // [{price: 15, name: "apple"}, {price: 29, name: "banana"} ,{price: 19, name: "kiwi"}]
```
[Array.prototype.filter() - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
### Array.prototype.map()
回傳`執行後`的`結果`，做成新的陣列。
* 不會影響原始的陣列
#### 怎麼寫?
```javascript
const productPrice = [
  {product: 'apple',cost:30},
  {product: 'phone',cost:20000},
  {product: 'watch',cost:13000},
  {product: 'computer',cost:48000},
]

// 把{array}中的{element}拿出來做{callback}，將 結果 做成新的陣列
const array = productPrice.map(product=>{
  // 稅後售價
  const retail = product.cost * 1.05
  return {...product, retail}
})

console.log(array);
// {product: "apple", cost: 30, retail: 31.5}
// {product: "phone", cost: 20000, retail: 21000}
// {product: "watch", cost: 13000, retail: 13650}
// {product: "computer", cost: 48000, retail: 50400}
```
[Array.prototype.map() - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
### Array.prototype.sort()
`排序`陣列中的元素，做成新的陣列。
* 如果直接使用`array.sort()`而不是`array.sort(比較函式)`，元素就會轉成字串，並且用 Unicode 編碼位置來進行排序，也就是說9會排在80後面。
* 比較函式：`compare(a),b)`，`a`跟`b`是要比較的兩個元素。
    * `compare(a,b)`回傳值`小於0`時，代表`a`排在`b`之前
    * `compare(a,b)`回傳值`大於0`時，代表`a`排在`b`之後
    * `compare(a,b)`回傳值`等於0`時，`a`跟`b`不變動位置。
* 陣列長度如果`小於10`，會用`Insertion sort`來排序；否則用`Quick sort`來排序(chrome v8)


#### 怎麼寫?
```javascript
const numbers = [2, 52, 1, 19, 43, 15, 30]

// 不帶入比較函式
const array1 = numbers.sort()
console.log(array1); // [1, 15, 19, 2, 30, 43, 52]

// 帶入比較函式
const array2 = numbers.sort(function(a, b) {
  // 為何放a-b?
  // a如果比較大，結果會大於0
  // a如果比較小，結果會小於0
  return a - b
})
console.log(array2); // [1, 2, 15, 19, 30, 43, 52]
```
[Array.prototype.sort() - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
[[偷米騎巴哥] 20180412 前端踩雷日記(解開Sort不穩定現象之謎)](https://www.youtube.com/watch?v=ql4CpdIYLfo&t=826s)
[【TBS Learning】演算法-六種排序法之五:快速排序法(quick sort)](https://www.youtube.com/watch?v=5nXrEBhBFpU)
[【TBS Learning】演算法-六種排序法之二:插入排序法(insertion sort)](https://www.youtube.com/watch?v=DfloPvgptJA)
[Array sort() 陣列排序 - JavaScript (JS) 教學 Tutorial](https://www.fooish.com/javascript/array/sort.html)
### Array.prototype.reduce()

#### 怎麼寫?
```javascript

```
[Array.prototype.reduce() - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

## 補充
### 除了console.log，你還可以...
console.table()可以用表格的方式呈現物件內容
```javascript
let a = [
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
]
console.log(a)
console.table(a)
```
![](https://i.imgur.com/8tFSIa6.png)


### 串字串
文字可以用`+`來串起來，或是用`template strings`串起來
```javascript
// string
let fullName = firstName + ' ' + lastName

// template strings
let fullName = `${firstName} ${lastName}`
```
[樣板字面值 - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Template_literals)

### 條件運算子(三元運算子)
如果判斷回傳的東西很簡單，用ternary operator(條件運算子/三元運算子)來取代if else..可以少寫很多行
```javascript
// if else ...
function (a,b) {
  if(a.year > b.year){
    return 1
  } else {
    return -1
  }
}

// ternary operator
function (a,b) {
  return a.year > b.year ? 1 : -1
}
```
[條件運算子 - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

### 轉陣列的方式
轉成陣列有兩種方法，`Array.from()`或是spread syntax(展開運算子)
* `Array.from()`依照兩種規則建立物件
  * array-like:具有`length`屬性以及索引化的元素
  * iterable:例如可以用`for..of`來迭代出值的元素
```javascript
// querySelectorAll回傳的東西是NodeList，並非Array，所以我們要先轉型才能進行陣列操作
const aList = document.querySelectorAll('.mw-category a')

// Array.from()
const aArray = Array.from(aList)

// Spread syntax(展開運算子)
const aArray = [...aList]
```
[Array.from() - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

[Spread syntax (...) - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

[[筆記] JavaScript ES6 中的展開運算子（spread operator）和其餘運算子（rest operator）](https://pjchender.blogspot.com/2017/01/es6-spread-operatorrest-operator.html)


### 更快的把陣列或物件的值存成變數
利用destructuring assignment(解構賦值)，把陣列或物件的資料，存成獨立的變數
```javascript
const foo = ['one','two','three']

// 一般都這樣寫
const a = foo[0]
const b = foo[1]
const c = foo[2]

console.log(a) // 'one'
console.log(b) // 'two'
console.log(c) // 'three'

// 解構賦值這樣寫
const [a,b,c] = foo

console.log(a) // 'one'
console.log(b) // 'two'
console.log(c) // 'three'
```
[解構賦值 - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

