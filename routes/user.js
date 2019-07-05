const express=require('express');
const pool=require('../pool');
var router=express.Router();
//用户注册
router.post('/reg',function(req,res){
  var obj=req.body;
  var i=400
  for(var key in obj){
    i++;
		if(!obj[key]){
			res.send({
				code:i,
				msg:[key]+' required'
			});
			return;
		};
  };
	pool.query('SELECT * FORM cramc_user email=?',[obj.email],function(err,result){
		if(err)  throw  err;
		if(result.length>0){
			res.send({
				code:201,
				msg:'mailbox alread exists'
			});
		  return;
		}
	});
	pool.query('SELECT * FORM cramc_user phone=?',[obj.phone],function(err,result){
		if(err)  throw  err;
		if(result.length>0){
			res.send({
				code:201,
				msg:'phone alread exists'
			});
		  return;
		}
	});
	pool.query('SELECT * FORM cramc_user uname=?',[obj.email],function(err,result){
		if(err)  throw  err;
		if(result.length>0){
			res.send({
				code:201,
				msg:'uname alread exists'
			});
		  return;
		}
	});
  pool.query('INSERT INTO cramc_user SET ?',[obj],function(err,result){
    if(err)  throw  err;
		if(result.affectedRows>0){
			res.send({
				code:200,
				msg:"register suc"
			});
		};
  });
});
//用户登录
router.post('/login',function(req,res){
  var obj=req.body;
  if(!obj.uname){
    res.send({
	  code:401,
	  msg:"uname required"
	});
  return;
  };
  if(!obj.upwd){
    res.send({
	  code:402,
	  msg:"uwpd required"
	});
  return;
  };
  pool.query('SELECT * FROM cramc_user WHERE uname=? AND upwd=?',[obj.uname,obj.upwd],function(err,result){
    if(err)  throw  err;
	if(result.length>0){
	  res.send({
	    code:200,
		msg:"login suc"
	  });
	}else{
	  res.send({
	    code:301,
		msg:"uname or upwd err"
	  });
	};
  });
});
//用户检索
router.post('/detail',function(req,res){
  var obj=req.query;
  if(!obj.uid){
    res.send({
	  code:401,
	  msg:"uid required"
		});
	return;
  };
  pool.query('SELECT * FROM cramc_user WHERE uid=?',[obj.uid],function(err,result){
    if(err)  throw  err;

		if(result.length>0){
			res.send(result);
	  }else{
			res.send({
	    code:301,
			msg:"the user was not retrieved"
			});
		};
  });
});
//修改用户信息
router.post('/update',function(req,res){
  var obj=req.body;
  var i=400;

  for(var key in obj){
    i++;
		if(!obj[key]){
		 res.send({
			 code:i,
			 msg:[key]+' required'
			});
			return;
		};	
  };
  var uid=obj.uid;
  delete obj.uid;
  pool.query('UPDATE cramc_user SET ? WHERE uid=?'[obj,uid],function(err,result){
    if(err)  throw  err;
	if(result.affectedRows>0){
	  res.send({
	    code:200,
		msg:'update suc'
	  });
	}else{
	  res.send({
	    code:301,
		msg:'update err'
	  });
	};
  });
});
//用户列表
router.get('/list',function(req,res){
  var obj=req.query;
	if(!obj.pno){
		obj.pno=1;
	};
	if(!obj.pagS){
		obj.pagS=5;
	};
	parseInt(obj.pno);
	parseInt(obj.pagS);
	var start=(obj.pno-1)*obj.pagS;
	pool.query('SELECT * FROM cramc_user LIMIT ?,?',[start,pagS],function(err,result){
	  if(err)  throw  err;
		res.send(result);
	});
});
module.exports=router;
