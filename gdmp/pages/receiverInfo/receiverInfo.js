// pages/receiverInfo/receiverInfo.js
import {
  request
} from '../../utils/request'
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    addresses: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 跳转到收货信息编辑页面
   */
  handleNavToBuyerInfoEditor() {
    wx.navigateTo({
      url: '../buyerInfoEditor/buyerInfoEditor'
    })
  },

  /**
   *  发起请求 获取 收货地址 信息
   */
  async getAddresses() {
    const openid = wx.getStorageSync('openid')

    let addressesRes = await request({
      url: '/mpbuyerinfo/address',
      data: {
        openid: openid
      }
    })

    let {
      addresses
    } = addressesRes.data.data

    this.setData({
      addresses
    })
  },

  /**
   * 处理点击 编辑 按钮
   */
  handleEditAddress(e) {
    let {
      address
    } = e.currentTarget.dataset
    wx.navigateTo({
      url: `../buyerInfoEditor/buyerInfoEditor?id=${address.id}&name=${address.name}&district=${address.district}&detail=${address.detail}&phone=${address.phone}`,
    })
  },

  /**
   * 处理点击 删除 按钮
   */
  hanleDeleteAddress(e) {
    let {
      address
    } = e.currentTarget.dataset
    if (address.default_address === 1) {
      Toast.fail('不能删除默认地址')
      return
    }

    Dialog.confirm({
        title: '温馨提示',
        message: '确认要删除此地址？',
      })
      .then(async () => {

        let addressDelRes = await request({
          url: '/mpbuyerinfo/address',
          data: {
            id: address.id
          },
          method: 'DELETE'
        })
        if (addressDelRes.data.meta.status === 200) {
          this.getAddresses()
          Toast.success('删除成功')
        } else {
          Toast.fail('删除失败')
        }

      })
      .catch(() => {
        // on cancel
      });

  },

  /**
   * 处理 更改默认地址 点击事件
   */
  async handleDefaultAddressChange(e) {
    let { address } = e.currentTarget.dataset

    let { id } = address

    let addresses = this.data.addresses
    
    addresses = addresses.map(v => {
      if(v.id === id) {
        v.default_address = 1
      } else {
        v.default_address = 0
      }
      return v
    })

    this.setData({
      addresses
    })

    let setDefaultAddressRes = await request({ url: '/mpbuyerinfo/address/modifydefault', data: { id }, method: 'PUT' })

    console.log(setDefaultAddressRes)

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
    this.getAddresses()
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