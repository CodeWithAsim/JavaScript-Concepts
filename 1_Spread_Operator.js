// Spread operator use with array
arr = [1,2,3]

function sum(a,b,c)
{
    return a+b+c
} 

res = sum(...arr)
console.log(res)

a=[1,2,3,4,5]
b=[...a]

console.log(b)

c = [...a,...b]
console.log(c)

var d = [1,2,3,4,5]
function average(a,b,c)
{
    return (a+b+c)/3
}
let answer = average(...d)
console.log(answer)

// Spread operator use with object

var obj1 = {
    p_name : "Asim" ,
    p_age : "22" ,
    p_class:"15"
}

console.log(obj1)

var obj2 = obj1
console.log(obj2)

var obj3 ={}
obj3.p_name = "Afzal"
obj3.p_age = "40"
obj3.p_class  = "16"

console.log(obj3)

// now doing the same thing with spread operator

var obj4 = {...obj3,p_class:"completed"}
console.log(obj4)