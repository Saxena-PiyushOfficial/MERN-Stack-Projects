const express=require("express");
var router=express.Router();
var connection=require("../db/dbconnect")
router.get("/books",function(req,resp){
  connection.query("select * from book",(err,data,fields)=>{
  if(err){
   console.log(err);
   resp.status(500).send("<h3>no data found</h3>")
  }else{
   resp.send(data);
  }
  })
});
router.post("/books/book",function(req,resp){
  connection.query("insert into book values(?,?,?,?)",[req.body.bookId,req.body.name,req.body.author,req.body.price],(err,data,fields)=>{
  if(err){
   console.log(err);
   resp.status(500).send("<h3>no data inserted</h3>")
  }else{
   console.log(data);
  
   resp.send(data);
  }
  })
});
router.delete("/books/book/:id",function(req,resp){
  connection.query("delete from book where bookId=?",[req.params.id],(err,data,fields)=>{
  if(err){
   console.log(err);
   resp.status(500).send("<h3>data not deleted</h3>")
  }else{
   console.log(data);
  
resp.send("<h1>data deleted successfully</h1>")
  }
  })
});
router.get("/books/book/:id",function(req,resp){
  connection.query("select * from book where name=?",[req.params.id],(err,data,fields)=>{
  if(err){
   console.log(err);
   resp.status(500).send("<h3>no data found</h3>")
  }else{
   console.log(data);
  
   resp.send("<h1>data selected successfully</h1>");
  }
  })
});
router.put("/books/book/:id",function(req,resp){
  connection.query("update book set name=?,author=?,price=? where bookId=?",[req.params.name,req.params.author,req.params.price,req.params.bookId],(err,data,fields)=>{
  if(err){
   console.log(err);
   resp.status(500).send("<h3>data does'nt updated</h3>")
  }else{
   console.log(data);
  
   resp.status(200).send("<h1>data updated successfully</h1>");
  }
  })
});
module.exports=router;