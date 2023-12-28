const mysql=require('mysql')//const mysql is a constant reference pointing to the module object,
var myconnection=mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:'root',
  port:3306,
  database:'ems'
})
myconnection.connect((err)=>{
  if(err)
  {
    console.log("err occured",err);
  }else{
    console.log("connection established....");
  }
})
module.exports=myconnection;