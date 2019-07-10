const express=require('express');
const pool=require('../pool');
var router=express.Router();
//用户注册
router.post('/v1/reg',function(req,res){
	var obj=post.body;
	var sql="insert into cramc_user_reg set ?"
	pool.query(sql,[obj],(err,result)=>{
		if(err)  throw  err;
		res.send("1")
	})
});
//用户登录
router.get('/v1/login/:uname&:upwd',(req,res)=>{
	var $uname=req.params.uname;
	var $upwd=req.params.upwd;
	var sql="select * from cramc_user_reg where uname=? and upwd=?"
  pool.query(sql,[$uname,$upwd],(err,result)=>{
    if(err)  throw  err;
		if(result.length>0){
		 res.send("1");
		}else{
		res.send("0");
		};
  });
});
//用户检索
router.get('/v1/detail/:uid',(req,res)=>{
	var $uid=req.params.uid
	var sql="select * from cramc_user_reg where uid=?"
  pool.query(sql,[$uid],(err,result)=>{
    if(err)  throw  err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send("0")
		}
  });
});
//修改用户信息
router.put('/v1/update',function(req,res){
  var obj=req.body;
  var uid=obj.uid;
  delete obj.uid;
	var sql="update cramc_user_reg set ? where uid=?"
  pool.query(sql,[obj,uid],(err,result)=>{
    if(err)  throw  err;
		res.send("1")
  });
});
//用户列表
router.get('/v1/list',function(req,res){
  var obj=req.params;
	var sql="select * from cramc_user_reg"
	pool.query(sql,[obj],(err,result)=>{
	  if(err)  throw  err;
		res.send(result);
	});
});
//删除
router.delete("/v1/delete/:uid",(req,res)=>{
	var $uid=req.params.uid;
	var sql="delete from xz_user where uid=?"
	pool.query(sql,[$uid],(err,result)=>{
		if(err)  throw  err
		res.send('1')
	})
});
//查询用户名
router.get("/v1/queryuser/:uname",(req,res)=>{
	var $uid=req.params.uname
	var sql="select * from cramc_user_reg where uname=?"
	pool.query(sql,[$uid],(err,result)=>{
		if(err)  throw  err;
		if(result.length>0){
			res.send("1")
		}else{
			res.send("0")	
		}
	})
});
//用户报名
router.post("v1/user_join",(req,res)=>{
	var obj=req.body
	var sql="insert into user_join set ?"
	pool.query(sql,[obj],(err,result)=>{
		if(err)  throw  err;
		res.send("1")
	})
})
module.exports=router;