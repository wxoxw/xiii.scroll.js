# xiii.scroll.js
指定した位置まで滑らかにスクロールさせるJavaScriptライブラリ

## Function

    XIII.scroll(target:Element, targetDuration:Number = 1):void
    XIII.scroll(targetElementId:String, targetDuration:Number = 1):void
    XIII.scroll(targetY:Number, targetDuration:Number = 1):void

使用例

```html
<script src="xiii.scroll.compiled.js"></script>
<script>

  var rect = document.createElement("div");

  rect.setAttribute("id", "RECT");
  rect.style.position = "absolute";
  rect.style.width = "2000px";
  rect.style.height = "2000px";
  rect.style.left = "0px";
  rect.style.top = "1000px";
  rect.style.backgroundColor = "#ccf";

  document.body.appendChild(rect);
  
  document.addEventListener("click", function() {
  
    // 以下は全て同じ結果になる
    XIII.scroll(rect, 1);
    // XIII.scroll("RECT", 1);
    // XIII.scroll(1000, 1);
  
  }, false);

</script>
```

## Browser
- Google Chrome
- FireFox
- Opera
- IE9+
- Androidブラウザ
