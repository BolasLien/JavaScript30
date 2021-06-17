# 11 - Custom Video Player

## 需求
製作出影片撥放器的功能。
* 影片的撥放、暫停功能
* 拖拉進度條，影片會跳到該處
* 進度條隨時間更新
* 可以調整音量大小
* 可以調整撥放速率
* 可以跳到25s後或回到10s前

## HTMLVideoElement
繼承`HTMLMediaElement`，Play跟Pause的功能來自於此。


## 補充
### 用邏輯判斷 &&, || 來改寫 if (短路求值 Short-circuit evaluation)
先講結論
* 用 `||` 來設定變數的預設值
* 用 `&&` 來檢查物件屬性是否存在

#### &&, || 介紹

#### `||`如何改寫if
舉一個例子，如果data沒有資料的時候，要印出`沒有data`的訊息。
```javascript
let data = null

// if的寫法
if (!data) {
  console.log('沒有data');
}

// `||`的寫法
data || console.log('沒有data');
```

#### `&&`如何改寫if
舉個例子，如果customer有job的屬性，就要印出customer的job的值。
```javascript
const customer = {
  name: 'Amy',
  age: '18',
  job: 'teacher'
}

// if 的寫法
if(customer.job) {
  console.log(customer.job);
}

// 改寫成 && 的話
customer.job && console.log(customer.job)
```


[Logical AND (&&) - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)
[Logical OR (||) - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)
[JS 中 if / if...else...替换方式](https://segmentfault.com/a/1190000015809529)
[JavaScript基本功修練：Day9 - 短路求值與條件運算子的應用](https://ithelp.ithome.com.tw/articles/10243261)
[短路求值](https://zh.wikipedia.org/wiki/%E7%9F%AD%E8%B7%AF%E6%B1%82%E5%80%BC)
[JavaScript: What is short-circuit evaluation? | by Brandon Morelli | codeburst](https://codeburst.io/javascript-what-is-short-circuit-evaluation-ff22b2f5608c)


### 訪問物件的屬性
```javascript
// 物件屬性名稱可以是任何字串，包括空字串。
const car = {
  'myCar': 'Honda',
  getCar: 'Suzuki',
  buyCar: buyCar,
  '?': 'You have a lucky chance to get a free car.'
}

function buyCar(){
  return 'Toyota'
}

// 訪問屬性的值
// 可以用 `.` 來訪問
console.log(car.myCar) // Honda
// 也可以用 `[]` 來訪問，但是要加上引號 `' '` `" "`
console.log(car['getCar']) // Suzuki
// 沒有加上引號的，會視為一個變數，當這個變數沒有被宣告，就會拋出錯誤
console.log(car[getCar]) // Uncaught ReferenceError: getCar is not defined

// 訪問屬性的值是function
// 有沒有下執行符號 `()` 得到的值會不一樣
console.log(car.buyCar) // 拿到的值是一個function物件
console.log(car['buyCar']) // 拿到的值是一個function物件
console.log(car.buyCar()) // 拿到的值是function回傳值
console.log(car['buyCar']()) // 拿到的值是function回傳值

// 訪問屬性的名稱是符號
// 就不能用 `.` 來訪問該屬性
// 但可以用 `[]` 來訪問
// console.log(car.'?') // Uncaught SyntaxError: Unexpected string
// console.log(car.?) // Uncaught SyntaxError: Unexpected token '?'
console.log(car['?']) // You have a lucky chance to get a free car.
```

[物件字面值 (Object literals)](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Grammar_and_types#%E7%89%A9%E4%BB%B6%E5%AD%97%E9%9D%A2%E5%80%BC_object_literals)