class request {

  constructor() {
    this.count = 0
  }

  get(url, params = {}) {
    return new Promise((resolve, reject) => {
      this.count++
      wx.showLoading({
        title: '加载中...',
        mask: true
      })
      wx.request({
        url: url,
        data: params,
        method: 'GET',
        success: res => {
          this.count--
          if (this.count === 0) {
            wx.hideLoading()
            resolve(res)
          }
        },
        fail: err => {
          this.count--
          if (this.count === 0) {
            wx.hideLoading()
            reject(err)
          }
        }
      })
    })
  }
}

module.exports = new request()