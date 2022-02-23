// // constructor function
// const Person = function (potato, tomato) {
//   this.firstName = potato;
//   this.lastName = tomato;
//   this.fullName = `${potato} ${tomato}`;
// };

// Person.prototype.sayName = function () {
//   console.log(`my name is ${this.fullName}`);
// };

// Person.prototype.species = "Human";

// const person1 = new Person("rahul", "mohan");
// // console.log(person1.__proto__ === Person.prototype);
// // console.log(person1);
// person1.sayName();
// console.dir(person1);

// console.dir(person1);

// const array = [1, 3, 4];

// console.dir(array);

// ES6 class syntax

// class Person {
//   constructor(potato, tomato) {
//     this.firstName = potato;
//     this.lastName = tomato;
//     this.fullName = `${potato} ${tomato}`;
//   }

//   sayName() {
//     console.log(`my name is ${this.fullName}`);
//   }
// }

// class Employee extends Person {
//   constructor(potato, tomato, employeeID) {
//     super(potato, tomato);
//     // very very extra
//     // this.__proto__.__proto__.constructor(potato, tomato)
//     this.employeeID = employeeID;
//   }

//   sayName() {
//     console.log(
//       `my name is ${this.fullName} and my employeeID is ${this.employeeID}`
//     );
//   }
// }

// class Manger extends Employee {
//   constructor(potato, tomato, employeeID, managerID){
//     super(potato,tomato,employeeID);
//     this.managerID = managerID;
//   }
// }

// const person1 = new Person("Rahul", "Mohan");
// const Employee1 = new Employee("Rahul", "Mohan", 1243);

// console.dir(person1);
// console.dir(Employee1);

// window.bala = "I am bla bla";

// function creatAdder(incrementor) {
//   return (number) => number;
// }

// // const add5New = (number) => number + 5;

// const add5 = creatAdder(5);
// const add20 = creatAdder(20);
// // console.dir(add5New);
// console.dir(add5);
// console.dir(add20);

// console.log(add5(20));
// console.log(add20(10));

// timeout id;
// setTimeout(() => {
//   // what ever I want
// }, timeout);\

// const timeoutID = setTimeout(() => {
//   console.log("BOOM");
// }, 5000);

// const timeoutID2 = setInterval(() => {
//   console.log("blink");
// }, 1000);

// setTimeout(() => {
//   clearTimeout(timeoutID2);
// }, 10000);

// console.log("this will happen immediately");

// clearTimeout(timeoutID);

function debounce(func, timeout = 300) {
  let timeoutID;
  return () => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      func();
    }, timeout);
  };
}
// function saveInput(){
//   console.log('Saving data');
// }
const processChange = debounce(() => {
  console.log("Save Draft");
},5000);

console.dir(processChange);

processChange();
