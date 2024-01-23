var url=require('url')
var adr='http://httpserver.com/processLogin.html?username=piyush&password=secret'
var q=url.parse(adr,true)
console.log(q.host)
console.log(q.pathname)
console.log(q.search)
console.log(q.href)
console.log(q.protocol)

var qdata=q.query
console.log(qdata)
console.log(qdata.username,qdata.password)