var express=require('express')
var app = express();
var bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.get("/get-form.html",function(req,resp){
  resp.sendFile('./test.html',{root:__dirname})
});
app.post("/submit-getdata",function(req,resp){
  var name=req.body.fname+' '+req.body.lname
  resp.send("Hello "+name+". Welcome to the Express.Js")
  });
  app.listen(8080)
