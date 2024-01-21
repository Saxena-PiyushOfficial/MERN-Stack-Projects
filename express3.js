let express=require('express')
let app=express()
app.get("/add",function(req,resp){
  n1=parseInt(req.query.no1)
  n2=parseInt(req.query.no2)
  resp.send("subtraction is: "+(n1-n2)+" Addition is: "+(n1+n2))
})
app.listen(8000,function(){
  console.log("Server started")
})