//   function x() {
//    var a = 10
//     function y() {
//       console.log(a);
//     }
//   y()
//    a=100
//   }

//  var z =  x();
//  console.log(z)
// z()

// // set timeout of loop

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   }
// }
// x();

// // use with let

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   }
// }
// x();

// // use function

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     function close(i) {
//       setTimeout(() => {
//         console.log(i);
//       }, 1000);
//     }
//     close(i);
//   }
// }
// x();
