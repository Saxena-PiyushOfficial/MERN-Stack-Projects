var express=require('express')
var app = express();
app.get("/get-form.html",function(req,resp){
  resp.sendFile('./test.html',{root:__dirname})
});

app.get("/submit-getdata",function(req,resp){
resp.send("FirstName: "+req.query.fname+" LastName: "+req.query.lname)
});
app.listen(8080)