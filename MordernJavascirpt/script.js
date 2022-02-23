// [1, 3, 4, 5].map((number) => {
//   console.log(number);
// });

// const cart = [
//   { name: "book DAS", cost: 2000 },
//   { name: "book js", cost: 2000 },
// ];

// let totalBill = 0;

// // cart.map((a)=>a.cost)

// // don't do this user reduce
// const returnedArray = cart.map((item) => {
//   totalBill += item.cost;
// //   return totalBill;
// });

// console.log(totalBill);
// console.log(returnedArray);

// const peopleAllowed = [23, 45, 66, 45, 34, 12].filter((age) => age > 18);
// console.log(peopleAllowed);
// const peopleVaccinated = peopleAllowed.map((age) => {
//   return { age: age, isVaccinated: true };
// });
// console.log(peopleVaccinated);

// // short form
// const peopleVaccinated = [23, 45, 66, 45, 34, 12]
//   .filter((age) => age > 18)
//   .map((age) => {
//     return { age: age, isVaccinated: true };
//   });

// console.log(peopleVaccinated);

// const peoplePassed = [
//   { name: "Rahul Mohan", grade: "A" },
//   { name: "ABc", grade: "A+" },
//   { name: "Rohan Singh Poona", grade: "B" },
//   { name: "test1", grade: "F" },
// ]
//   .filter((student) => student.grade !== "F")
//   .map((student) => {
//     return student.name;
//   });
// // console.log(peoplePassed);

// reduce

// const cart = [
//   { name: "book DAS", cost: 2000 },
//   { name: "book js", cost: 2000 },
// ];

// const totalCost = cart.reduce((potato, rat) => {
//   return potato + rat.cost;
// }, -2000);

// console.log(totalCost);

// all three

// const noOfPeoplePassed = [
//   { name: "Rahul Mohan", grade: "A" },
//   { name: "ABc", grade: "A+" },
//   { name: "Rohan Singh Poona", grade: "B" },
//   { name: "test1", grade: "F" },
// ]
//   .filter((student) => student.grade !== "F")
//   .map((student) => {
//     return student.name;
//   })
//   .reduce((prev) => prev + 1, 0);

// console.log(noOfPeoplePassed);
// // console.log(peoplePassed);

// array destructuring
// long form
// const ageArray = [24, 56, 77];
// const son = ageArray[0];
// const father = ageArray[1];
// const grandFather = ageArray[2];

// actual destructuring
// const [, , grandFather] = [24, 56, 77];
// console.log(grandFather);

// const [son, [, mother], [grandFather]] = [23, [55, 47], [77, 65]];
// console.log(son, mother, grandFather);

// const [son, parents, grandParents] = [23, [55, 47], [77, 65]];
// console.log(parents);

// function swap(a, b) {
//   // destructuring = array creation
//   [b, a] = [a, b];
//   return { potato: a, tomato: b };
// }

// console.log(
//   swap(
//     { name: "test", owner: "rahul" },
//     { name: "test", owner: "Rohan Singh Ponna" }
//   )
// );

// const [son, mother, father = 70] = [25, 55];
// console.log(son, mother, father);

// const amazonUser = {
//   name: "Rahul Mohan",
//   password: "test@123",
//   email: "mohanrahul93@gmail.com",
//   shoppingCart: [
//     { productId: 2134, productName: "headphones", cost: 34560 },
//     { productId: 345, productName: "tv", cost: 34555 },
//   ],
//   discountCoupons: [{ id: 123, cost: 3450 }],
//   address: {
//     streetName: "6th a cross",
//   },
// };

// const { test: test1 = 123 } = amazonUser;
// //
// console.log(test1);

// // password will not be created in this case variable created will be userPassword
// // const { password: userPassword, email: userEmailAddress } = amazonUser;
// function authenticate({ password, email: userEmailAddress }) {
//   console.log(password, userEmailAddress);
//   password = 123453;
// }

// // function calculateTotal(obj) {
// //   // bill calculation
// //   obj.password = 1234;
// // }

// function willThisChange({ shoppingCart }) {
//   shoppingCart[0].productName = "gun";
// }

// authenticate(amazonUser);
// willThisChange(amazonUser);
// // calculateTotal(amazonUser);

// // console.log(amazonUser.password);
// // console.log(amazonUser.shoppingCart);

// // rest parameters
// // array destructuring
// // const array = [1, 2, 3];
// // const array1 = [4, 5, 6];
// // console.log([...array, ...array1]);

// function add(...values) {
//   return values.reduce((prev, next) => prev + next, 0);
// }

// console.log(add(1, 2, 3, 4));

// const error = false;
// // const test = error || "you have won";
// // console.log(test);

// error || console.log("this is a test");

// const obj = {
//   name: "Rahul Mohan",
// };

// let obj;

// // console.log(obj.name);

// const firstName = obj && obj.name;
// if (firstName) {
//   console.log(firstName);
// } else {
//   console.log("server is down ");
// }

// turnery

// const IS_AWESOME = false;
// function checkAwesome() {
//   if (IS_AWESOME) {
//     return "yo yo yo";
//   } else {
//     return "crying";
//   }
// }
// const text = IS_AWESOME ? "yo yo yo" : "crying";
// console.log(text);

// nullish coalescing
// function printHotelGuest({ noOfGuest }) {
//   const NO_OF_HOTEL_GUEST = noOfGuest ?? "system Down";
//   console.log(`${NO_OF_HOTEL_GUEST} currently staying in the hotel`);
// }

// hotel1 = {
//   noOfGuest: 0,
// };

// printHotelGuest(hotel1);

// const obj = {
//   name: "Rahul Mohan",
// };

// // let obj;

// // console.log(obj.name);

// // const streetName = obj && obj.address && obj.address.streetName;
// // Optional chaining (?.)
// const streetName = obj?.address?.streetName;
// if (streetName) {
//   console.log(streetName);
// } else {
//   console.log("server is down ");
// }
