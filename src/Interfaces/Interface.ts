// for defining how object should look like

interface IsPerson {
  name: string;
  age?: number; // this is optional
  speak(a: string): void;
  spend(a: number): number;
}

// whoever implements the interface need to give the body or value to all methods and properties defined in interface

const me: IsPerson = {
  name: "shaun",
  //age: 30,
  
  speak(text: string): void {
    console.log(text);
  },

  spend(amount: number): number {
    console.log("I spent ", amount);
    return amount;
  },
};

console.log(me);
me.speak("hello, world");

const greetPerson = (person: IsPerson): void => {
  console.log("hello ", person.name);
};

greetPerson(me);
