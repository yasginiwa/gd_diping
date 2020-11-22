const router = require('koa-router')()
const dao = require('../../../../../modules/dao')
const { upload_config } = require('../../../../../config/default')

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

    console.log(cate_id)

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

router.get('/products', async(ctx, next) => {
    //  请求参数 二级分类id
    const { product_id } = ctx.request.query

    let products = await dao.execQuery(`select * from t_products where category = ${product_id}`).catch(err => {
        ctx.sendResult(null, 400, '获取分类列表失败')
        return
    })

    products = products.map(v => {
        return {
            id: v.id,
            name: v.name,
            description: v.description,
            category: v.category,
            price: v.price,
            origin_price: v.origin_price,
            parameters: !v.parameters ? [] : v.parameters.split(','),
            features: v.features,
            introduce: v.introduce,
            sold_count: v.sold_count,
            stock_count: v.stock_count,
            small_img: !v.small_img ? '' : upload_config.url + v.small_img,
            focus_imgs: !v.focus_imgs ? [] : v.focus_imgs.split(',').map(val => upload_config.url + val),
            tag: !v.tag ? '' : v.tag
        }
    })

    ctx.sendResult({ products }, 200, '获取分类列表成功')

    next()
})

module.exports = router.routes()