const questions = require('./lib/questions')
const config = require('./lib/config')
const express = require('express')

module.exports = function(port = config.port, subPath = '/', local = false)
{
    config.port = port
    config.subPath = subPath

    const app = require('./lib/entry')
    app.listen(config.port, function()
    {
        console.log(`listening @ http://localhost:${config.port}/`)
    })

    return {
        addQuestion: questions.addQuestion,
        serveStatic: function(dirPath)
        {
            app.use(express.static(dirPath))
        }
    }
}