// making reuseable block of code, by generalising types

// const addUID = (obj: object) => {
//     let uid = Math.floor(Math.random() * 100);
//     return { ...obj, uid };
// };

// let docOne = addUID({ name: "yoshi", age: 40 });
// console.log(docOne) // this will only have uid property on it, not name and age what the object initially has

// using generics

// example 1

// const addUID = <T>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return { ...obj, uid };
// };

// let docOne = addUID({ name: "yoshi", age: 40 });

// but the problem above, is that user can pass variable of any type

// example 2

// const addUID = <T extends object>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return { ...obj, uid };
// };

// now user can only pass the objects

// example 3 -> making it even more specified

// const addUID = <T extends { name: string }>(obj: T) => { // object atleast contains a name key
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };

// let docOne = addUID({ name: "yoshi", age: 40 });

// example 4

// with interfaces
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docThree: Resource<object> = {
  uid: 1,
  resourceName: "person",
  data: { name: "shaun" },
};

const docFour: Resource<string[]> = {
  uid: 1,
  resourceName: "shoppingList",
  data: ["bread", "milk"],
};

console.log(docThree, docFour);
