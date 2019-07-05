const express=require('express');
const pool=require('../pool');
var router=express.Router();
//课程列表
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
//查询课程
router.get('/detail',function(req,res){
	var obj=req.query;
	if(!obj.cid){
	  res.send({
			code:401,
			msg:"cid required"
		});
	 return;
	};
	pool.query('SELECE * FROM cramc_course WHERE cid=?',[obj.cid],function(err,result){
		if(err)  throw  err;
		res.send(result);
	});
});
//删除课程
router.get('/delete',function(req,res){
	var obj=req.query;
	if(!obj.cid){
		res.send({
			code:401,
			msg:"cid required"
		});
	 return;
	};
	pool.query('DELETE FROM cramc_course WHERE uid=?',[obj.cid],function(err,result){
		if(err)  throw  err;
		if(result.affectedRows>0){
		  res.send({
				code:200,
				msg:"delete suc"
			});
		}else{
			res.send({
				code:301,
				msg:"delete err"
			});	
		}
	});
});
//添加课程
router.post('/add',function(req,res){
	var obj=req.body;
	var i=400;
	for(var key in obj){
		i++
		if(!obj[key]){
			res.send({
				code:i,
				msg:key+" required"
			});
			return;
		}
	}
	pool.query('INSERT INTO cramc_course SET ?'[obj],function(err,result){
		if(err)  throw  err
		if(result.length>0){
			res.send({
			  code:200,
				msg:"add suc"
			});
		}
	});
});
module.exports=router;