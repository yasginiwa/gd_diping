const router = require('koa-router')()
const dao = require('../../../../../modules/dao')
const { upload_config } = require('../../../../../config/default')
const async = require('async')

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
    //  从 view v_products 选出所有的产品
    let products = await dao.execQuery(`select * from v_products where category = ${product_id} `)
    
    products = await new Promise(resolve => {
        async.map(products, async v => {
            let types = await dao.execQuery(`select * from t_product_type where pid = ${v.id}`)
            
            if(!types) {
                types = []
            } else {
                types = types.map(val => {
                    val.focus_imgs = !val.focus_imgs ? [] : val.focus_imgs.split(',').map(value => upload_config.url + value)
                    return val
                })
            }
            v.types = types
            v.small_img = !v.small_img ? '' : upload_config.url + v.small_img
            v.focus_imgs = !v.focus_imgs ? [] : v.focus_imgs.split(',').map(val => upload_config.url + val)
            v.desc_imgs = !v.desc_imgs ? [] : v.desc_imgs.split(',').map(val => upload_config.url + val)
            v.video = !v.video ? '' : upload_config.url + v.video
            v.sepcs = !v.sepcs ? [] : v.sepcs.split(',')
            return v
        }, (err, results) => {
            resolve(results)
        })
    })

    ctx.sendResult({ products }, 200, '获取产品列表成功')

    next()
})

module.exports = router.routes()