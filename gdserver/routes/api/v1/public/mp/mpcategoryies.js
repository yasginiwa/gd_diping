const router = require('koa-router')()
const dao = require('../../../../../modules/dao')
const { upload_config } = require('../../../../../config/default')

/**
 * 查询产品一级分类
 */
router.get('/', async (ctx, next) => {
    //  查询1级分类的所有结果
    let categories = await dao.execQuery(`select id, name from t_categories where cate_level = 1`).catch(err => {
        ctx.sendResult(null, 400, '获取分类列表失败')
        return
    })

    ctx.sendResult({ categories }, 200, '获取分类列表成功')

    next()
})

/**
 * @param cate_id 一级分类id
 * 根据一级分类id查询该一级分类下所有的二级分类
 */
router.get('/children', async (ctx, next) => {
    //  请求参数 cate_id 要查询的分类为cate_id的所有子分类
    const { cate_id } = ctx.request.query

    if (!cate_id) {
        ctx.sendResult(null, 400, '请求参数错误')
        return
    }

    let children = await dao.execQuery(`select id, name from t_categories where cate_level = 2 and parent_id = ${cate_id}`).catch(err => {
        ctx.sendResult(null, 400, '获取分类列表失败')
        return
    })

    children = children.map((v, i) => {
        return { id: v.id, name: i, title: v.name }
    })

    ctx.sendResult({ children }, 200, '获取分类列表成功')

    next()

})

/**
 * @param product_id 二级分类id
 * 根据二级分类id 查询该分类下所有的产品
 */
router.get('/products', async (ctx, next) => {
    //  请求参数 二级分类id
    const { product_id } = ctx.request.query

    if (!product_id) {
        ctx.sendResult(null, 400, '请求参数错误')
        return
    }

    let ids = await dao.execQuery(`select id from t_products where category = ${product_id} `)
    
    ids = ids.map(v => v.id)

console.log(ids)
    // products = products.map(v => {
    //     return {
    //         id: v.id,
    //         name: v.name,
    //         description: v.description,
    //         category: v.category,
    //         parameters: !v.parameters ? [] : v.parameters.split(','),
    //         features: v.features,
    //         introduce: v.introduce,
    //         price: 0,
    //         stock_count: 0,
    //         small_img: !v.small_img ? '' : upload_config.url + v.small_img,
    //         focus_imgs: !v.focus_imgs ? [] : v.focus_imgs.split(',').map(val => upload_config.url + val),
    //         tag: !v.tag ? '' : v.tag
    //     }
    // })

    // ctx.sendResult({ products }, 200, '获取分类列表成功')

    next()
})

module.exports = router.routes()