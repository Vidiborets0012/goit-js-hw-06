'use strict';

// class StringBuilder {

//     #value;

//     constructor(initialValue) {
//         this.#value = initialValue;
//     }
//     getValue() {
//         return this.#value;
//      } // getValue() — повертає поточне значення приватної властивості value.
    
//     padEnd(str) {
//         this.#value = `${this.#value}${str}`;
//     } // padEnd(str) — отримує параметр str(рядок) і додає його
//     // в кінець значення приватної властивості value об'єкта, який викликає цей метод.
    
//     padStart(str) {
//         this.#value = `${str}${this.#value}`;
//     } // padStart(str) — отримує параметр str(рядок) і додає його
//     // на початок значення приватної властивості value об'єкта, який викликає цей метод.

//     padBoth(str) {
//         this.#value = `${str}${this.#value}${str}`; 
//     } // padBoth(str) — отримує параметр str(рядок) і додає його
//     // на початок і в кінець значення приватної властивості value об'єкта, який викликає цей метод.
    
// }

// // Залиш цей код для перевірки ментором.

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


class StringBuilder {

    #value;

    constructor(initialValue) {
        this.#value = initialValue;

    }
    getValue() {
        return this.#value;
     } 
    
    padEnd(str) {
        this.#value = this.#value + str;
    } 
    
    padStart(str) {
        this.#value = str + this.#value;
    } 

    padBoth(str) {
        this.#value = str + this.#value + str; 
    } 
    
}

// Залиш цей код для перевірки ментором.

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="