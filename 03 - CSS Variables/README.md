# Day3 用JS更新CSS變數
## 需求
* 定義css的變數
* 用拖曳的bar可以動態更新圖片與背景的間隙、模糊度
* 選色器，選擇圖片的背景色及標題JS顏色

## 補充
* NodeList[]並不是Array喔
* 甚麼是dataset?
在標籤裡面自訂的`data-*`屬性，是一個物件
* `:root`是css偽類，通常會在`:root`宣告css變數`--*`
* css變數的使用方式`var(--*)`

## 參考
[MDN/setProperty()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty)
[MDN/:root](https://developer.mozilla.org/en-US/docs/Web/CSS/:root)
[MDN/css variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)