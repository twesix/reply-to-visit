const questions = require('./lib/questions')
const config = require('./lib/config')
const express = require('express')

module.exports = function(port = config.port, subPath = '/')
{
    config.port = port
    config.subPath = subPath

    const app = require('./lib/entry')

    return {
        addQuestion: questions.addQuestion,
        serveStatic: function(path, dirPath)
        {
            if(dirPath)
            {
                app.use(path, express.static(dirPath))
            }
            else
            {
                app.use(express.static(path))
            }
        }
    }
}