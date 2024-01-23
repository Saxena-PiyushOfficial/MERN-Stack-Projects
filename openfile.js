var fs = require('fs');

console.log("going to open the file");


fs.open('testfile.txt', 'r+', function (err, fd) {
  if (err) {
    console.log(err);
  }

  console.log("open file successful");


  fs.writeFile(fd, 'Radhe Krishna', function (err) {
    if (err) {
      console.error(err);
    }


    fs.readFile(fd, 'utf8', function (err, data) {
      if (err) {
        console.error(err);
      } else {
        console.log("Read file content:", data);


        fs.close(fd, function (err) {
          if (err) {
            console.error(err);
          }
          console.log("File closed successfully");
        });
      }
    });
  });
});
