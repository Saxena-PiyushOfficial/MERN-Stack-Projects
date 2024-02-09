const mysql=require("mysql")
var conn=mysql.createConnection({
          host:'127.0.0.1',
          user:'DELL',
          password:'root',
          port:3306,
          database:'pgdac'
})
conn.connect((err)=>{
  if(err)
  {
    console.log("err ocurred"+err);
  }else{
    console.log("connection done");
  }
})