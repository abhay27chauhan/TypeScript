// 1. defining type of parameter
function callMe(param: number){
    return param + 4;
}

let ans = callMe(4); // ans -> type -> number -> infered by typescript
console.log(ans);

// 2. defining return type
function fun(param: string): string{
    return param
}

console.log(fun("i am Abhay"))

// 3. if return type not given it will be by default void

function newFun(param: string){
    console.log(param);
}

newFun("i am Abhay");

// 4. giving variable a type of functions -> it can store only functions

let funct: Function;

// 5. defining function signatures

// example 1

let greet: (a: string, b: string) => void;

greet = (name: string, greetings: string) => {
    console.log(`${name} says ${greetings}`)
}

// example 2

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
}

// example 3

let logDetails: (obj: {name: string, age: number}) => void;

logDetails = (ninja: {name: string, age: number}) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
}


// 6. aliasing -> for decreasing complexity and repeatition

type StringOrNum = string | number;
type objWithName = {name: string, uid: StringOrNum}

const logDetails1 = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`)
}

const greet1 = (user: objWithName) => {
    console.log(`${user.name} says hello`)
}