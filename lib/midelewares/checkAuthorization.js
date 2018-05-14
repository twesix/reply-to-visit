const db = require('../db')
const config = require('../config')

module.exports = function(req, res, next)
{
    console.log(`${req.method} ${req.path}`)

    const cookies = req.cookies
    const access_token = cookies.access_token

    // 已经有访问权限
    if(access_token && db.accessTokens[access_token])
    {
        // 访问的是 //domain/subPath/questions/, 直接跳转到urlToContinue
        if(req.path.indexOf(`/questions/`) === 0)
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
    else // 无访问权限
    {
        // 访问的是 //domain/subPath/questions/, 回答问题
        if(req.path.indexOf(`/questions/`) === 0)
        {
            next()
            return
        }

        if(req.url !== '/favicon.ico')
        {
            res.cookie('urlToContinue', `${config.subPath}${req.url.substring(1)}`, { maxAge: 1000 * 3600 * 24 * 7, httpOnly: true })
        }

        // 重定向到问题页面, 路径很关键
        res.redirect(`${config.subPath}questions/`)
    }

}