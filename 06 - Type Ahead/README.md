# 06 提前輸入(自動完成、搜尋建議)

## 什麼是typeahead?
又稱autocomplete、autosuggest，通常用在搜尋功能上。
隨著輸入的文字，搜尋介面會產生列表，預測接下來要輸入的內容。

## 需求
* 透過ajax來取得資料
* 輸入文字後，在搜尋欄下方產生符合的城市列表
* 輸入的文字與城市列表當中符合的文字要做高亮的顯示
* 城市人口的數字每三位數需要有逗號`,`

## 額外做的功能
* 另外做了一個台鐵的版本

## 補充
### regular expression 正則表達式(正規表達式)
被用來比對字串中的字元組合。

#### 怎麼寫?
```javascript
// 1. 用javascript的RegExp來寫
const re = new RegExp("aaa","gi");

// 2. regular expression literal
const re = /aaa/gi;
```
其中，`aaa`是要比對的文字；`gi`代表修飾詞，可以影響比對結果。
* `i` 不分大小寫
* `g` 找全部符合的結果(如果沒有g的話，只會回傳第一個找到的結果)

[Regex 修飾詞 Flags - 正規表示法教學 Regular Expression Tutorial](https://www.fooish.com/regex-regular-expression/flags.html)

[正则表达式](https://zh.javascript.info/regular-expressions)

[3-15：正規表示法：表單資料驗證](http://www1.nttu.edu.tw/klou/course/921/js/09-regular.htm)

[正規表達式 - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Regular_Expressions)

### String.prototype.replace()
在字串中比對符合的字元，將符合的字元覆蓋掉之後，回傳新的字串
* 這個方法不會改變原始的字串

#### 怎麼寫?
```javascript
const proverb = 'An apple a day, keeps the doctor away.'

// 1. 帶入字串,替換字串 replace(substr, newSubstr)
const p1 = proverb.replace('apple','egg')

// 2. 帶入正規表達式,替換字串 replace(regexp, newSubstr)
const p2= proverb.replace(/day/i,'month')

console.log(p1) // An egg a day, keeps the doctor away.
console.log(p2) // An apple a month, keeps the doctor away.
```

[String.prototype.replace() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

### String.prototype.match()
在字串中比對符合的字元，回傳符合結果的陣列。

#### 怎麼寫?
```javascript
const proverb = 'An apple a day, keeps the doctor away.'

// 帶入正規表達式 match(regexp)
const matchArray = proverb.match(/a/gi)

console.log(matchArray) //["A", "a", "a", "a", "a", "a"]
```

[String.prototype.match() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)