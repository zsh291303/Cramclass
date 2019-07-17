const express=require('express');
const pool=require('../pool');
var router=express.Router();
//课程列表
router.get('/v1/list',function(req,res){
	var obj=req.params;
	var sql="select * from cramc_course"
	pool.query(sql,(err,result)=>{
		if(err)  throw  err;
		res.send(result);
	});
});
//查询课程
router.get('/v1/detail/:cid',function(req,res){
	var $cid=req.params.cid;
	var sql="select * from cramc_course where cid=?"
	pool.query(sql,[$cid],(err,result)=>{
		if(err)  throw  err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send("0")
		}
	});
});
//删除课程
router.delete('/v1/delete/:cid',function(req,res){
	var $cid=req.params.cid;
	var sql="delete from cramc_course where cid=?"
	pool.query(sql,[$cid],(err,result)=>{
		if(err)  throw  err;
		res.send("1")
	});
});
//添加课程
router.post('/v1/add',function(req,res){
	var obj=req.body;
	var sql="insert into cramc_course set ?"
	pool.query(sql,[obj],(err,result)=>{
		if(err)  throw  err
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0")
		}
	});
});
//修改课程信息
router.put("/v1/update",(req,res)=>{
	var obj=req.body;
	var $cid=obj.cid;
	delete obj.cid
	var sql="update cramc_course set ? where cid=?";
	pool.query(sql,[obj,$cid],(err,result)=>{
		if(err)  throw  err;
		res.send("1")
	});
});
module.exports=router;