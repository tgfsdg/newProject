// module.exports = function(req,res,next){
// 	if(Math.random() > 0.5){
// 	  return next();
// 	}
// 	res.send('德玛西亚!')
// }

module.exports = {
	a: function(req,res,next){
	  console.log(111);
	  return next();
	},
	b: function(req,res,next){
	  console.log(222);
	  return next();
	}
}