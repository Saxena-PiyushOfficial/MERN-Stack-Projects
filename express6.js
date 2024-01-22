/*var express = require('express');
var app = express();

app.get("/example", f1, f2, f3, f4,function(){
  console.log("This is the end of our route.");
});

function f1(req, res, next) {
    console.log("f1");
    next();
}

function f2(req, res, next) {
    console.log("f2");
    next();
}

function f3(req, res, next) {
    console.log("f3");
    next();
}

function f4(req, res, next) {
    console.log("f4");
    next();  // Don't forget to call next() to pass control to the next middleware or route handler
}

app.listen(8080, function () {
    console.log('Server is listening on port 8080');
});
*/
var express = require('express');
var app = express();

app.get("/example", f1, f2, f3, f4, function(req, res) {
    // Combine the output of all middleware functions
    var output = "Output: " + req.output.join(', ');

    // Send the combined output as a response
    res.send(output);
});

function f1(req, res, next) {
    console.log("f1");
    req.output = req.output || [];
    req.output.push("f1");
    next();
}

function f2(req, res, next) {
    console.log("f2");
    req.output = req.output || [];
    req.output.push("f2");
    next();
}

function f3(req, res, next) {
    console.log("f3");
    req.output = req.output || [];
    req.output.push("f3");
    next();
}

function f4(req, res, next) {
    console.log("f4");
    req.output = req.output || [];
    req.output.push("f4");
    next();
}

app.listen(8080, function () {
    console.log('Server is listening on port 8080');
});
