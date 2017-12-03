# reply-to-visit

> answer a question to access the website

Usage: 

```javascript
const path = require('path')

const port = 3000
const app = require('reply-to-visit')(port) // 如果不传递port参数, 默认是3000端口

// 设置问题回答正确之后允许访问的内容的目录, 可以设置多次, 访问时按顺序检索
app.serveStatic(path.resolve(__dirname, '../static')) // root path
app.serveStatic('sub-path', path.resolve(__dirname, '../sub-path'))

app.addQuestion
(
    {
        question: '________, 彬彬有礼',
        tip: '南湖公园长椅',
        answer: '婉婉有仪'
    },
)
```
