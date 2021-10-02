// without enums, we need to store what these numbers (1,2,3..) signifies for resource type

// interface myResource<T> {
//     uid: number;
//     resourceType: number;
//     data: T;
//   }
  
//   const docOne: myResource<object> = {
//     uid: 1,
//     resourceType: 1,
//     data: { title: 'name of the wind' }
//   }
//   const docTwo: myResource<object> = {
//     uid: 10,
//     resourceType: 2,
//     data: { title: 'name of the wind' }
//   }

// with enum -> just specify the list in into enums

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR };

interface myResource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docOne: myResource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK, // this will get converted into number(index on which they occured)
  data: { title: 'name of the wind' }
}
const docTwo: myResource<object> = {
  uid: 10,
  resourceType: ResourceType.DIRECTOR,  // this will get converted into number(index on which they occured)
  data: { title: 'name of the wind' }
}

console.log(docOne);
console.log(docTwo);