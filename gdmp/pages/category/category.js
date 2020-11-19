// pages/category/category.js
import request from '../../utils/request'
import { host } from '../../utils/config'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    categories: [],
    children: [],
    activeCateKey: 0,
    activeChildKey: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    //  请求分类列表
    let { data: categoriesRes } = await request.get(`${host}/mpcategories`)
    const { categories } = categoriesRes.data
    
    //  进入页面首次请求的初始2级分类的 id
    let initChildId = categories[0].id

    //  请求分类列表下的子分类
    let { data: childrenRes } = await request.get(`${host}/mpcategories/children`, { cate_id: initChildId })
    let { children } = childrenRes.data

    
    //  设置appData
    this.setData({
      categories,
      children
    })
  },

  //  处理一级分类点击事件
  async handleCategoryChange(e) {

    this.setData({
      activeCateKey: e.detail,
    })

    let { data: childrenRes } =  await request.get(`${host}/mpcategories/children`, { cate_id: this.data.categories[e.detail].id })
    let { children } = childrenRes.data


    console.log(children)

    this.setData({
      children
    })

  },

  //  处理二级分类tab切换时触发的事件
  async handleChildChange(e) {

    this.setData({
      activeChildKey: e.detail.index
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