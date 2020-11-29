const router = require('koa-router')()
const dao = require('../../../../../modules/dao')
const AddressParse = require('address-parse')

router.get('/', async (ctx, next) => {
    next()
})

//  添加买家微信信息
router.post('/buyer', async (ctx, next) => {
    let { openid, nickname, gender } = ctx.request.body

    //  小程序在登录 发起增加买家信息请求时 如数据库中存在此openid的买家信息 则return 不插入此条记录到数据库
    let openidRes = await dao.execQuery(`select openid from t_buyers where openid = '${openid}'`)
    if (openidRes.length) {
        ctx.sendResult(null, 200, '此买家信息已添加过')
        return
    }

    //  小程序登录 增加买家信息记录到数据库
    let buyer = await dao.execQuery(`insert into t_buyers values (null, '${openid}', '${nickname}', ${gender})`).catch(err => {
        ctx.sendResult(null, 400, '添加买家信息错误')
        return
    })

    ctx.sendResult({ openid, nickname, gender }, 200, '添加买家信息成功')

    next()
})

//  获取收货地址信息
router.get('/address', async(ctx, next) => {
    let { openid } = ctx.request.query
    
    //  获取openid对应的数据库id
    let idsRes = await dao.execQuery(`select id from t_buyers where openid = '${openid}'`)

    let id = idsRes[0].id

    //  根据openid对应数据库主键id 查询出此openid对应的所有收货地址
    let addresses = await dao.execQuery(`select * from t_addresses where openid = ${id}`).catch(err => {
        ctx.sendResult(null, 400, '获取地址信息失败')
        return
    })

    ctx.sendResult({ addresses }, 200, '获取地址信息成功')

    next()
})

//  添加收货地址信息
router.post('/address', async (ctx, next) => {
    let { openid, name, district, detail, phone } = ctx.request.body

    let openidRes = await dao.execQuery(`select id from t_buyers where openid = '${openid}'`)

    let id = openidRes[0].id

    //  先查询是否有此openid的买家地址 如有 默认地址标记为 0  如没有 默认地址标记为 1
    let addressQueryRes = await dao.execQuery(`select openid from t_addresses where openid = ${id}`)

    let default_address = 0

    if (addressQueryRes.length) {

        default_address = 0

    } else {

        default_address = 1
    }

    let buyerRes = await dao.execQuery(`insert into t_addresses values (null, ${id}, '${name}', '${district}', '${detail}', '${phone}', ${default_address})`).catch(err => {
        ctx.sendResult(null, 400, '添加收货地址错误')
        return
    })

    ctx.sendResult({openid, name, district, detail, phone}, 200, '添加收货地址成功')

    next()
})

//  删除收货地址
router.delete('/address', async(ctx, next) => {
    let { id } = ctx.request.body
    let addressDelRes = await dao.execQuery(`delete from t_addresses where id = ${id}`).catch(err => {
        ctx.sendResult(null, 400, '删除地址信息失败')
        return
    })

    ctx.sendResult(null, 200, '删除地址信息成功')

    next()
})

router.put('/address', async(ctx, next) => {
    let { id, name, district, detail, phone } = ctx.request.body

    let addressUpdateRes = await dao.execQuery(`update t_addresses set name = '${name}', district = '${district}', detail = '${detail}', phone = '${phone}' where id = ${id}`).catch(err => {
        ctx.sendResult(null, 400, '更新地址信息失败')
        return
    })

    ctx.sendResult(null, 200, '更新地址信息成功')
    
    next()
})

//  更新默认地址
router.put('/address/modifydefault', async(ctx, next) => {
    let { id } = ctx.request.body

    let setDefaultAddressRes = await dao.execTransaction([`update t_addresses set default_address = 0 where id != ${id}`, `update t_addresses set default_address = 1 where id = ${id}`]).catch(err => {
        ctx.sendResult(null, 400, '修改默认地址失败')
        return
    })
    
    ctx.sendResult(null, 200, '修改默认地址成功')
})

module.exports = router.routes()