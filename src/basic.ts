// string

let person = 'Abhay'; // infered as string
let character: string; // defining explicitly
character = 'chauhan';

// character = 3; type number is not assignable to type string

// number

let a = 2;
let b: number = 4;

// any -> can take any value

let icanTakeAnyValue: any;

// array 

// 1
let arr = ["Abhay", "MAIT"]; // array which will contains only string
let mixed = ["Abhay", "MAIT", 2] // array which can contain both string and numbers

// 2
let arr1: string[];
let arr2: (boolean | number)[];

// 3
let arr4: any[] = [];
arr4.push(4);
arr4.push("Abhay");

// objects

// 1
let obj: Object;
obj = {a: 1, b: "abhay"}
obj = [];

// 2
let obj1: {
    a: number,
    b: string
}

obj1 = {
    a: 1,
    b: "amit",
}

// 3
let obj2 = {
    a: 3,
    b: "Divya"
}
obj2 ={
    a: 4,
    b: "durgesh",
}

// 4
let obj3: {
    a: (number | boolean),
    b: (string | number)
}
obj3 = {
    a: true,
    b: 4
}

// 5
let obj4: {
    a: any,
    b: any
}
obj4 = {
    a: ["Abhay", "Amit", 3, true, undefined],
    b: {c: 4, d: "divya"}
}
