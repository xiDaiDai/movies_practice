var express = require('express')
var path = require('path')
var mongoose = require('mongoose')
var _ = require('underscore')
var Movie = require('./models/movie')
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000
var app = express()

mongoose.connect('mongodb://localhost/imooc')

app.set('views','./views/pages')
app.set('view engine','jade')
app.use(express.static(path.join(__dirname,'bower_components')))
app.use(bodyParser.urlencoded({extended:false}))
app.listen(port)

console.log('movies start on port '+ port)

//index
app.get('/',function(req,res){
	Movie.fetch(function(err,movies){
		if(err){
			console.log(err)
		}
		res.render('index',{
			title:'首页',
			movies: movies
		})

	})
})

//detail
app.get('/movie/:id',function(req,res){
	var id = req.params.id

	Movie.findById(id,function(err,movie){
			res.render('detail',{
				title:''+movie.title,
				movie: movie
			})
	})
})

//list
app.get('/admin/list',function(req,res){
	Movie.fetch(function(err,movies){
		if(err){
			console.log(err)
		}
		res.render('list',{
			title:'list',
			movies: movies
		})

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

//admin update movie
app.get('./admin/update/:id',function(req,res){
	var id = req.params.id
	if(id){
		Movie.findById(id,function(err,movie) {
			res.render('admin',{
				title:'后台更新',
				movie:movie
			})
		})
	}
})

//admin post moive
app.post('/admin/movie/new',function(req,res){
	var id = req.body.movie._id
	var movieObj = req.body.movie
	var _movie

	if(id!=='undefined'){
		Movie.findById(id,function(err,movie){
			if(err){
				console.log(err)
			}
			_movie = _.extend(movie,movieObj)
			_movie.save(function(err,movie){
				if(err){
					console.log(err)
				}
				res.redirect('./movie/'+movie._id)
			})
		})
	}else{
		_movie = new Movie({
			doctor:movieObj.doctor,
			title:movieObj.title,
			country:movieObj.country,
			language:movieObj.language,
			year:movieObj.year,
			poster:movieObj.poster,
			summary:movieObj.summary,
			flash:movieObj.flash,
		})
		_movie.save(function(err,movie){
				if(err){
					console.log(err)
				}
				res.redirect('./movie/'+movie._id)
			})
	}
})



