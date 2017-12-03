const questions = require('./lib/questions')
const config = require('./lib/config')

module.exports = function(port)
{
    config.port = port || config.port
    return {
        addQuestion: questions.addQuestion
    }
}

require('./lib/entry')