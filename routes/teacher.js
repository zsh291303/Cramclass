const express=require('express');
const pool=require('../pool');
var router=express.Router();
//添加老师
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
	pool.query('INSERT INTO cramc_teacher SET ?',[obj],function(err,result){
	  if(err)  throw  err;
		if(result.length>0){
			res.send({
				code:200,
				msg:'add suc'
			});
		}
	});
});
//查询老师
router.post('detali',function(req,res){
  var obj=req.body;
	if(!obj.tname){
		res.send({
			code:401,
			msg:'tname required'
		});
		return;
	}
	pool.query('SELECT * FROM cramc_teacher WHERE tname=?',[obj],function(err,result){
		if(err)  throw  err;
		if(result.length>0){
			res.send(result)
		}else{
			res.send({
				code:301,
				msg:'查无此人'
			});
		}
	});
});
module.exports=router;