const router = require('koa-router')()
const dao = require('../../../../../modules/dao')

router.get('/', async (ctx, next) => {
    //  查询1级分类的所有结果
    let categories = await dao.execQuery(`select id, name from t_categories where cate_level = 1`).catch(err => {
        ctx.sendResult(null, 400, '获取分类列表失败')
        return
    })

    ctx.sendResult({ categories }, 200, '获取分类列表成功')

    next()
})

router.get('/children', async (ctx, next) => {
    //  请求参数 cate_id 要查询的分类为cate_id的所有子分类
    const { cate_id } = ctx.request.query

    let children = await dao.execQuery(`select id, name from t_categories where cate_level = 2 and parent_id = ${cate_id}`).catch(err => {
        ctx.sendResult(null, 400, '获取分类列表失败')
        return
    })

    ctx.sendResult({ children }, 200, '获取分类列表成功')

    next()

})

module.exports = router.routes()