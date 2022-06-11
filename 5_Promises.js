var fs = require("fs/promises")

console.log("Loading")

let p = fs.readFile("file1.txt","utf-8")

console.log(p)

p.then((data)=>{
    console.log(data)
})

console.log("Loaded")