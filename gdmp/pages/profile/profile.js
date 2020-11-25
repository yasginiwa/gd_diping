// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //  处理退出登录
  handleLogout() {

    wx.showModal({
      content: '确认要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          wx.removeStorageSync('userInfo')

          this.setData({
            userInfo: {}
          })
        }
      }
    })
  },

  //  点击“立即登录” 处理登录事件
  handleGetUserInfo() {
    wx.showLoading({
      title: '登录中...',
      mask: true
    })
    wx.getUserInfo({
      success: (res) => {
        wx.hideLoading()
        
        let userInfo = res.userInfo
        wx.setStorageSync('userInfo', userInfo)
        this.setData({
          userInfo
        })
      }
    })
  },

  //  点击“我的订单” push到我的订单页面
  handleNavToOrder() {
    wx.navigateTo({
      url: '../order/order'
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