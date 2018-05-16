var app = getApp();
var WxParse = require('../../lib/wxParse/wxParse.js');
var util = require('../../utils/util.js');
var api = require('../../config/api.js');
Page({
  data:{
    id: '',
    goods: {},//商品的具体细节，名字，价格等
    gallery: [],//图片轮播
    attribute: [],//商品参数    
    brand: {},
    specificationList: [],
    productList: [],
    relatedGoods: [],
    cartGoodsCount: 0,
    userHasCollect: 0,
    number: 1,//商品数量
    checkedSpecText: '请选择规格数量',
    openAttr: false,
    noCollectImage: "/static/images/icon_collect.png",
    hasCollectImage: "/static/images/icon_collect_checked.png",
    collectBackImage: "/static/images/icon_collect.png"
  },
  getGoodsInfo:function(){
    let that = this;
    util.makerequest(api.GoodsDetail,{id:that.data.id}).then(function(res){
      if (res.data.errno === 0) {
        console.log('res.data is :' + res.data)
        that.setData({
          goods: res.data.data[0].info,
          gallery: res.data.data[0].gallery,
          attribute: res.data.data[0].attribute,
          brand: res.data.data[0].brand,
          specificationList: res.data.data[0].specificationList,
          productList: res.data.data[0].productList,
          userHasCollect: res.data.data[0].userHasCollect
        });
        WxParse.wxParse('goodsDetail', 'html', res.data.data[0].info.goods_desc, that);
      }
    });
  },  
  onLoad:function(options){
    this.setData({
      id:options.id      
    });
    this.getGoodsInfo();  
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
  switchAttrPop: function () {
    if (this.data.openAttr == false) {
      this.setData({
        openAttr: !this.data.openAttr,
        collectBackImage: "/static/images/detail_back.png"
      });
    }
  },
  cutNumber: function () {
    this.setData({
      number: (this.data.number - 1 > 1) ? this.data.number - 1 : 1
    });
  },
  addNumber: function () {
    this.setData({
      number: this.data.number + 1
    });
  }
});