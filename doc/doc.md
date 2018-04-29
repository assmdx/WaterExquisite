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
	good{
		id,
		name,
		img,
		content,
		price
	}			
	order{
		wxname(微信号),
		orderhash(唯一标识这一次order),
		good_id,
		good_num(购买的数量)
	}
# 开发
  plan    
    获取到商品列表并展示
    用微信相关信息登录
  util.js
  exception.js（管理异常)
  api.js（管理前后台数据接口）
  
  
    