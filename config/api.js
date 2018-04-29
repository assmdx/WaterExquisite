const ApiRootUrl = 'http://127.0.0.1:8360/WaterExquisite_api/';
module.exports = {
  IndexUrl: ApiRootUrl + 'index/index', //首页数据接口
	AuthLoginByWeixin: ApiRootUrl + 'auth/loginByWeixin', //微信登录
	GoodsList: ApiRootUrl + 'goods/list',  //获得商品列表	
	GoodsDetail: ApiRootUrl + 'goods/detail',  //获得商品的详情

	CartCheckout: ApiRootUrl + 'cart/checkout', // 下单前信息确认
	OrderSubmit: ApiRootUrl + 'order/submit', // 提交订单
  	PayPrepayId: ApiRootUrl + 'pay/prepay', //获取微信统一下单prepay_id

  	OrderList: ApiRootUrl + 'order/list',  //订单列表
  	OrderDetail: ApiRootUrl + 'order/detail',  //订单详情
  	OrderCancel: ApiRootUrl + 'order/cancel',  //取消订单  
  	
};