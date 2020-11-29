// pages/profile/profile.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'
import { request } from  '../../utils/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    isLogin: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let isLogin = wx.getStorageSync('isLogin')
    this.setData({ isLogin })
  },

  //  处理退出登录
  handleLogout() {

    wx.showModal({
      content: '确认要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          wx.removeStorageSync('userInfo')
          wx.setStorageSync('isLogin', false)
          this.setData({
            userInfo: {}
          })
          wx.removeTabBarBadge({
            index: 3,
          })
        }
      }
    })
  },

  //  点击“立即登录” 处理登录事件
  async handleGetUserInfo(e) {

    if(!e.detail.userInfo) return

    //  设置登录标记
    wx.setStorageSync('isLogin', true)

    let { nickName, gender, language, city, province, country, avatarUrl } = e.detail.userInfo

    let openid = wx.getStorageSync('openid')

    let userInfo = { openid, nickName, gender, language, city, province, country, avatarUrl }

    let { nickName: nickname } = userInfo

    this.setData({
      userInfo
    })

    wx.setStorageSync('userInfo', userInfo)

    //  登录时 发起请求 存入买家微信信息
    await request({ url: '/mpbuyerinfo/buyer', data: { openid, nickname, gender }, method: 'POST' })

  },

  //  点击“我的订单” push到我的订单页面
  handleNavToOrder() {
    wx.navigateTo({
      url: '../order/order'
    })
  },

  //  点击“我的收货地址”跳转至 收货人信息 页面
  handleNavToReceiverInfo() {

    let { isLogin } = this.data

    if (!isLogin) {
      Toast.fail('请先登录...')
    } else {
      wx.navigateTo({
        url: '../receiverInfo/receiverInfo',
      })
    }
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
    let userInfo = wx.getStorageSync('userInfo')
    if (userInfo) this.setData({ userInfo })
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