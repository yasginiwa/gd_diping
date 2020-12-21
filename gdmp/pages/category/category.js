
import {
  request
} from '../../utils/request'
import {
  host
} from '../../utils/config'
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    categories: [],
    children: [],
    products: [],
    cart: [],
    activeCateKey: 0,
    activeChildKey: 0,
    popShow: false,
    currentProduct: { },
    typeIdx: -1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    //  请求分类列表
    let {
      data: categoriesRes
    } = await request({
      url: '/mpcategories'
    })

    const {
      categories
    } = categoriesRes.data

    //  进入页面首次请求的初始2级分类的 id
    let initChildId = categories[0].id

    //  请求分类列表下的子分类
    let {
      data: childrenRes
    } = await request({
      url: '/mpcategories/children',
      data: { cate_id: initChildId }
    })

    let {
      children
    } = childrenRes.data


    //  设置appData
    this.setData({
      categories,
      children
    })


    //  产品二级分类id的产品
    let product_id = this.data.children[0].id

    const { data: productsRes } = await request({
      url: '/mpcategories/products',
      data: { product_id }
    })

    let { products } = productsRes.data

    //  设置appData
    this.setData({
      products
    })
  },

  //  处理一级分类点击事件
  async handleCategoryChange(e) {

    this.setData({
      activeCateKey: e.detail,
    })

    let {
      data: childrenRes
    } = await request({
      url: '/mpcategories/children',
      data: { cate_id: this.data.categories[e.detail].id }
    })

    let {
      children
    } = childrenRes.data


    this.setData({
      children
    })

    //  产品二级分类id 
    let product_id = this.data.children[0].id

    const {
      data: productsRes
    } = await request({
      url: '/mpcategories/products',
      data: { product_id }
    })

    let {
      products
    } = productsRes.data

    this.setData({
      products
    })

  },

  //  处理二级分类tab切换时触发的事件
  async handleChildChange(e) {

    this.setData({
      activeChildKey: e.detail.index
    })

    //  产品二级分类id
    let product_id = this.data.children[this.data.activeChildKey].id

    const {
      data: productsRes
    } = await request({
      url: '/mpcategories/products',
      data: { product_id }
    })

    let {
      products
    } = productsRes.data

    this.setData({
      products
    })

  },

  //  处理立即购买按钮点击 popup显示
  handlePopShow(e) {
    const {
      product
    } = e.target.dataset

    this.setData({
      popShow: true,
      currentProduct: product
    })
  },

  //  处理popup关闭事件
  handlePopClose() {
    this.setData({
      popShow: false,
      typeIdx: -1
    })
  },

  //  处理图片查看功能
  handlePreviewImage(e) {
    let {
      focus_imgs
    } = e.currentTarget.dataset

    wx.previewImage({
      urls: focus_imgs
    })
  },

  //  处理设备型号 选择事件
  handleProductTypeSelected(e) {
    let { typeidx: typeIdx } = e.target.dataset
    let { currentProduct } = this.data
    currentProduct.types[typeIdx].selected = true
    currentProduct.types[typeIdx].buycount = 1
    currentProduct.types = currentProduct.types.map((v, i) => {
      if (i === typeIdx) {
        v.selected = true
        v.buycount = 1
      } else {
        v.selected = false
        v.buycount = 0
      }
      return v
    })

    this.setData({
      currentProduct,
      typeIdx
    })

  },

  //  处理购买数量变化事件
  handleBuyCountChanged(e) {
    
    let { currentProduct, typeIdx } = this.data
    currentProduct.types[typeIdx].buycount = e.detail

    this.setData({
      currentProduct
    })
  },

  //  处理加入购物车
  async handleAddToCart(e) {

    let isLogin = wx.getStorageSync('isLogin')

    if(!isLogin) {
      Toast.fail('请先登录')
      return
    }

    let { cart } = this.data

    let { currentProduct, typeIdx } = e.target.dataset.cartproduct

    //  产品大类id
    let { id: pid } = currentProduct
    let tid = typeIdx

    let { buycount } =  currentProduct.types[typeIdx]

    const openid = wx.getStorageSync('openid')

    let cartproduct = { openid, pid, tid, buycount }

    cart.push(cartproduct)

    let cartBadgeNum = !wx.getStorageSync('cartBadgeNum') ? 0 : parseInt(wx.getStorageSync('cartBadgeNum'))

    cart.forEach(v => cartBadgeNum += v.buycount)

    wx.setTabBarBadge({
      index: 3,
      text: cartBadgeNum.toString(),
    })

    this.setData({ cart, popShow: false })

    let addToCartRes = await request({ url: '/mpcart', data: { openid, pid, tid, buycount }, method: 'POST' })

    console.log(addToCartRes)

    if(addToCartRes.data.meta.status === 200) {

      Toast.success('添加成功', { duration: 3000 })

    } else {

      Toast.success('添加失败', { duration: 3000 })
      
    }

  },

  /**
   * 处理搜索点击事件 跳转至搜索页面
   */
  handleSearch() {
    wx.navigateTo({
      url: '../search/search'
    })
  },

  //  处理购买
  handleBuy() {
    console.log('立即购买')
  },

  handleNavToDetail(e) {
    const { pid } = e.target.dataset
    wx.navigateTo({
      url: `../detail/detail?pid=${pid}`
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    let cart = []
    this.setData({
      cart
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})