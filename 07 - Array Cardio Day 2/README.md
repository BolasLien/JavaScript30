# 07 陣列操作 Day2

## 需求
* 判斷至少一個人是成年人
* 判斷每個人都是成年人
* 根據ID來找到對應的comment
* 根據ID來找到該資料的index，並且刪除comment

## 此章節教到的函式
### Array.prototype.some()
`至少一個`元素符合條件，就回傳`true`，否則回傳`false`

### Array.prototype.every()
`全部`元素都符合條件，就回傳`true`，否則回傳`false`

### Array.prototype.find()
回傳`一個`符合條件的元素

### Array.prototype.findIndex()
回傳`一個`符合條件的元素的`索引值`


### Array.prototype.splice()
對陣列做`刪除`或`插入`資料。
* 會改變原始陣列的內容

### 怎麼寫?
```javascript
const fruit = ['apple','banana','coconut','durian','grape','kiwi']

// 從第{start}開始，刪除{n}筆資料
// 這時的fruit = ['apple','banana','coconut','durian','grape','kiwi']
fruit.splice(1,2)
console.log(fruit) // ['apple','durian','grape','kiwi']

// 在{start}的位置插入{item}
// 這時的fruit = ['apple','durian','grape','kiwi']
fruit.splice(1,0,'cherry')
console.log(fruit) // ['apple','cherry','durian','grape','kiwi']

// 從第{start}開始，刪除{n}筆資料，並在{start}的位置插入{item}
// 這時的fruit = ['apple','cherry','durian','grape','kiwi']
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

// 拷貝{start}到{end}之前的資料
// 不包含end
const array1 = fruit.slice(0,3)
console.log(array1) // ["apple", "banana", "coconut"]

// 拷貝{start}之後所有資料
const array2 = fruit.slice(2)
console.log(array2) // ["coconut", "durian", "grape", "kiwi"]

// 拷貝倒數{-n}個資料
const array3 = fruit.slice(-2)
console.log(array3) // ["grape", "kiwi"]
```
* 若`slice(n)`的`n`為`0`或是`undefined`，則會從0開始拷貝陣列。


[Array.prototype.slice() - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)