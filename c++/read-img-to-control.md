# 读取本地图片至控件展示

```c++
// 图片控制头部
#include <atlimage.h>

HWND global_hDlg; // 展示窗口的hDlg

CImage img;
CRect rect;
HWND PicHan = GetDlgItem(global_hDlg, QR_CODE);
GetClientRect(PicHan, &rect);

// 展示图片
img.Load("<your image path>.png");
img.Draw(GetDC(PicHan), rect);
```