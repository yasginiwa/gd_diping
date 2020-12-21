// pages/detail/detail.js
import { request } from '../../utils/request'
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    product: {},
    totalSoldCount: 0,
    price: '',
    sharePopup: false,
    grantedShow: false,
    typeShow: false,
    introduceActive: 0,
    typeIdx: -1,
    cart: [],
    cartBadgeNum: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let { pid } = options

    let productRes = await request({ url: '/mpdetail', data: { pid } })

    const { product } = productRes.data.data

    let totalSoldCount = 0
    product.types.forEach(v => totalSoldCount += v.sold_count)

    let price = ''
    if (product.types.length > 1) {
      let max = Math.max.apply(Math, product.types.map(v => v.price))
      let min = Math.min.apply(Math, product.types.map(v => v.price))
      price = `${min.toFixed(2)}~${max.toFixed(2)}`
    } else {
      price = product.types[0].price.toFixed(2)
    }

    //  设置底部栏购物车图标badge
    let cartBadgeNum = !wx.getStorageSync('cartBadgeNum') ? 0 : parseInt(wx.getStorageSync('cartBadgeNum'))

    if (cartBadgeNum === 0) cartBadgeNum = '' 

    this.setData({ product, totalSoldCount, price, cartBadgeNum })

  },

  /**
   * 处理底部弹出分享框
   */
  handleShare() {
    let sharePopup = true
    this.setData({ sharePopup })
  },

  /**
   * 处理分享框关闭
   */
  handleShareClose() {
    let sharePopup = false
    this.setData({ sharePopup })
  },

  /**
   * 处理正品保证框弹出
   */
  handleGrantedShow() {
    let grantedShow = true
    this.setData({ grantedShow })
  },

  /**
   * 处理正品保证框关闭
   */
  handleGrantedClose() {
    let grantedShow = false
    this.setData({ grantedShow })
  },

  /**
   * 处理规格类型选择框弹出
   */
  handleTypeShow() {
    let typeShow = true
    this.setData({ typeShow })
  },

  handleTypeClose() {
    let typeShow = false
    this.setData({ typeShow })
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
    let { product } = this.data
    product.types[typeIdx].selected = true
    product.types[typeIdx].buycount = 1
    product.types = product.types.map((v, i) => {
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
      product,
      typeIdx
    })

  },

  //  处理购买数量变化事件
  handleBuyCountChanged(e) {

    let { product, typeIdx } = this.data
    product.types[typeIdx].buycount = e.detail

    this.setData({
      product
    })
  },

  //  处理加入购物车
  async handleAddToCart(e) {

    let isLogin = wx.getStorageSync('isLogin')

    if (!isLogin) {
      Toast.fail('请先登录')
      return
    }

    let { cart } = this.data

    let { product, typeIdx } = e.target.dataset.cartproduct

    //  产品大类id
    let { id: pid } = product
    let tid = typeIdx

    let { buycount } = product.types[typeIdx]

    const openid = wx.getStorageSync('openid')

    let cartproduct = { openid, pid, tid, buycount }

    cart.push(cartproduct)

    let cartBadgeNum = !wx.getStorageSync('cartBadgeNum') ? 0 : parseInt(wx.getStorageSync('cartBadgeNum'))

    cart.forEach(v => cartBadgeNum += v.buycount)

    this.setData({ cart, typeShow: false, cartBadgeNum })

    let addToCartRes = await request({ url: '/mpcart', data: { openid, pid, tid, buycount }, method: 'POST' })


    if (addToCartRes.data.meta.status === 200) {

      Toast.success('添加成功', { duration: 3000 })

    } else {

      Toast.success('添加失败', { duration: 3000 })

    }

  },

  /**
   * 底部栏图标
   * 导航至首页
   */
  navToHome() {
    this.navBackAndSwithTab(1, '../index/index')
  },

  /**
   * 底部栏图标
   * 导航至客户
   */
  navToService() {

  },

  /**
   * 底部栏图标
   * 导航至首页
   */
  navToCart() {
    this.navBackAndSwithTab(1, '../cart/cart')
  },

  /**
   * 返回tab 切换至制定tab
   * @param {*} delta 返回页数差值
   * @param {*} toPage 切换至的页面
   */
  navBackAndSwithTab(delta, toTab){
    wx.navigateBack({
      delta: delta,
      complete: () => {
        wx.switchTab({
          url: toTab,
        })
      }
    })
  },

  /**
   * 处理分享给微信好友
   */
  handleShareToFreind() {
    this.handleShareClose()
  },

  onShareAppMessage() {
    let { product } = this.data
    return {
      title: `${product.name}`,
      path: `/page/detail/detail?pid=${product.id}`,
      imageUrl: `${product.focus_imgs[0]}`
    }
  },

  /**
   * 处理分享至朋友圈 仅支持安卓
   */
  handleShareToTimeline() {
    this.handleShareClose()
  },

  onShareTimeline() {
    let { product } = this.data
    return {
      title: `${product.name}`,
      path: `/page/detail/detail?pid=${product.id}`,
      imageUrl: `${product.focus_imgs[0]}`
    }
  },

  /**
   * 处理生成海报分享到朋友圈
   */
  handleGeneratePop() {

  },

  /**
   * 处理分享到朋友圈
   */
  onShareTimeline() {

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
    this.setData({ typeIdx: -1 })
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