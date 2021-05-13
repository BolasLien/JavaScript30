# Day4 陣列操作 Day1

## 需求
1. 過濾出15世紀出生的人
2. 用一個Array來裝人名
3. 依照出生日期，由老到年輕來排序
4. 把每個人的年紀加總起來
5. 依照活了幾年來排序
6. 把有'de'的名稱做成一個列表
7. 按照姓氏字母來排序
8. 加總每個字出現的次數

## 為什麼要學陣列操作
for迴圈也能解上述的需求，但是用陣列操作的函式則可以寫得更少，做得更多

## 此章節教到的函式
### Array.prototype.filter()
### Array.prototype.map()
### Array.prototype.sort()
### Array.prototype.reduce()

## 補充
* console.table()可以用表格的方式呈現物件內容
* 文字可以用`+`來串起來，或是用`template strings`串起來
```javascript
// string
let fullName = firstName + ' ' + lastName

// template strings
let fullName = `${firstName} ${lastName}`

```
* 如果判斷回傳的東西很簡單，用ternary operator(三元運算子)來取代if else..可以少寫很多行
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
* 利用destructuring assignment(解構賦值)，把陣列或物件的資料，存成獨立的變數
```javascript
  const foo = ['one','two','three']
  const [a,b,c] = foo

  console.log(a) // 'one'
  console.log(b) // 'two'
  console.log(c) // 'three'
```

