const express=require('express');
const pool=require('../pool');
var router=express.Router();
router.post('/v1/add',function(req,res){
	var obj=req.body;
	var sql="insert into cramc_stu set ?"
	pool.query(sql,[obj],(err,result)=>{
		if(err)  throw  err
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0")
		}
	});
})
module.exports=router;