// pages/category/category.js
import request from '../../utils/request'
import {
  host
} from '../../utils/config'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    categories: [],
    children: [],
    products: [],
    activeCateKey: 0,
    activeChildKey: 0,
    popShow: false,
    currentProduct: {
      productTypeSelected: false,
      buyCount: 1
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    //  请求分类列表
    let {
      data: categoriesRes
    } = await request.get(`${host}/mpcategories`)
    const {
      categories
    } = categoriesRes.data

    //  进入页面首次请求的初始2级分类的 id
    let initChildId = categories[0].id

    //  请求分类列表下的子分类
    let {
      data: childrenRes
    } = await request.get(`${host}/mpcategories/children`, {
      cate_id: initChildId
    })
    let {
      children
    } = childrenRes.data


    //  设置appData
    this.setData({
      categories,
      children
    })


    //  产品二级分类id的产品
    let product_id = this.data.children[0].id

    const {
      data: productsRes
    } = await request.get(`${host}/mpcategories/products`, {
      product_id
    })

    let {
      products
    } = productsRes.data

    //  设置appData
    this.setData({
      products
    })
  },

  //  处理一级分类点击事件
  async handleCategoryChange(e) {

    this.setData({
      activeCateKey: e.detail,
    })

    let {
      data: childrenRes
    } = await request.get(`${host}/mpcategories/children`, {
      cate_id: this.data.categories[e.detail].id
    })

    let {
      children
    } = childrenRes.data


    this.setData({
      children
    })

        //  产品二级分类id 
        let product_id = this.data.children[0].id

        const {
          data: productsRes
        } = await request.get(`${host}/mpcategories/products`, {
          product_id
        })

        let {
          products
        } = productsRes.data
    
        this.setData({
          products
        })

  },

  //  处理二级分类tab切换时触发的事件
  async handleChildChange(e) {

    this.setData({
      activeChildKey: e.detail.index
    })

    //  产品二级分类id
    let product_id = this.data.children[this.data.activeChildKey].id

    const {
      data: productsRes
    } = await request.get(`${host}/mpcategories/products`, {
      product_id
    })

    let {
      products
    } = productsRes.data

    this.setData({
      products
    })

  },

  //  处理立即购买按钮点击 popup显示
  handlePopShow(e) {
    const { product } = e.target.dataset
    product.buyCount = 1

    //  处理选择型号标签中含有空格 小程序文字换行问题
    product.name = product.name.replace(/\r\n/g,' ')

    this.setData({
      popShow: true,
      currentProduct: product
    })
  },

  //  处理popup关闭事件
  handlePopClose() {
    this.setData({
      popShow: false
    })
  },

  //  处理图片查看功能
  handlePreviewImage(e) {
    let { focus_imgs } = e.currentTarget.dataset
    if(focus_imgs.length === 0) {
      wx.showToast({
        title: '暂无预览图',
        icon: 'none'
      })
    }
    wx.previewImage({
      urls: focus_imgs
    })
  },

  //  处理设备型号 选择事件
  handleProductTypeSelected() {
    let { currentProduct } = this.data
    currentProduct.productTypeSelected = !currentProduct.productTypeSelected
    this.setData({
      currentProduct
    })
  },

  //  处理购买数量变化事件
  handleBuyCountChanged(e) {
    this.setData({
      'currentProduct.buyCount': e.detail
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