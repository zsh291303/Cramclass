const express=require('express');
const pool=require('../pool');
var router=express.Router();
router.get('/list',function(req,res){
	var obj=req.query;
	if(!obj.pno){
		obj.pno=1;
	};
	if(!obj.count){
		obj.count=10;
	};
	parseInt(obj.pno);
	parseInt(obj.count);
	var start=(obj.pno-1)*obj.count;
	pool.query('SELECT * FROM cramc_course LIMIT ?,?',[start,count],function(err,result){
		if(err)  throw  err;
		res.send(result);
	});
});
router.get('/detail',function(req,res){
	var obj.query;
	if(){};
});
router.get('/list',function(req,res){});
module.exports=router;