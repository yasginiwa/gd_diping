const Koa = require('koa')
//  静态托管
const static = require('koa-static')
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const resextra = require('./modules/resextra')
const { baseURL } = require('./config/default')
const passport = require('koa-passport')
const regist = require('./routes/api/v1/public/regist')
const login = require('./routes/api/v1/public/login')
const users = require('./routes/api/v1/private/users')
const categories = require('./routes/api/v1/private/categories')


//  小程序接口路由引入
const mpcategories = require('./routes/api/v1/public/mp/mpcategoryies')
const mpopenid = require('./routes/api/v1/public/mp/mpopenid')

let app = new Koa()

//  初始化bodyparser
app.use(bodyParser())

//  初始化静态托管中间件
app.use(static(__dirname + '/static'))

//  初始化koa-passport
app.use(passport.initialize())
app.use(passport.session())

//  回调到config文件夹中 passport.js
require('./config/passport')(passport)

//  统一设置api返回格式
app.use(resextra)

//  公共接口路由
router.use(`${baseURL.public}/regist`, regist)
router.use(`${baseURL.public}/login`, login)

//  私有接口路由
router.use(`${baseURL.private}/users`, users)
router.use(`${baseURL.private}/categories`, categories)

//  小程序接口路由
router.use(`${baseURL.public}/mpcategories`, mpcategories)
router.use(`${baseURL.public}/mpopenid`, mpopenid)

app.use(router.routes())
    .use(router.allowedMethods())

app.listen(3000, () => {
    console.log('services is running on http://127.0.0.1:3000')
})