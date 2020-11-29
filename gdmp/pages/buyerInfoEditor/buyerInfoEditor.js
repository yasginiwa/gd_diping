// pages/buyerInfoEditor/buyerInfoEditor.js
import areaList from '../../utils/area'
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'
import addressParse from '../../miniprogram_npm/address-parse/index'
import {
  request
} from '../../utils/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    buyerInfo: {},
    districtShow: false,
    areaList: areaList,
    address: {
      name: '',
      district: '',
      detail: '',
      phone: ''
    },
    vagueAddress: '',
    recognizeSwitchStatus: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let address = options
    this.setData({
      address
    })
  },

  /**
   * 点击 快速识别 开关 事件
   */
  handleRecognizeSwitchChange(e) {
    this.setData({
      recognizeSwitchStatus: e.detail.value
    })
  },

  /**
   * 全角转半角函数
   */
  ToCDB(str) {
    var tmp = "";
    for (var i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) > 65248 && str.charCodeAt(i) < 65375) {
        tmp += String.fromCharCode(str.charCodeAt(i) - 65248);
      } else {
        tmp += String.fromCharCode(str.charCodeAt(i));
      }
    }
    return tmp
  },

  /**
   * 处理粘贴过来的 模糊地址 输入编辑 拿到模糊地址
   */
  handleVagueAddressEdit(e) {
    //  将粘贴的地址全角转半角
    let pastedAdress = this.ToCDB(e.detail.value)

    //  将地址以'\n'换行符分开成数组
    let addrArr = pastedAdress.split('\n')

    //  找到地址数组中':' 切掉':'之前的字符串 重新组成数组
    let regularAddrArr = addrArr.map(v => {
      let index = v.indexOf(':')
      let str = v.substring(index + 1)
      return str
    })

    //  重新组成的数组 以','分开 组成新的字符串
    let address = regularAddrArr.join(',')

    //  解析地址
    let addrObj = addressParse.parse(address)[0]

    //  设置地址数据
    this.setData({
      ['address.name']: addrObj.name,
      ['address.district']: addrObj.province + addrObj.city + addrObj.area,
      ['address.detail']: addrObj.details,
      ['address.phone']: addrObj.mobile
    })

  },

  //  处理清空按钮 点击事件
  handleClearVagueAddress() {
    console.log('clear')
    this.setData({
      vagueAddress: '',
      address: {}
    })
  },

  /**
   * 点击了地区选择箭头
   */
  handleDistrictSelected() {
    this.setData({
      districtShow: true
    })
  },

  /**
   * 点击了地区选择“取消”
   */
  handleDistrictSelectedCancel() {
    this.setData({
      districtShow: false
    })
  },

  /**
   * 点击了地区选择“确认”
   */
  handleDistrictSelectedConfirm(e) {
    let district = ''
    e.detail.values.forEach(v => district += v.name)

    this.setData({
      ['address.district']: district,
      districtShow: false
    })
  },

  /**
   * 点击了地区 姓名 改变事件
   */
  handleAddressNameEdit(e) {
    this.setData({
      ['address.name']: e.detail.value
    })
  },

  /**
   * 点击了地区 详细地址 改变事件
   */
  handleAddressDetailEdit(e) {
    this.setData({
      ['address.detail']: e.detail.value
    })
  },

  /**
   * 点击了地区 手机 改变事件
   */
  handleAddressPhoneEdit(e) {
    this.setData({
      ['address.phone']: e.detail.value
    })
  },

  /**
   * 姓名清空事件
   */
  handleAddressNameClear() {
    this.setData({
      ['address.name']: ''
    })
  },

  /**
   * 详细信息清空事件
   */
  bindAddressDetailClear() {
    this.setData({
      ['address.detail']: ''
    })
  },

  /**
   * 手机号清空事件
   */
  handleAddressPhoneClear() {
    this.setData({
      ['address.phone']: ''
    })
  },

  /**
   * 点击了 "保存" 事件
   */
  async handleSaveAddress() {

    //  手机号正则
    let phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/

    if (this.data.address.name === '' || this.data.address.district === '' || this.data.detail === '') {
      Toast.fail('填写完整信息')
      return
    }

    if (!phoneReg.test(this.data.address.phone)) {
      Toast.fail('手机格式错误')
      return
    }

    let openid = wx.getStorageSync('openid')

    let {
      name,
      district,
      detail,
      phone
    } = this.data.address

    let buyer = {
      openid,
      name,
      district,
      detail,
      phone
    }

    if (this.data.address.id) {
      let addressUpdateRes = await request({
        url: '/mpbuyerinfo/address',
        data: this.data.address,
        method: 'PUT'
      })
      if (addressUpdateRes.data.meta.status === 200) {
        Toast.success('更新地址成功')
        wx.navigateBack({
          url: '../receiverInfo/receiverInfo'
        })
      } else {
        Toast.fail('更新地址失败')
      }
    } else {
      let addressRes = await request({
        url: '/mpbuyerinfo/address',
        data: buyer,
        method: 'POST'
      })

      if (addressRes.data.meta.status === 200) {
        Toast.success('添加地址成功')
        wx.navigateBack({
          url: '../receiverInfo/receiverInfo'
        })
      } else {
        Toast.fail('添加地址失败')
      }
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