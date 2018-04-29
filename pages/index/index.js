const util = require('../../utils/util.js');
const api = require('../../config/api.js');
const user = require('../../services/user.js');

//获取应用实例
const app = getApp()
Page({
  data: {    
    floorGoods: [{
      id:1,
      name:"夏季服饰"
    }],
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
    // let that = this;
    // util.request(api.IndexUrl).then(function (res) {
    //   //涉及微信登录
    //   if (res.errno === 0) {
    //     that.setData({          
    //       floorGoods: res.data.categoryList
    //       //?????????????涉及数据的定义和数据库的定义          
    //     });
    //   }
    // });
    util.makerequest(api.GoodsList).then(function (res){ 
      let that = this; 
      if(res.errno == 0) {
        that.setData({
          floorGoods:res.data.floorGoods,
          banner:res.data.banner,
          goodList:res.data
        });
      }    
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
