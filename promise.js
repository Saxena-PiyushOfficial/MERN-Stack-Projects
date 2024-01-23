let promise = new Promise(function(resolve, reject) {
  
    return reject("Stuff fail");

});

promise.then(function(result) {
  console.log("Stuff worked:", result);
}).catch(function(err) {
  console.log("Stuff doesn't work:", err);
});
