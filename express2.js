let express=require('express')
let app=express()
app.get("/user/:id",function(req,resp){
  resp.send("user "+req.params.id)
})
app.get("/product/:name",function(req,resp){
  resp.send("user product name "+req.params.name)
})
app.get("/product/:userid/quantity/:qty",function(req,resp){
  //resp.send(req.params.userid+":"+req.params.qty)
  resp.send(req.params)
})
app.listen(8080)