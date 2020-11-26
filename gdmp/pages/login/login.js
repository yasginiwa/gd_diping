// pages/login/login.js
let { request } = '../../utils/request.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },

  //  获取用户登录信息
  handleGetUserInfo(e) {
    wx.showLoading({
      title: '登录中...',
      mask: true
    })
    let { nickName, gender, language, city, province, country, avatarUrl } = e.detail.userInfo

    let openid = wx.getStorageSync('openid')

    let userInfo = { openid, nickName, gender, language, city, province, country, avatarUrl }

    if(userInfo) {  //  点击了允许获取
      
      wx.setStorage({
        data: userInfo,
        key: 'userInfo',
        success: () => {
          wx.hideLoading()
           //  跳转到 购物车页面
          wx.navigateBack({
            delta: -1,
          })

        }
      })
    } else {  //  点击了拒绝获取

    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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