const fs = require("fs")

function kushalReadFile(){
    return new Promise(function(resolve)
{
    fs.readFile("test.txt","utf-8", function(err,data){
        resolve(data);
    })
})
}

function OnSuccess(data){
    console.log(data);
}

var a = kushalReadFile();
a.then(OnSuccess);