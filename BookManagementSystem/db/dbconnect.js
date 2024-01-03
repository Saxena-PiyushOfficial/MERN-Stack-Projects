const mysql=require('mysql')
var conn=mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:'root',
  database:'books'
})

conn.connect((err)=>{
  if(err){
    console.log("err happened"+err);
  }
  else{
    console.log("connection done");
  }
})
module.exports=conn;