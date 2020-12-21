// pages/cart/cart.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'
import {
  request
} from '../../utils/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cart: [],
    selectAll: true,
    totalPrice: 0,
    userInfo: {},
    isLogin: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //  切换到login页面
  handleNavToLogin() {
    wx.navigateTo({
      url: '../login/login'
    })
  },

  //  切换到home的tab
  handleNavToHome() {
    wx.switchTab({
      url: '../index/index',
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
  onShow: async function () {

    let isLogin = wx.getStorageSync('isLogin')

    this.setData({
      isLogin
    })

    if (!isLogin) return

    let cart = await this.getCartList()

    this.setData({
      cart
    })

    this.calcTotalPrice()

    this.setBadge()
  },

  /**
   * 发起请求 获取购物车数据
   */
  getCartList() {
    return new Promise(async (resolve, reject) => {
      const openid = wx.getStorageSync('openid')

      let cartRes = await request({
        url: '/mpcart',
        data: {
          openid
        }
      })

      if (cartRes.data.meta.status === 200) {
        let {
          cart
        } = cartRes.data.data
        let {
          selectAll
        } = this.data
        cart = cart.map(v => {
          v.checked = selectAll ? true : false
          return v
        })
        resolve(cart)
      } else {
        reject(cartRes.data.meta)
      }

    })
  },

  /**
   * 处理 全选 点击事件
   */
  handleAccount() {
    let {
      cart,
      selectAll
    } = this.data

    selectAll = !selectAll

    cart = cart.map(v => {
      v.checked = selectAll ? true : false
      return v
    })

    this.setData({
      selectAll,
      cart
    })

    this.calcTotalPrice()
  },

  /**
   * 处理购物车单个产品 选择 点击事件
   */
  handleProductSelectionChange(e) {

    let {
      cart
    } = this.data

    let {
      index
    } = e.target.dataset

    let cartproduct = cart[index]

    cartproduct.checked = e.detail

    cart.splice(index, 1, cartproduct)

    this.setData({
      cart
    })

    //  遍历cart 如有某个产品没有勾选 selectAll 标记取消
    let { selectAll } = this.data
    selectAll = cart.every(v => v.checked === true) ? true : false

    this.setData({ selectAll })

    this.calcTotalPrice()

  },

  /**
   * 计算购物车总计金额函数
   */
  calcTotalPrice() {
    let {
      cart,
      totalPrice
    } = this.data

    totalPrice = 0

    cart.forEach(v => {
      if (v.checked) {
        totalPrice += v.price * v.buycount
      }
    })

    this.setData({
      totalPrice
    })
  },

  /**
   * 设置购物车 tab 的 badge 
   */
  setBadge() {
    let { cart } = this.data

    let cartBadgeNum = 0

    cart.forEach(v => cartBadgeNum += v.buycount)

    wx.setStorageSync('cartBadgeNum', cartBadgeNum)

    wx.setTabBarBadge({
      index: 3,
      text: cartBadgeNum.toString()
    })

    if (cartBadgeNum === 0) {
      wx.removeTabBarBadge({
        index: 3,
      })
    }
  },

  /**
   * 处理 购物车 购买数量 点击事件
   */
  handleBuycountChange(e) {
    let {
      index
    } = e.target.dataset
    let buycount = e.detail
    let {
      cart
    } = this.data
    let cartproduct = cart[index]
    cartproduct.buycount = buycount
    cart.splice(index, 1, cartproduct)
    this.setData({
      cart
    })

    this.calcTotalPrice()

    this.setBadge()
  },

  /**
   * 删除购物车商品事件
   */
  async handleCartproductDelte(e) {

    let { cartproduct } = e.target.dataset

    console.log(cartproduct)

    let pid = cartproduct.pid

    const openid = wx.getStorageSync('openid')

    let cartProductDelRes = await request({ url: '/mpcart', data: { openid, pid }, method: 'DELETE' })

    console.log(cartProductDelRes)

    if (cartProductDelRes.data.meta.status === 200) {
      Toast.success('删除成功')
    } else {

      Toast.fail('删除失败')
      
    }

    let cart = await this.getCartList()

    this.setData({
      cart
    })

    this.calcTotalPrice()

    this.setBadge()
  },

  /**
   * 处理删除按钮关闭事件
   */
  // handleCellOpen(e) {
  //   this.setData({
  //     cellBorderRadius: 'border-top-left-radius: 20rpx; border-bottom-left-radius: 20rpx;'
  //   })
  // },

  // handleCellClose(e) {
  //   this.setData({
  //     cellBorderRadius: 'border-radius: 20rpx;'
  //   })
  // },

  /**
   * 处理点击购入车图标 进入商品详情
   */
  handleNavToDetail(e) {

    const { pid } = e.target.dataset.productdetail

    wx.navigateTo({
      url: `../detail/detail?pid=${pid}`
    })

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
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