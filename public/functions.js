"use strict";
// 1. defining type of parameter
function callMe(param) {
    return param + 4;
}
let ans = callMe(4); // ans -> type -> number -> infered by typescript
console.log(ans);
// 2. defining return type
function fun(param) {
    return param;
}
console.log(fun("i am Abhay"));
// 3. if return type not given it will be by default void
function newFun(param) {
    console.log(param);
}
newFun("i am Abhay");
// 4. giving variable a type of functions -> it can store only functions
let funct;
// 5. defining function signatures
// example 1
let greet;
greet = (name, greetings) => {
    console.log(`${name} says ${greetings}`);
};
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
const logDetails1 = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greet1 = (user) => {
    console.log(`${user.name} says hello`);
};
