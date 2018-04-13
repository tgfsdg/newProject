var query=require("../func/mysql.js");  
 

module.exports.run = function(req,res,body){
	
	var data = {};
	
	var a = new Promise(function(resolve, reject){
		
		var f = {};
		f.状态 = '成功';
		var arr = new Array();
		var sql =  "select * from user ";
		query(sql).then(function(data){
			if(data.rows[0]!=undefined){
				f.数据 = data.rows;
				resolve(f);
	        }else{
	        	f.状态 = '失败';
	        	reject(f);
	        }
		});
	});
	
	a.then(function(r){
		console.log(r);
		res.send(r)
	});
	
}