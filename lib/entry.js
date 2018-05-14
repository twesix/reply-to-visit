const express = require('express')
const config = require('./config')
const path = require('path')
const questions = require('./questions')

const app = express()

app.use(require('cookie-parser')())
app.use(require('./midelewares/checkAuthorization'))

app.use(`/questions/`, require('./midelewares/checkAnswer'))
app.use(`/questions/`, express.static(path.resolve(__dirname, 'questions')))
app.get(`/questions/getRandomQuestion/`, function(req, res)
{
    res.status(200).json(questions.getRandomQuestion())
})

module.exports = app