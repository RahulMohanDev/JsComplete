// let fullName = "Rahul Mohan";
// let secondName = "Rohan Singh poona";
// function test() {
//   console.log(`yo yo yo ${arguments[0]} ${arguments[1]}`);
// }
// function sayName() {
//   let abc = "my name is khan";
//   test(123, abc);
//   console.log(`my name is ${arguments[0]}, ${arguments[1]}`);
// }
// sayName(fullName, "this is a test");
// sayName(secondName, "this is test");

// scope chain
// const fullName = "Rahul Mohan";

// function f2() {
//   console.log(`${fullName} says hi, and his/her age is ${age}`);
// }

// function f1() {
//   const age = 23;
//   f2();
// }

// f1();

// for (let noOfCars = 0; noOfCars < 5; noOfCars++) {
//   console.log(`read one car from db with id ${noOfCars}`);
// }

// const carList = ["car1", "car2"];
// carList[0] = "car3434";

// let noOfCars = 40;

// if (true) {
//   let noOfCars = 20;
// }

// if (noOfCars >= 5) {
//   console.log("lost his job because of bug");
// }

// hoisting

// sayName();

// function sayName() {
//   // 50,000 line
//   let firstName = "Rahul Mohan";
//   console.log(`my name is ${firstName}`);
// }

// loop normal Declarative
// for (let a = 0; a < 10; a++) {}

// use DOM always or use prompt
// let value = prompt("enter first number");
// console.log(value);

// let array = [1, 2, 34];

// let total = 0;

// for (let element of array) {
//   console.log(element);
//   total += element;
// }

// console.log(total);

// for of loop

// const customer = { name: "rahul Mohan", age: 25 };

// for (const property in customer) {
//   console.log(`${customer[property]}`);
// }

// for of loop with for in
// const customerList = [
//   { name: "Rahul Mohan", age: 25 },
//   { name: "Rohan Singh Poona", age: 23 },
// ];

// for (let customer of customerList) {
//   for (let property in customer) {
//     console.log(`${property}`);
//     console.log(`${customer[property]}`);
//   }
// }

// functional programing
const listOfToys = ["top 1", "toy 2"];
const htmlToys = listOfToys.map((toy) => {
  return `<li>${toy}</li>`;
});
console.log(htmlToys);
