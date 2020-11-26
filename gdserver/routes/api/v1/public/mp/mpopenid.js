const axios = require('axios')
const router = require('koa-router')()
const { weapp_config } = require('../../../../../config/default')
const dao = require('../../../../../modules/dao')

/**
 * 向TX发起请求 根据会话js_code 获取微信小程序openid
 */
router.post('/', async (ctx, next) => {
    //  小程序appid
    const appid = weapp_config.appid
    //  小程序密钥
    const secret = weapp_config.secret
    //  获取openid的js_code
    const js_code = ctx.request.body.js_code.code
    //  获取openid的grant_type
    const grant_type = 'authorization_code'

    //  初始化axios实例
    const instance = axios.create({
        baseURL: 'https://api.weixin.qq.com',
        timeout: 5000
    })

    const result = await instance({
        url: '/sns/jscode2session',
        params: {
            appid,
            secret,
            js_code,
            grant_type
        }
    }).catch(err => ctx.sendResult(err, 401, '获取openid失败'))

    //  获取openid成功
    if (result) {
        ctx.sendResult({ openid: result.data.openid }, 200, '获取openid成功')
    }
})

/**
 * 查询openid 在数据库是否存在（此用户是否使用过此小程序）
 */
router.get('/', async (ctx, next) => {
    const { openid } = ctx.request.query

    let result = await dao.execQuery(`select * from t_buyers where openid = '${openid}'`)
    let buyer = {}
    if (result.length) {
        buyer = result[0]
    }

    ctx.sendResult({ data: buyer }, '200', '获取买家信息成功')

    next()
})

module.exports = router.routes()