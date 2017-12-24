const app = require('./index')(3000, '/')
const path = require('path')

app.serveStatic(path.resolve(__dirname, './static'))

app.addQuestion
(
    {
        question: '________, 彬彬有礼',
        tip: '南湖公园长椅',
        answer: '婉婉有仪'
    },
)
app.addQuestion
(
    {
        question: '我读的书很多',
        tip: 'no tip',
        answer: '但都没你好看'
    },
)
app.addQuestion
(
    {
        question: '无事献殷勤, 非......',
        tip: 'no tip',
        answer: '非常喜欢你'
    },
)
app.addQuestion
(
    {
        question: '雨过天晴',
        tip: 'no tip',
        answer: '语过添情'
    },
)

