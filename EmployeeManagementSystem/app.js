const express=require('express')
const app=express()
const path=require('path')
const bodyParser=require('body-parser')
var routes=require("./routes/router")

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use("/",routes)
app.listen(9090,function(){
  console.log("server is listening at post 9090");
})

module.exports=app;

















































// __dirname:

// __dirname is a special variable in Node.js that represents the absolute path of the directory containing the currently executing script. It provides the full path to the directory in which the current JavaScript file resides.
// path.join:

// The path.join method is part of the Node.js path module, and it is used to join path segments together. It creates a path string by concatenating the provided segments using the platform-specific separator (e.g., "/" on Unix-like systems or "" on Windows).



// The configuration object passed to bodyParser.urlencoded({ extended: false }) has a single property: extended. When set to false, the parser uses the classic encoding, where spaces are represented as + and the %20 encoding for spaces is not supported. When set to true, it uses the modern extended encoding, allowing for richer data structures (nested objects, arrays).

// extended: false is often used in simple scenarios where the data being sent is a flat key-value pair, and there's no need for complex objects or arrays.