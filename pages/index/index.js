const util = require('../../utils/util.js');
const api = require('../../config/api.js');
const user = require('../../services/user.js');

//获取应用实例
const app = getApp()
Page({
  data: {    
    floorGoods: [],
    banner:[], 
    goodList:[]   
  },
  onShareAppMessage: function () {
    return {
      title: 'WaterExquisite',
      desc: '水玲珑养生',
      path: '/pages/index/index'
    }
  },
  getIndexData: function () {
    let that = this;
    util.request(api.IndexUrl,{},'POST').then(function (res){
      // console.log('res.data is')
      // console.log(res.data)      
      if (res.errno === 0) {
        that.setData({
          floorGoods: res.data.floorGoods,
          banner: [{
            id: 0,
            imgUrl: 'http://zheli.org/data/20180812141227.jpg'
          },
          {
            id: 1,
            imgUrl: 'http://zheli.org/data/20180812141503.png'
          },
          {
            id: 2,
            imgUrl: 'http://zheli.org/data/20180812141617.png'
          }
          ],
          goodList: res.data.goodList,
        });

      }                                 
    }) 
  },
  onLoad: function (options) {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          // wx.getUserInfo({
          //   success: res => {
          //     console.log(1)
          //     console.log(res.userInfo)
          //     // 可以将 res 发送给后台解码出 unionId
          //     this.setData({
          //       webUserData: res.userInfo
          //     })
          //   }

          // })
          this.getIndexData();
        }
        else{
          wx.redirectTo({
            url: 'login/login'
          })
        }
      }
    })    
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
})
