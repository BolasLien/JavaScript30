# 01 爵士鼓

## 需求
### 按下按鈕會發生的事情
* 透過keycode來判斷按的是哪個按鈕
* 會播放對應的key的音效
* 按鈕會放大
### 按完之後要發生的事情
* 按鈕恢復原本的樣式

## 補充
### 如何偵測使用者按下鍵盤?
這裡使用到了`window.addEventListener('keydown',onKeyDown)`
* `window.addEventListnenr`可以當作在畫面上放一個監聽器
* `'keydown'`代表`使用者按下鍵盤`
* `onKeyDown`則是`當使用者按下鍵盤會發生的事情`

[EventTarget.addEventListener() - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

### 用js添加/刪除class
```html
<style>
.playing{
  transform: scale(1.1);
  border-color: #ffc600;
  box-shadow: 0 0 1rem #ffc600;
}

</style>

<div id="target"></div>

<script>
  const target = document.querySelector('#target')

  // target添加.playing後，會有.playing的樣式
  // <div id="target" class="playing"></div>
  target.classList.add('playing')

  // target刪除.playing後，會移除.playing的樣式
  // <div id="target" class=""></div>
  target.classList.remove('playing')
</script>

```

[Element.classList - Web APIs | MDN](https://developer.mozilla.org/zh-TW/docs/Web/API/Element/classList)