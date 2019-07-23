const express=require('express');
const pool=require('../pool');
var router=express.Router();
//添加
router.post('/v1/stu_add',function(req,res){
	var obj=req.body;
	var sql="insert into cramc_stu set ?"
	pool.query(sql,[obj],(err,result)=>{
		if(err)  throw  err
			res.send("1");
	});
})
//查询
router.get('/v1/stu_detail/:sname',(req,res)=>{
	var $sname=req.params.sname;
	var sql='select * from cramc_stu where sname=?'
	pool.query(sql,[$name],(err,result)=>{
		if(err) throw err
		if(result.length>0){
			result="1"
		}else{
			result="0"	
		}
	})
})
module.exports=router;