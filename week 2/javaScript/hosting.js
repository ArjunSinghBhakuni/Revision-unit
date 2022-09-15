// function a() {
//  console.log("hi");
// }
// // function declaration get rewritten in memory
// function a() {
//  console.log("bye");
// }
// console.log(a());

// variable declaration gets hoisted as undefined
var favoriteFood = "grapes";

var foodThoughts = function () {
  console.log(`Original favorite food: ${favoriteFood}`);

  var favoriteFood = "sushi";
  console.log(`New favorite food: ${favoriteFood}`);
};
foodThoughts();
