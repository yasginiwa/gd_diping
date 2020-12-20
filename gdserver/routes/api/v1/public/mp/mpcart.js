const router = require('koa-router')()
const dao = require('../../../../../modules/dao')
const { upload_config } = require('../../../../../config/default')

//  添加产品至购物车
router.post('/', async (ctx, next) => {

    let { openid, pid, tid, buycount } = ctx.request.body


    //  先找到openid 在t_buyers中对应的id
    let queryOpenidRes = await dao.execQuery(`select id from t_buyers where openid = '${openid}'`)

    const id = queryOpenidRes[0].id

    //  加入购物车是 先查询是否有相同类型tid的产品 相同则buycount增加 不同则增加记录
    let cartProductQueryRes = await dao.execQuery(`select tid from t_cart where openid = ${id} and pid = ${pid} and tid = ${tid}`)
    if (cartProductQueryRes.length) {
        await dao.execQuery(`update t_cart set buycount = buycount + ${buycount} where pid = ${pid} and tid = ${cartProductQueryRes[0].tid} and openid = ${id}`)
        ctx.sendResult(null, 200, '添加到购物车成功')
        return
    }

    //  然后把openid 对应的 id 插入到t_cart表中
    let addToCartRes = await dao.execQuery(`insert into t_cart values (null, ${id}, ${pid}, ${tid}, ${buycount})`).catch(err => {
        ctx.sendResult(null, 400, '添加到购物车失败')
        return
    })

    ctx.sendResult(null, 200, '添加到购物车成功')

    next()
})

//  查询购物车
router.get('/', async (ctx, next) => {
    let { openid } = ctx.request.query

    //  先找到openid 在t_buyers中对应的id
    let queryOpenidRes = await dao.execQuery(`select id from t_buyers where openid = '${openid}'`)

    const id = queryOpenidRes[0].id

    let cart = await dao.execQuery(`select p.name productname, c.pid pid, t.name typename, c.tid tid, t.price, t.focus_imgs, c.buycount from t_cart c join t_product_type t on c.pid = t.id join t_products p on p.id = c.pid`).catch(err => {
        ctx.sendResult(null, 400, '查询购物车失败')
        return
    })

    cart = cart.map(v => {
        v.focus_imgs = upload_config.url + v.focus_imgs.split(',')[0]
        return v
    })

    ctx.sendResult({ cart }, 200, '查询购物车成功')

    next()
})

//  删除购物车的 商品
router.delete('/', async (ctx, next) => {
    let { openid, pid } = ctx.request.body

    //  先找到openid 在t_buyers中对应的id
    let queryOpenidRes = await dao.execQuery(`select id from t_buyers where openid = '${openid}'`)

    const id = queryOpenidRes[0].id

    let cartProductDelRes = await dao.execQuery(`delete from t_cart where openid = ${id} and pid = ${pid}`).catch(err => {
        ctx.sendResult(null, 400, '删除购物车商品失败')
        return
    })

    ctx.sendResult(null, 200, '删除购物车商品成功')

    next()
})

module.exports = router.routes()