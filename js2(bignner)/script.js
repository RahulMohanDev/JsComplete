// function deceleration
// function dance() {
//   console.log("this is dancing");
//   return 10;
// }

// const NO_OF_TIME = dance();

// function are objects
// function as expression
// const drive = function () {
//   console.log("i can drive");
// };
// short from of this is arrow function

// drive();

// function parameters and arguments

// function add(firstNumber, secondNumber) {
//   return firstNumber + secondNumber;
// }

// console.log(add(1, 3));

// // arrow function
// const add2 = (a, b) => a + b;

// single parameter
// no need for ()
// and if you are returning just a expression no need for return
// const driving = name => `${name} is driving`;
// console.log(driving("rahul"));
// // 1 million line code

// // no parameter
// const printNonsense = () => "something";

// // multi parameter
// const add = (a, b) => a + b;

// // more logic arrow function
// const hasLicense = (dateOfBirth, isPass) => {
//   if(dateOfBirth>18 && isPass){
//      return true;
//   }
//   return false;
// };

// // data structure
// // Array
// // array laterals
// const employees = ["Rahul Mohan", "Rohan Singh Poona"];
// // using constructor
// // const employee = Array("Rahul Mohan", "rohan Singh Poona");
// // employees[0] = "some random person";
// console.log(employees);
// // employees = ["new astroid"];
// console.log(employees.length);
// //last element
// console.log(employees[employees.length - 1]);
// // nested array
// // const test = [[1, 2, 4], ["rahul", "mohan"], 23];

// employees.push("Maji");
// // console.log(employees.pop());
// employees.unshift("GOD");
// // console.log(employees.shift());
// console.log(employees.indexOf("GOD"));

// const partyGoers = ["19", "21", "54"];
// if (partyGoers.includes("12")) {
//   console.log("send to pizza hut");
// } else {
//   console.log("party timeeeeee");
// }

// //object
// // object laterals
// // const object = {

// // };

// // const data = ["tesla", "rahul mohan", "2040"];
// // /// 10,000 lines
// // `the car ${data[0]} was purchase by ${data[1]} on ${data[2]}`;

// const fullName = "Rahul Mohan";
// const car = {
//   owner: fullName,
//   model: "Tesla",
//   yearOfPurchase: 2050,
// };

// `the car ${data.model} was purchase by ${data.owner} on ${data.yearOfPurchase}`;

const ACCOUNT_USER_KEY = "levelOfKnowledge";

// const customer = {
//   accountUser: "Rahul Mohan",
//   levelOfKnowledge: 0,
//   spellings: "horrible",
//   // ACCOUNT_USER_KEY: "nonsense",
// };
// // 10,000 line
// // dot notation
// // console.log(customer.spellings);

// console.log(customer.ACCOUNT_USER_KEY);
// console.log(customer[ACCOUNT_USER_KEY]); // customer.accountUser
// console.log(customer[levelOfKnowledge])

// methods
const customer = {
  name: "Rahul Mohan",
  age: 18,
  // this is a method
  canDrink: function () {
    console.log(this.age, "this is the value of this.age");
    this.age = 25;
    if (this.age > 24) {
      return true;
    } else {
      return false;
    }
  },
};

// window.age = 26;

function pub(customer) {
  console.log(this.age, "calling from pub");
  if (customer.canDrink()) {
    console.log("Partyyyy");
    return;
  }
  console.log("got home kid!!!");
}

pub(customer);
