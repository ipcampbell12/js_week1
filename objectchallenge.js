let example1 = {
    firstName: "Dylan"
};

let example2 = example1;

//asigning property to value that doesn't exist - it's okay
example2.lastName = "Johnson";

//passes by reference



//this method instatniates a new object and won't be reference any more

let example3 = Object.assign({}, example1)
console.log(example3)