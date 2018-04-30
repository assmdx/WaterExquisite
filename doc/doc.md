# 界面
	1.首页(商品列表)
		商品详情(商品goodId,商品名称 goodName,图片 imgUrl,商品介绍goodContent,商品价格goodPrice)
	2.个人页面
		订单
# 前端  
	1.微信登录
# 后台
  appinit.js
    初始化app，数据库
  index.js
    处理与前端交互的RESTful API

## 数据库
  mongodb
    good{
      id:,
      goods: {},//商品的具体细节，名字，价格等
      gallery: [],//图片轮播
      attribute: [],//商品参数 [{name,value}]
      info:{}            
      specificationList: [],
      productList: [],
      relatedGoods: [],
      cartGoodsCount: 0,
      userHasCollect: 0,
      number: 1,
      checkedSpecText: '请选择规格数量',
      openAttr: false,
      noCollectImage: "/static/images/icon_collect.png",
      hasCollectImage: "/static/images/icon_collect_checked.png",
      collectBackImage: "/static/images/icon_collect.png"
    }			
    order{
      id,
      wxname(微信号),
      orderhash(唯一标识这一次order),
      good_id,
      good_num(购买的数量)
    }
    banner{//热门商品
      goodidList[]
    }
  本地
    history{
      uerid，
      goodid
    }
# 开发
  plan
    获取用户微信信息登录(存储到本地)
    //获取到商品列表，轮播图并展示
      搜索商品（name,label模糊搜索）
        展示搜索结果商品列表（类似首页）页
      用户点击轮播图
        到指定商品页面（图片轮播图，价格，内容，）
          订单支付页
      商品
        到指定商品页面
          订单支付页面
      底部"我"
        到我的页面（展示用户头像，）
          我的足迹
          我的收藏
          我的订单
          我的收货地址    

  util.js
  exception.js（管理异常)
  api.js（管理前后台数据接口）
  
  
  
    