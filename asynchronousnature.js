const fs = require("fs");

fs.readFile("test.txt", "utf8", function(err,data){
    console.log(data);
})

console.log("This is a message");

// Promises are just a syntactical sugar for callbacks

// Promises are objects that represent the eventual completion or failure of an asynchronous operation