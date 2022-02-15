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

