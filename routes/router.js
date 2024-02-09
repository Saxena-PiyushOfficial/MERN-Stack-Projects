const express=require("express")
var router=express.Router();
var conn=require("../db/dbconnect");
router.get("/products",function(req,resp)
{
         conn.query("select * from product",(err,data,fields)=>{
              if(err)
              {
                console.log(err);
                resp.status(500).send("<h1>Data not found</h1>")
              }else{
                console.log(data);
                resp.render("index",{proddata:data})
              }
         })
})
module.exports=router;