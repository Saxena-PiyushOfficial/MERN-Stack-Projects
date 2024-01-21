let express=require('express')
var http=require('http')
var path=require('path')
var app=express()
app.get("/",function(req,resp,next){
  resp.send(204,"Hello world.<strong>This is Piyush</strong>")
})
app.get("/array",function(req,resp,next){
  resp.send(['piysuh','kota','CDAC'])
})
app.get("/json",function(req,resp,next){
  resp.send({'name':'piysuh','city':'kota','course':'CDAC'})
})
app.get("/file",function(req,resp,next){
  resp.sendFile(path.join(__dirname+'/test15.html'))
})
app.get("/foo",function(req,resp,next){
  resp.send("<h1>Hello <i>Foo</i></h1>")
})
app.get("/buff",function(req,resp,next){
  var buff=Buffer.from("Hello buffer")
  resp.send(buff.toString())
})
app.get("*",function(req,resp,next){
  resp.status(404).send("<h1>you get Invalid url</h1>")
})
app.get("/random",function(req,resp,next){
  resp.status(404).send("<h1>you get Invalid url</h1>")
})
app.get("/bar",function(req,resp,next){
  resp.send("<h2>Hello <em>Bar</em></h2>")
})

http.createServer(app).listen(8000)