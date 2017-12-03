const db = require('../db')
const config = require('../config')

module.exports = function(req, res, next)
{
    console.log(`${req.method} ${req.path}`)

    const cookies = req.cookies
    const access_token = cookies.access_token

    if(access_token && db.accessTokens[access_token])
    {
        if(req.path.indexOf(`${config.subPath}questions/`) === 0)
        {
            console.log(`urlToContinue: ${req.cookies.urlToContinue}`)
            res.clearCookie('urlToContinue')
            res.redirect(req.cookies.urlToContinue || `${config.subPath}`)
        }
        else
        {
            next()
        }
    }
    else
    {
        if(req.path.indexOf(`${config.subPath}questions/`) === 0)
        {
            next()
            return
        }

        if(req.url !== '/favicon.ico')
        {
            res.cookie('urlToContinue', req.url, { maxAge: 1000 * 3600 * 24 * 7, httpOnly: true })
        }
        res.redirect(`${config.subPath}questions/`)
    }

}