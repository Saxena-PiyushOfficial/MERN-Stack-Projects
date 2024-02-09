const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const path=require("path");
var routes=require("./routes/router");
app.listen(9090,function()
{
  console.log("listening at port 9090");
})