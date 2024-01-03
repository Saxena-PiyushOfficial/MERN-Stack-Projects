const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const path=require("path");
var routes=require("./routes/router")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));
app.use("/",routes);
app.listen(9090,function(){
  console.log("server started at port 9090");
})
module.exports=app;