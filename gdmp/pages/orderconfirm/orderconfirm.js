// pages/orderconfirm/orderconfirm.js
import { request } from '../../utils/request'
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: [],
    goods: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { typeIdx } = options
    let product = JSON.parse(options.product)

    let goods = this.handleGoodsObj(product, typeIdx)

    this.setData({ goods })

    this.getAddress()

  },

  /**
   * 请求收货地址
   */
  async getAddress() {
    let openid = wx.getStorageSync('openid')
    let addressRes = await request({ url: '/mpbuyerinfo/address', data: { openid }})

    if(addressRes.data.meta.status !== 200) {
      Toast.fail('获取地址失败')
      return
    }
    let { addresses } = addressRes.data.data

    let address = {}
    addresses.forEach(v => {
      if(v.default_address === 1) {
        address = v
      }
    })
    this.setData({ address })
  },

  /**
   * navbar点击返回箭头
   */
  handleNavBack() {
    wx.navigateBack({
      delta: 1,
    })
  },

  /**
   * 收货地址箭头 点击nav到地址编辑页面
   */
  handleNavToAddressEdit() {
    wx.navigateTo({
      url: '../receiverInfo/receiverInfo'
    })
  },

  /**
   * 把传过来的product和typeIdx整理成界面显示可用的goods对象
   */
  handleGoodsObj(product, typeIdx) {
    let currentType = product.types[typeIdx]

    let icon = currentType.focus_imgs[0]
    let { name } = product
    let typeName = currentType.name
    let { price, buycount } = currentType

    return { icon, name, typeName, price, buycount }
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
    this.getAddress()
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