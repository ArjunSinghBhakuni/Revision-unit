let name = "sonu";

let obj = {
  name: "arjun",

  foo: () => {
    console.log("this.name", this.name);
  },
};

obj.foo();
