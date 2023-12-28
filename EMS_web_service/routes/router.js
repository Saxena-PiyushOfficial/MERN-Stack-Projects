const express=require("express");
var router=express.Router();
var connection=require("../db/dbconnect")
router.get("/employees",function(req,resp){
  connection.query("select * from employee",(err,data,fields)=>{
    if(err)
    {
      resp.send("<h1>Data not found</h1>")
    }
    else{
      console.log("Data:", data);
      resp.send(data)
    }
  })
})

router.post("/employees/employee",function(req,resp){
  connection.query("insert into employee values(?,?,?,?)",[req.body.empId,req.body.name,req.body.salary,req.body.deptName],(err,result)=>{
   if(err)
   {
    resp.send("<h1>no data found</h1>")
   }else{
    resp.send(result);
   }
  })
})
router.delete("/employees/employee/:id",function(req,resp){
  connection.query("delete from employee where empId=?",[req.params.id],(err,result)=>{
   if(err)
   {
    resp.send("<h1>no data deleted</h1>")
   }else{
    resp.send(result)
   }
  })
})
router.get("/employees/employee/:id",function(req,resp){
  connection.query("select * from employee where empId=?",[req.params.id],(err,result)=>{
   if(err)
   {
    resp.send("<h1>no data found</h1>")
   }else{
    resp.send(result)
   }
  })
})
router.put("/employees/employee/:id",function(req,resp){
  connection.query("update employee set name=?,salary=?,deptName=? where empId=?",[req.body.name,req.body.salary,req.body.deptName,req.body.empId],(err,result)=>{
   if(err)
   {
    resp.send("<h1>no data updated</h1>")
   }else{

    resp.send(result);
   }
  })
})
module.exports=router