// pages/detail/detail.js
import { request } from '../../utils/request'
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'
import Poster from '../../miniprogram_npm/wxa-plugin-canvas/poster/poster'


const posterConfig = {
  jdConfig: {
    width: 750,
    height: 1334,
    backgroundColor: '#fff',
    debug: false,
    pixelRatio: 1,
    blocks: [
      {
        width: 690,
        height: 808,
        x: 30,
        y: 183,
        borderWidth: 2,
        borderColor: '#f0c2a0',
        borderRadius: 20,
      },
      {
        width: 634,
        height: 74,
        x: 59,
        y: 770,
        backgroundColor: '#fff',
        opacity: 0.5,
        zIndex: 100,
      },
    ],
    texts: [
      {
        x: 113,
        y: 61,
        baseLine: 'middle',
        text: '伟仔',
        fontSize: 32,
        color: '#8d8d8d',
      },
      {
        x: 30,
        y: 113,
        baseLine: 'top',
        text: '发现一个好物，推荐给你呀',
        fontSize: 38,
        color: '#080808',
      },
      {
        x: 92,
        y: 810,
        fontSize: 38,
        baseLine: 'middle',
        text: '标题标题标题标题标题标题标题标题标题',
        width: 570,
        lineNum: 1,
        color: '#8d8d8d',
        zIndex: 200,
      },
      {
        x: 59,
        y: 895,
        baseLine: 'middle',
        text: [
          {
            text: '2人拼',
            fontSize: 28,
            color: '#ec1731',
          },
          {
            text: '¥99',
            fontSize: 36,
            color: '#ec1731',
            marginLeft: 30,
          }
        ]
      },
      {
        x: 522,
        y: 895,
        baseLine: 'middle',
        text: '已拼2件',
        fontSize: 28,
        color: '#929292',
      },
      {
        x: 59,
        y: 945,
        baseLine: 'middle',
        text: [
          {
            text: '商家发货&售后',
            fontSize: 28,
            color: '#929292',
          },
          {
            text: '七天退货',
            fontSize: 28,
            color: '#929292',
            marginLeft: 50,
          },
          {
            text: '运费险',
            fontSize: 28,
            color: '#929292',
            marginLeft: 50,
          },
        ]
      },
      {
        x: 360,
        y: 1065,
        baseLine: 'top',
        text: '长按识别小程序码',
        fontSize: 38,
        color: '#080808',
      },
      {
        x: 360,
        y: 1123,
        baseLine: 'top',
        text: '超值好货一起拼',
        fontSize: 28,
        color: '#929292',
      },
    ],
    images: [
      {
        width: 62,
        height: 62,
        x: 30,
        y: 30,
        borderRadius: 62,
        url: 'http://172.16.1.227:3000/uploads/112_1.png',
      },
      {
        width: 634,
        height: 634,
        x: 59,
        y: 210,
        url: 'http://172.16.1.227:3000/uploads/112_1.png',
      },
      {
        width: 220,
        height: 220,
        x: 92,
        y: 1020,
        url: 'http://172.16.1.227:3000/uploads/112_1.png',
      }
    ]

  }
}


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
    typeShow: false,
    introduceActive: 0,
    typeIdx: -1,
    cart: [],
    cartBadgeNum: '',
    posterConfig: posterConfig.jdConfig,
    createPosterShow: false,
    posterImg: ''
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
    if (product.types.length > 1) {
      let max = Math.max.apply(Math, product.types.map(v => v.price))
      let min = Math.min.apply(Math, product.types.map(v => v.price))
      price = `${min.toFixed(2)}~${max.toFixed(2)}`
    } else {
      price = product.types[0].price.toFixed(2)
    }

    //  设置底部栏购物车图标badge
    let cartBadgeNum = !wx.getStorageSync('cartBadgeNum') ? 0 : parseInt(wx.getStorageSync('cartBadgeNum'))

    if (cartBadgeNum === 0) cartBadgeNum = ''

    this.setData({ product, totalSoldCount, price, cartBadgeNum })

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
   * 处理规格类型选择框弹出
   */
  handleTypeShow() {
    let typeShow = true
    this.setData({ typeShow })
  },

  handleTypeClose() {
    let typeShow = false
    this.setData({ typeShow })
  },

  //  处理图片查看功能
  handlePreviewImage(e) {
    let {
      focus_imgs
    } = e.currentTarget.dataset

    wx.previewImage({
      urls: focus_imgs
    })
  },

  //  处理设备型号 选择事件
  handleProductTypeSelected(e) {
    let { typeidx: typeIdx } = e.target.dataset
    let { product } = this.data
    product.types[typeIdx].selected = true
    product.types[typeIdx].buycount = 1
    product.types = product.types.map((v, i) => {
      if (i === typeIdx) {
        v.selected = true
        v.buycount = 1
      } else {
        v.selected = false
        v.buycount = 0
      }
      return v
    })

    this.setData({
      product,
      typeIdx
    })

  },

  //  处理购买数量变化事件
  handleBuyCountChanged(e) {

    let { product, typeIdx } = this.data
    product.types[typeIdx].buycount = e.detail

    this.setData({
      product
    })
  },

  //  处理加入购物车
  async handleAddToCart(e) {

    let isLogin = wx.getStorageSync('isLogin')

    if (!isLogin) {
      Toast.fail('请先登录')
      return
    }

    let { cart } = this.data

    let { product, typeIdx } = e.target.dataset.cartproduct

    //  产品大类id
    let { id: pid } = product
    let tid = typeIdx

    let { buycount } = product.types[typeIdx]

    const openid = wx.getStorageSync('openid')

    let cartproduct = { openid, pid, tid, buycount }

    cart.push(cartproduct)

    let cartBadgeNum = !wx.getStorageSync('cartBadgeNum') ? 0 : parseInt(wx.getStorageSync('cartBadgeNum'))

    cart.forEach(v => cartBadgeNum += v.buycount)

    this.setData({ cart, typeShow: false, cartBadgeNum })

    let addToCartRes = await request({ url: '/mpcart', data: { openid, pid, tid, buycount }, method: 'POST' })


    if (addToCartRes.data.meta.status === 200) {

      Toast.success('添加成功', { duration: 3000 })

    } else {

      Toast.success('添加失败', { duration: 3000 })

    }

  },

  /**
   * 底部栏图标
   * 导航至首页
   */
  navToHome() {
    this.navBackAndSwithTab(1, '../index/index')
  },

  /**
   * 底部栏图标
   * 导航至客户
   */
  navToService() {

  },

  /**
   * 底部栏图标
   * 导航至首页
   */
  navToCart() {
    this.navBackAndSwithTab(1, '../cart/cart')
  },

  /**
   * 返回tab 切换至制定tab
   * @param {*} delta 返回页数差值
   * @param {*} toPage 切换至的页面
   */
  navBackAndSwithTab(delta, toTab) {
    wx.navigateBack({
      delta: delta,
      complete: () => {
        wx.switchTab({
          url: toTab,
        })
      }
    })
  },

  /**
   * 处理分享给微信好友
   */
  handleShareToFreind() {
    this.handleShareClose()
  },

 /**
   * 处理分享给微信好友
   */
  onShareAppMessage() {
    let { product } = this.data
    return {
      title: `${product.name}`,
      path: `/page/detail/detail?pid=${product.id}`,
      imageUrl: `${product.focus_imgs[0]}`
    }
  },

  /**
   * 处理分享至朋友圈 
   */
  handleShareToTimeline() {
    this.handleShareClose()
  },

   /**
   * 处理分享到朋友圈 仅支持安卓
   */
  onShareTimeline() {
    let { product } = this.data
    return {
      title: `${product.name}`,
      path: `/page/detail/detail?pid=${product.id}`,
      imageUrl: `${product.focus_imgs[0]}`
    }
  },

  /**
   * 处理生成海报图片分享到朋友圈
   */
  handleGeneratePoster() {
    this.setData({ posterConfig: posterConfig.jdConfig, createPosterShow: true }, () => {
      Poster.create(true)    // 入参：true为抹掉重新生成
    })

    this.handleShareClose()
  },

  /**
   * 异步海报生成成功回调
   */
  onPosterSuccess(e) {
    const { detail } = e;
    this.setData({ posterImg: detail })
  },

  /**
   * 异步海报生成失败回调 
   */
  onPosterFail(err) {
    console.error(err);
  },

 

  touchmove() {
    // 重写此方法 因为是cover 所以禁用掉touchmove手势
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
    this.setData({ typeIdx: -1 })
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