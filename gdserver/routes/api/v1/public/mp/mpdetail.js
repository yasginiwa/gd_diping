const router = require('koa-router')()
const dao = require('../../../../../modules/dao')
const { upload_config } = require('../../../../../config/default')

/**
 * 获取商品的详细信息 
 * @param pid 商品id
 * @param tid 商品类型id
 */
router.get('/', async(ctx, next) => {
    const { pid } = ctx.request.query

    let product = {}

    let productQueryRes = await dao.execQuery(`select name, focus_imgs, tag from t_products where id = ${pid}`)
    let productDetailQueryRes = await dao.execQuery(`select video, desc_imgs, `)
    next()
})


module.exports = router.routes()