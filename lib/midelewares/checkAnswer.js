const db = require('../db')
const config = require('../config')
const questions = require('../questions').questions

module.exports = function(req, res, next)
{
    const query = req.query

    if(query.id && query.answer)
    {
        console.log(`/questions/ query :`)
        console.log(query)

        if(questions[query.id].answer === query.answer.trim())
        {
            const accessToken = Math.random()
            db.accessTokens[accessToken] = true
            res.cookie('access_token', accessToken, { maxAge: 1000 * 3600 * 24 * 7, httpOnly: true })
            console.log(`urlToContinue: ${req.cookies.urlToContinue}`)
            res.clearCookie('urlToContinue')
            res.redirect(req.cookies.urlToContinue || `${config.subPath}`)
        }
        else
        {
            res.redirect(`${config.subPath}questions#answerIsWrong`)
        }
        return
    }

    next()
}