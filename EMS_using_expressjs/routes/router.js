const express=require("express");
var router=express.Router();
var connection=require("../db/dbconnect")
router.get("/employees",function(req,resp){
  connection.query("select * from employee",(err,data,fields)=>{
    if(err)
    {
      console.log(err);
      resp.status(500).send("<h1>Data not found</h1>")
    }
    else{
      console.log(data);
      resp.status(200).render("index",{empdata:data})
    }
  })
})
router.get("/employees/employee",function(req,resp){
  resp.render("add-emp");
})
router.post("/employees/employee",function(req,resp){
  connection.query("insert into employee values(?,?,?,?)",[req.body.empId,req.body.name,req.body.salary,req.body.dname],(err,result)=>{
   if(err)
   {
    console.log(err);
    resp.status(500).send("<h1>no data found</h1>")
   }else{
    console.log(result);
    resp.redirect("/employees")
   }
  })
})
router.get("/employees/employee/:id",function(req,resp){
  connection.query("delete from employee where empId=?",[req.params.id],(err,result)=>{
   if(err)
   {
    console.log(err);
    resp.status(500).send("<h1>no data deleted</h1>")
   }else{
    console.log(result);
    resp.redirect("/employees")
   }
  })
})
router.get("/employees/edit/:id",function(req,resp){
  connection.query("select * from employee where empId=?",[req.params.id],(err,result)=>{
   if(err)
   {
    console.log(err);
    resp.status(500).send("<h1>no data found</h1>")
   }else{
    console.log(result);
    resp.render("edit-emp", { employee: result[0]});
   }
  })
})
router.post("/employees/update",function(req,resp){
  connection.query("update employee set name=?,salary=?,deptName=? where empId=?",[req.body.name,req.body.salary,req.body.dname,req.body.empId],(err,result)=>{
   if(err)
   {
    console.log(err);
    resp.status(500).send("<h1>no data updated</h1>")
   }else{
    console.log(result);
    resp.redirect("/employees")
   }
  })
})
module.exports=router