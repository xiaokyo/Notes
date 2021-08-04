# js下载文件的方式

### 使用axios

```javascript
axios({
	method: 'POST',
	headers: {
    'Content-Type': 'multipart/form-data;charset=UTF-8',
  },
  responseType: 'blob',
  data: fd, // 
  timeout: 5 * 60 * 1000, // 5分钟
})
```

> 注意: responseType必须要传

### 通用下载js

```typescript
const downloadExcel = (fileBlobResponse: any) => {
    if (!fileBlobResponse) return message.warn('请先导入excel');

    let blob = new Blob([fileBlobResponse], {
      type: 'application/vnd.ms-excel',
    });

    let downloadElement = document.createElement('a');
    let href = window.URL.createObjectURL(blob); //创建下载的链接
    downloadElement.href = href;
    downloadElement.download = new Date().getTime() + '.xlsx';
    document.body.appendChild(downloadElement);
    downloadElement.click(); //点击下载
    document.body.removeChild(downloadElement); //下载完成移除元素
    window.URL.revokeObjectURL(href); //释放掉blob对象
  };
```

