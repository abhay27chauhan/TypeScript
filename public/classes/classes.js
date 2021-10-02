"use strict";
class myInvoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
const myinvOne = new myInvoice("mario", "work on the mario website", 250);
const myinvTwo = new myInvoice("luigi", "work on the luigi website", 300);
let myinvoices = []; // array of invoices
myinvoices.push(myinvOne);
myinvoices.push(myinvTwo);
// invoices.push({ name: 'shaun' }); -> not allowed
console.log(myinvoices);
// access modifiers
// readonly -> can only get -> inside class or outside class
// private -> get be get and set only inside class
// public -> can be get and set anywhere
// class Invoice1 {
//   readonly client: string;
//   private details: string;
//   public amount: number;
//   constructor(c: string, d: string, a: number) {
//     this.client = c;
//     this.details = d;
//     this.amount = a;
//   }
//   format() {
//     return `${this.client} owes £${this.amount} for ${this.details}`;
//   }
// }
