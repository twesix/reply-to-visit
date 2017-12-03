const questions = require('./lib/questions')
const config = require('./lib/config')
const express = require('express')

const app = require('./lib/entry')

module.exports = function(port)
{
    config.port = port || config.port
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