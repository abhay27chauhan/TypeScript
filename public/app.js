import { Invoice } from "./classes/Invoice.js"; // module pattern
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector(".item-list");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    let list = new ListTemplate(ul);
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
