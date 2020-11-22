import { baseURL } from './config'

// class request {

//   constructor() {
//     //  请求计数器 用来完成所有请求时置0 关闭toast
//     this.count = 0
//   }

//   get(params) {
//     return new Promise((resolve, reject) => {
//       //  发起请求 计数器自增1
//       this.count++

//       wx.showLoading({
//         title: '加载中...',
//         mask: true
//       })

//       wx.request({
//         data: params,
//         url: baseURL + params.url,
//         success: res => {
//             resolve(res)
//         },
//         fail: err => {
//           wx.showToast({
//             title: '网络不给力哟',
//             mask: true,
//             icon: 'none'
//           })
//           reject(err)
//         },
//         complete: () => {
//           this.count--
//           if (this.count === 0) {
//             wx.hideLoading()
//           }
//         }
//       })
//     })
//   }
// }

// module.exports = new request()

// 定义一个同时发送异步请求代码的次数
let ajaxTimes=0;

// 异步请求的封装
export const request=(params)=>{
	// 没发送一次异步请求，就让ajaxTimes+1 确保页面有几次请求
    ajaxTimes++;
    // 显示加载层
    wx.showLoading({
        title: "加载中...",
        mask: true
    });
      
    // 定义公共的url 定义前面相同的url  下面拼接起来
    return new Promise((resolve,reject)=>{
        wx.request({
        	//es6中的扩展运算符
            data: params,
            // 这里将公共的url和传过来的url后半段拼接起来
            url:baseURL+params.url,
            success:(result)=>{
                resolve(result);//返回成功数据
            },
            fail:(err)=>{
                reject(err);//返回失败数据
            },
            // 成功失败都会执行complete
            complete:()=>{
            	// 这里的ajaxTimes--是确保一个页面里的请求都结束了才关闭加载层
            	// 如果没有ajaxTimes--和if的判断，会加载一条请求后就关闭加载层
                ajaxTimes--;
                if(ajaxTimes===0){
                    // 关闭加载层
                    wx.hideLoading();
                }
            }
        })
    })
}