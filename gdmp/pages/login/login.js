// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  //  获取用户登录信息
  handleGetUserInfo(e) {
    let { userInfo } = e.detail
    if(userInfo) {  //  点击了允许获取
      wx.setStorage({
        data: userInfo,
        key: 'userInfo',
      })
    } else {  //  点击了拒绝获取

    }
  },

  //  获取用户电话号码登录
  handleGetPhoneNumber(e) {
    console.log(e)
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