# 一款基于react开发轻量级的markdown编辑器

## 安装

```javacript
npm install react-markdown-editor-mini --dev

or 

yarn add react-markdown-editor-mini --dev
```

## api配置

| 配置 | 类型 | 默认值 | 说明 | 是否必填 |
| --- | --- | --- | --- | --- |
| width | number | 678 | 编辑器的宽度 | 选填 |
| height | number | 678 | 编辑器的高度 | 选填 |
| defaultValue | string | '' | 初始化默认内容 | 选填 |
| isFullScreen | boolean | false | 默认是否全屏 | 选填 |
| uploadImgUrl | string | '' | 上传图片接口url | 选填 |
| onChange | function | void | 内容变化触发回调函数 | 选填 |


## 案例
```javascript
import React from 'react'
import Editor from 'react-markdown-editor-mini'

class Example extends React.Component{
    onChange=(value,html)=>{
        // 获取markdown内容和对应生成的html内容
    }
    render(){
       return (
           <Editor width={788} height={400} isFullScreen={true} uploadImgUrl='http://xxxxxxxx/xxx' onChange={this.onChange}/>
       )
   }
}
```
