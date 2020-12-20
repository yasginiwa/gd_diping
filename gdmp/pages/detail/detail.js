// pages/detail/detail.js
import { request } from '../../utils/request'

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
    introduceActive: 0
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
    if(product.types.length > 1) {
      let max = Math.max.apply(Math, product.types.map(v => v.price))
      let min = Math.min.apply(Math, product.types.map(v => v.price))
      price = `${min.toFixed(2)} ~ ${max.toFixed(2)}`
    } else {
      price = product.types[0].price.toFixed(2)
    }

    this.setData({ product, totalSoldCount, price })
    
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
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo')
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