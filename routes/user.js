const express=require('express');
const pool=require('../pool');
var router=express.Router();
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
router.post('/detail',function(req,res){
  var obj=req.query;
  if(!obj.uid){
    res.send({
	  code:401,
	  msg:"uid required"
	});
  };
  pool.query('SELECT * FROM cramc_user WHERE uid=?',[obj.uid],function(err,result){
    if(err)  throw  err;

	if(result.length<=0){
	  res.send({
	    code:301,
		msg:"the user was not retrieved"
	  });
	 return;
	};
	res.send(result);
  });
});
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
router.post('/login',function(req,res){});
router.post('/login',function(req,res){});
module.exports=router;
