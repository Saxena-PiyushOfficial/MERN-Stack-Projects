/*var buff=Buffer.alloc(50)
console.log(buff)*/
var fs=require('fs')
fs.writeFileSync('testfile.txt','Hello fs!!!')
console.log(fs.readFileSync('testfile.txt'))
console.log(fs.readFileSync('testfile.txt').toString())
console.log(fs.readFileSync('testfile.txt','utf8'))