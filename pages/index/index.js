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
    util.makerequest(api.GoodsList).then(function (res){
      console.log(res.data)                           
      that.setData({
        floorGoods:res.data.floorGoods,
        banner:res.data.banner, 
        goodList: res.data.goodList,     
      });      
    }) 
  },
  onLoad: function (options) {
    this.getIndexData();
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
