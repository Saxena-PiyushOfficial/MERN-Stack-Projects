var express=require('express')
var app = express();
var path=require('path')
app.set("views",path.resolve(__dirname,"views"))
app.set("view engine","ejs")
app.get("/",function(req,resp){
    resp.render("index",
    {
      message:"Hey This is Express.Js"
    })
})
app.listen(8080)