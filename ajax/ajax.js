var fs = require('fs');
var async = require('async');

var ajax = {};

ajax.searchfile = function(fileName){

	var files = fs.readdirSync(__dirname);
	for(var i = 0 ; i < files.length ; i++){
		if(files[i] == fileName+".js"){
			return true;
		}
	}

	return false;
}






module.exports = ajax;