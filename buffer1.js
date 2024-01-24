var fs=require('fs')
fs.writeFileSync('testfile.txt','Hello fs!!!')
fs.open('testfile.txt', 'r', function(err, data) {
  if (err) {
    return console.error(err);
  }
})
fs.readFile('testfile.txt',function(err,data){
  if(err)
  {
    return console.error(err)
  }
  console.log("Asynchronous read:"+data.toString())
});
var data=fs.readFileSync('testfile.txt')
console.log("Synchronous read: "+data.toString());
fs.appendFile('testfile.txt',"\nHi this is nodejs module",function(err,data){
  if(err) throw err;
})
fs.exists('testfile.txt',function(err,data){
  console.log(err)
})
//fs.unlink('testfile.txt',function(err,data){
  //if(err)
  //return console.error(err)
//})
fs.exists('testfile.txt',function(err,data){
  console.log("error occured")
})
fs.rename('testfile.txt','MyNewFile.txt',err=>{
  console.log('rename done');
})

console.log("program ended")
