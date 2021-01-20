# input中replace后光标总是在最后的问题

### 直接上代码

```typescript
export const setCursorPos = (obj: any, pos: any) => {
  if (obj.setSelectionRange) {//Firefox/Safari/Chrome/Opera
    obj.focus();
    obj.setSelectionRange(pos, pos);
  } else if (obj.createTextRange) { // IE
    var range = obj.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
}

export const getCursorPos = (obj: any) => {
  let CaretPos = 0; // IE Support
  // @ts-ignore
  if (document.selection) {
    obj.focus();
    // @ts-ignore
    let Sel = document.selection.createRange();
    Sel.moveStart('character', -obj.value.length);
    CaretPos = Sel.text.length;
  } else if (obj.selectionStart || obj.selectionStart == '0') // Firefox/Safari/Chrome/Opera support
    CaretPos = obj.selectionEnd;
  return CaretPos;
}

/**
 * replace 光标问题
 * @param e
 * @param cb
 */
export const cursorPosForInput = (e: any, cb: Function) => {
  e.persist()
  let pos = getCursorPos(e.target)
  let tempVal = e.target.value;

  cb()

  setTimeout(() => {
    pos = pos - (tempVal.length - e.target.value.length)
    setCursorPos(e.target, pos);
  }, 0)
}
```

### 使用
```typescript react
cursorPosForInput(e, () => {
    handleChange(e.target.value)
})
```