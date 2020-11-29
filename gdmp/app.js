import { request } from './utils/request'

App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: async function () {
    //  获取登录凭证
    let js_code = await this.handleGetJscode()
    
    //  获取登录openid
    let { data: openidRes } = await request({
      url: '/mpopenid',
      method: 'POST',
      data: { js_code }
    })

    let { openid } = openidRes.data

    //  查询openid 是否使用过此小程序
    let { data: openidQueryRes } = await request({
      url: '/mpopenid',
      data: { openid }
    })

    wx.setStorage({
      data: openid,
      key: 'openid',
    })
  },

  //  获取登录凭证 jscode
  handleGetJscode() {
    return new Promise((resolve, reject) => {
      wx.login({
        success: res => {
          resolve(res)
        },
        fail: err => {
          reject(err)
        }
      })
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
