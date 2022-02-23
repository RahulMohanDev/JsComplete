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

function creatAdder(incrementor) {
  // const random = 123;
  return (number) => number + incrementor;
}

const add5New = (number) => number + 5;

const add5 = creatAdder(5);

console.dir(creatAdder(5))
// console.dir(add5New);
console.dir(add5);

console.log(add5(20));
console.log(add5New(20));
const add20 = creatAdder(20);
console.log(add20(20));
