function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  return y;
  a = 100;
}

var z = x();
console.log(z);
z();

function sayWord(word) {
  return () => console.log(word);
}

const sayHello = sayWord("hello");

sayHello(); // "hel

// set timeout of loop

function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
x();

// use with let

function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
x();

// use function

function x() {
  for (let i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(() => {
        console.log(i);
      }, 1000);
    }
    close(i);
  }
}
x();

// what is module pattern
// he module pattern is a special Design pattern in which we use IFFI
//(Immediately invoked function expression), and we return an object.
//Inside of that object, we can have functions as well as variables.

var module = (function () {
  function privateMethod() {
    // do something
    console.log("Private");
  }
  return {
    publicMethod: function () {
      // can call private method
      console.log("public");
    },
  };
})();

module.privateMehod(); // get error
module.publicMehod(); // print public

// memoziation

function memoziation() {
  let cached = {};

  return function (num) {
    if (num in cached) {
      console.log("cached value");
      return cached[num];
    } else {
      cached[num] = num + 256;
      return cached[num];
    }
  };
}

var memozied = memoziadAdto256();
memozied(20); // noraml return
memozied(20); // cached return
