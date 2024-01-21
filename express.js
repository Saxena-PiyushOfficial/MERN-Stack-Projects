let express=require('express')
let app=express()
app.get("/",function(req,resp){
  resp.send("<h1 style='background-color:cyan'>Hello world</h1>")
})

app.listen(3000,function(){
  console.log("Server is running at http://localhost:3000/");
})