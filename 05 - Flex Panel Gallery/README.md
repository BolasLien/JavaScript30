05 有彈性的圖片效果

## 需求
* 點擊其中一個圖片，該圖片會向兩旁展開
* 圖片展開之後，會有上下文字進場效果
* 再點擊一次圖片，則會從兩旁縮回原本大小並且文字恢復原本位置

## 額外做的功能
* 修正連續點兩下，動畫效果會亂掉的問題。

## 補充
### 用js開關css效果
```javascript
const panel = document.querySelector('.panel')

panel.addEventListener('click',function(){
  // 觸發點擊事件的時候，如果class沒有'open'，就加入/如果有'open'，就移除
  this.classList.toggle('open')
})
```

### flex屬性
`flex`是一個縮寫的屬性，其中包含
* `flex-grow`
* `flex-shrink`
* `flex-basis`
[flex - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)