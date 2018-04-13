var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var http = require("http");
var bodyParser = require('body-parser');  

app.set('port',process.env.PORT || 3000);

//app.use(function(req,res,next){
//	console.log('time:',Date.now());
//	next();
//})

// app.use('/user/:id',function(req,res,next){
//     console.log('Request Type:', req.method); 
// 	next();
// })

app.use(express.static(path.join(__dirname, 'public')));


app.get('/about',function(req,res){
	res.send('the node course');
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/ajax/*',function(req,res){
	
	var currentData = '';
    req.on("data",function(data){
    	currentData += data;
    });
    console.log(req.body);
	var func = req.url.substring(6);
	var ajax = require('./ajax/ajax.js');
	var bool = ajax.searchfile(func);
	if (bool) {
		func = require('./ajax/'+func+'.js');
		func.run(req,res,currentData);
	}else{
		res.send('404-Not Found func');
	}
	
})


app.use(function(req,res){
	res.status('404');
	res.send('404-Not Found')
})




   
app.listen(app.get('port'),function(){
	console.log('express started on port 3000')
})

