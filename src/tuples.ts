// normal javascript array
// order of the types can be changed
let array = ['ryu', 25, true];
array[0] = false;
array[1] = 'yoshi';
array = [30, false, 'yoshi', 'hello'];

// tuple -> specifying before hand, no. elements an array will contain and of which type
let tup: [string, number, boolean] = ['ryu', 25, true];

tup[0] = 'ken';
// tup[0] = false; // type specified for a index cannot be changed

tup = ['hello', 30, false] // valid
// tup = ['hello', 30, false, 'new'] // not valid

let student: [string, number];

//student = [23564, 'chun-li'];
student = ['chun-li', 23564];