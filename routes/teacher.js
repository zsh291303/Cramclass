const express=require('express');
const pool=require('../pool');
var router=express.Router();
//添加老师
router.post('/v1/add',function(req,res){
	var obj=req.body;
	var sql="insert into cramc_teacher set ?"
	pool.query(sql,[obj],(err,result)=>{
		if(err)  throw  err
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0")
		}
	});
});
//查询老师
router.get('/v1/detali/:tid',function(req,res){
  var $tname=req.params.tname;
	var sql="select * from cramc_teacher where tname=?"
	pool.query(sql,[$tname],function(err,result){
		if(err)  throw  err;
		if(result.length>0){
			res.send(result)
		}else{
			res.send("0");
		}
	});
});
module.exports=router;