let example1 = ['Dylan', 5, true];

let example2 = example1;

//spread operator - creates new array
let example3 = [...example1];


//map method - creates new array - identifcal to spread operator
let example4 = example1.map((element) => {
    return element
});

example2.push(11);

//values of both example1 and example 2 will be identitcal 

//example2 is a reference to example1, you are not actually creating a new array

console.log(example1);
// returns [ 'Dylan', 5, true, 11 ]

console.log(example3);
//returns [ 'Dylan', 5, true ]

console.log(example4)