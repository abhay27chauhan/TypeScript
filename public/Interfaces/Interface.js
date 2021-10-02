"use strict";
// for defining how object should look like
// whoever implements the interface need to give the body or value to all methods and properties defined in interface
const me = {
    name: "shaun",
    //age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent ", amount);
        return amount;
    },
};
console.log(me);
me.speak("hello, world");
const greetPerson = (person) => {
    console.log("hello ", person.name);
};
greetPerson(me);
