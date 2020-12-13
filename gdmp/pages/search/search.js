// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    focus: false,
    curKeyword: '',
    keywords: []
  },
  
  /**
   * 处理搜索事件
   */
  onSearch() {
    let keywords = [...this.data.keywords, this.data.curKeyword]
    this.setData({ keywords })
  },

  /**
   * 处理搜索栏获取焦点事件
   */
  handleFocus(e) {
    if(e.type === 'focus') {
      this.setData({ focus: true })
    }
  },

  /**
   * 处理搜索栏失去焦点
   */
  handleBlur(e) {
    if(e.type === 'blur') {
      this.setData({ focus: false })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 处理搜索事件
   */
  handleSearch() {

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