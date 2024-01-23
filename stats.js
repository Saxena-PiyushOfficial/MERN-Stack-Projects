var fs=require('fs')
console.log("going to get file open")
fs.stat('testfile.txt',function(err,stats){
  if (err) {
    console.log(err.code +"("+err.message+")");
    return console.error(err);
  }
  console.log(stats)
console.log("got file info successfully")
console.log(stats.isFile())
console.log(stats.isDirectory())
console.log(stats.size)
})
