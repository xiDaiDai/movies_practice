var express = require('express')
var path = require('path')
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000
var app = express()

app.set('views','./views/pages')
app.set('view engine','jade')
app.use(express.static(path.join(__dirname,'bower_components')))
app.use(bodyParser.urlencoded({extended:false}))
app.listen(port)

console.log('movies start on port '+ port)

//index
app.get('/',function(req,res){
	res.render('index',{
		title:'首页',
		movies:[{
			title:'机械战警',
			_id:1,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:'机械战警',
			_id:2,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:'机械战警',
			_id:3,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:'机械战警',
			_id:4,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:'机械战警',
			_id:5,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		}]
	})
})

//detail
app.get('/movie/:id',function(req,res){
	res.render('detail',{
		title:'detail',
		movie:{
			doctor:'James Camery',
			country:'America',
			title:'机械战警',
			year:2014,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
			language:'英语',
			flash:'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
			summary:'翻牌子快快快快递劫匪会计师考虑的风景深刻理解的疯狂就算了可减肥开始减肥手机打开了附件是开放接口设计建设路口附近时快捷方式决定立即发送来的接发两款手机发两款手机的开发建设路口的附近'

		}
	})
})

//list
app.get('/admin/list',function(req,res){
	res.render('list',{
		title:'list',
		movies:[{
			title:'机械战警',
			_id:1,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
			doctor:'James Camery',
			country:'America',
			year:2014,
			language:'英语',
			flash:'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
			summary:'翻牌子快快快快递劫匪会计师考虑的风景深刻理解的疯狂就算了可减肥开始减肥手机打开了附件是开放接口设计建设路口附近时快捷方式决定立即发送来的接发两款手机发两款手机的开发建设路口的附近'
		},{
			title:'机械战警',
			_id:2,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
			doctor:'James Camery',
			country:'America',
			year:2014,
			language:'英语',
			flash:'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
			summary:'翻牌子快快快快递劫匪会计师考虑的风景深刻理解的疯狂就算了可减肥开始减肥手机打开了附件是开放接口设计建设路口附近时快捷方式决定立即发送来的接发两款手机发两款手机的开发建设路口的附近'
		},{
			title:'机械战警',
			_id:3,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
			doctor:'James Camery',
			country:'America',
			year:2014,
			language:'英语',
			flash:'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
			summary:'翻牌子快快快快递劫匪会计师考虑的风景深刻理解的疯狂就算了可减肥开始减肥手机打开了附件是开放接口设计建设路口附近时快捷方式决定立即发送来的接发两款手机发两款手机的开发建设路口的附近'
		},{
			title:'机械战警',
			_id:4,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
			doctor:'James Camery',
			country:'America',
			year:2014,
			language:'英语',
			flash:'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
			summary:'翻牌子快快快快递劫匪会计师考虑的风景深刻理解的疯狂就算了可减肥开始减肥手机打开了附件是开放接口设计建设路口附近时快捷方式决定立即发送来的接发两款手机发两款手机的开发建设路口的附近'
		},{
			title:'机械战警',
			_id:5,
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
			doctor:'James Camery',
			country:'America',
			year:2014,
			language:'英语',
			flash:'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
			summary:'翻牌子快快快快递劫匪会计师考虑的风景深刻理解的疯狂就算了可减肥开始减肥手机打开了附件是开放接口设计建设路口附近时快捷方式决定立即发送来的接发两款手机发两款手机的开发建设路口的附近'
		}]
	})
})

app.get('/admin/movie',function(req,res){
	res.render('admin',{
		title:'后台录入页',
		movie:{
			title:'',
			doctor:'',
			country:'',
			year:'',
			poster:'',
			flash:'',
			summary:'',
			language:''
		}
	})
})