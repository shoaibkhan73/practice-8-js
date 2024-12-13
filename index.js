console.log("Practice no 8");


// mamort in javascript

// 1 stack 

let a = "Shoaib";
console.log(a);


let b = a;
console.log( b);

b = "jawad";

console.log( a);
console.log( b);


// heap

let myobj1 ={
    name : "shoaib",
    brother_name : "jawad",
}

let myobj2 =myobj1

console.log(myobj1.name);
console.log(myobj2.name);

myobj2.name = "khan";

console.log(myobj1.name);
console.log(myobj2.name);
