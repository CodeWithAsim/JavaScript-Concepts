// Other languages has the blocking nature and JS has the Asynchronous nature 

var fs = require("fs")

console.log("Asim wait")

fs.readFile("file1.txt",(err,data)=>{
    console.log("Error : ",err,"and Data : ",data)
})

console.log("Loaded")

fs.readFile("file1.txt","utf-8",(err,data)=>{
    console.log("Error : ",err,"and Data : ",data)
})

console.log("Shown")

// Here is the problem of callbacks hell which makes the code readability poor ... means if there is a call back inside the callback based on the use cases

// For that go with the promises