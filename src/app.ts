import { Invoice } from "./classes/Invoice.js"; // module pattern
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./Interfaces/HasFormatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLInputElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector(".item-list") as HTMLUListElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let data: [string, string, number] // tuple
  data = [tofrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(...data);
  } else {
    doc = new Payment(...data);
  }

  let list = new ListTemplate(ul)
  list.render(doc, type.value, "start");
  
});

// const anchor = document.querySelector('a');
// if(anchor) {
//   console.log(anchor.href);
// }

// or

// const anchor = document.querySelector('a')!;
// console.log(anchor.href);

//const form = document.querySelector('form')!;
