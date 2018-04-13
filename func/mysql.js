var mysql=require("mysql");  

var pool = mysql.createPool({  
    host: 'localhost',  
    user: 'root',  
    password: '123456',  
    database: 'test',  
    port: '3306'  
});  
  

var query =function(sql){  
	
	return new Promise(function(resolve, reject){
		
		pool.getConnection(function(err,conn){  

	        if(err){  
	        	reject(err);
	        }else{  
	            conn.query(sql,function(err,rows,fields){  
	            		
        			//释放连接  
            		conn.release();  
	                resolve({"err":err,
                        "rows":rows,
                        "fields":fields
	                });
        		
	            });  
	        }  
	    });  
	})
};  
  
module.exports=query;  
  

