# 03 用JS更新CSS變數
## 需求
* 定義css的變數
* 用拖曳的bar可以動態更新圖片與背景的間隙、模糊度
* 選色器，選擇圖片的背景色及標題JS顏色

## 補充
### NodeList是甚麼?
NodeList是`Node.childNodes`及`document.querySelectorAll()`回傳的`元素節點集合`
NodeList並不是Array，所以不能直接用Array.prototype來操作，但它可以使用`forEach()`來操作裡面的節點

[NodeList - Web APIs | MDN](https://developer.mozilla.org/zh-TW/docs/Web/API/NodeList)

### 用js改變css
```javascript
// 把body的width改為300px
document.body.style.setProperty('width','300px')
```
[CSSStyleDeclaration.setProperty() - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty)

### 甚麼是dataset?
在標籤裡面自訂的`data-*`屬性，是一個物件
```html
<!-- data-sizing -->
<input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px">

<!-- js使用data-sizing -->
<script>
  const input = document.querySelector('#spacing')

  let unit = input.dataset.sizing
  console.log(unit) //'px'
</script>
```
[HTMLElement.dataset - Web APIs | MDN](https://developer.mozilla.org/zh-TW/docs/Web/API/HTMLOrForeignElement/dataset)

[Using data attributes - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

### 怎麼使用css變數?
`:root`是css偽類，它代表`<html>`，通常會在`:root`宣告css變數`--*`來當作全域變數，用`var(--*)`來使用變數
```html
<style>
  /* 宣告css變數 */
  :root{
    --spacing: 10px;
    --blur: 10px;
    --base: #ffc600;
  }

  /* 使用css變數 */
  .hl{
    color: var(--base);
  }

  img{
    background-color: var(--base);
    padding: var(--spacing);
    filter: blur(var(--blur));
  }
</style>
```
[:root - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:root)

[Using CSS custom properties (variables) - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
