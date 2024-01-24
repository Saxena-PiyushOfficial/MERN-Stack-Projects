let promise=new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve('promise resolved')
  },4000);
})
async function asyncfunction()
{
  let result =await promise;//if await is not used then hello will print regardless promise still pending
  console.log(result);
  console.log("hello")
}

asyncfunction();