var obj = {
    p_name : "Asim" ,
    p_age : "22" ,
    p_class:"15"
}

let p_name = obj.p_name
let p_age = obj.p_age
let p_class = obj.p_class

console.log(p_name,p_age,p_class)
console.log("Name is : ",p_name," , Age is : ",p_age," , Class is : ",p_class)

// now doing the same thing with destructuring

{
    let {p_name,p_age,p_class} = obj

    console.log(p_name,p_age,p_class)
}
