const router = require('koa-router')()
const dao = require('../../../../../modules/dao')
const { upload_config } = require('../../../../../config/default')
const tool = require('../../../../../modules/tools')
const fs = require('fs')
const path = require('path')
const { request } = require('http')

/**
 * 获取商品的详细信息 
 * @param pid 商品id
 */
router.get('/', async (ctx, next) => {
    const { pid } = ctx.request.query

    let productQueryRes = await dao.execQuery(`select name, focus_imgs, tag from t_products where id = ${pid}`)
    let { name, focus_imgs, tag } = productQueryRes[0]
    focus_imgs = tool.cutStringToArray(focus_imgs).map(v => upload_config.url + v)

    let productDetailQueryRes = await dao.execQuery(`select video, desc_imgs, sepcs from t_product_detail where pid = ${pid}`)
    let { video, desc_imgs, sepcs } = productDetailQueryRes[0]
    desc_imgs = tool.cutStringToArray(desc_imgs).map(v => upload_config.url + v)
    sepcs = tool.cutStringToArray(sepcs)
    let origin_video = video
    video = upload_config.url + video

    let productTypesQueryRes = await dao.execQuery(`select name, price, origin_price, focus_imgs, stock, weight, sold_count from t_product_type where pid = ${pid}`)
    productTypesQueryRes = productTypesQueryRes.map(v => {
        v.focus_imgs = tool.cutStringToArray(v.focus_imgs).map(val => upload_config.url + val)
        return v
    })

    productTypesQueryRes = JSON.parse(JSON.stringify(productTypesQueryRes))

    let product = { name, focus_imgs, tag, video, desc_imgs, sepcs, types: productTypesQueryRes }

    let totalSize = fs.statSync('static/uploads/detail/video/111.mp4').size


    ctx.set('Range', `bytes=0-${totalSize - 1}`)
    console.log(ctx)





    // if (!range) {
    //     // 初始化请求不会带上range 造一个 并且返回200
    //     range = "bytes=0-30084741";
    //     ctx.status = 200
    // } else {
    //     // 带range的请求返回 206 表明返回目标url上的部分内容
    //     ctx.status = 206
    // }


    // let startBytes = range.replace(/bytes=/, "").split("-")[0];
    // startBytes= Number(startBytes);
    // let stats = fs.statSync('static/uploads/' + origin_video);
    // ctx.set("Accept-Ranges", "bytes")
    // console.log("bytes " + startBytes + "-" + (stats.size - 1) + "/" + stats.size)
    // ctx.set("Content-Length", stats.size - startBytes)
    // ctx.set("Content-Range", "bytes " + startBytes + "-" + (stats.size - 1) + "/" + stats.size)
    // ctx.set("Content-Type", "video/mp4")
    // ctx.response = fs.createReadStream('static/uploads/' + origin_video, {
   //     start: startBytes,
    //     end: stats.size
    // })



    ctx.sendResult({ product }, 200, '获取产品列表成功')

    next()
})


module.exports = router.routes()