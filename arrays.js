//multiple values
//list of items

let example1 = [7, 8, 9, 10];

//find length of array 
//start on 0 index
let arrLength = example1.length;

//add values
example1.push(12, 14, 15);

//remove last values
example1.pop();


//override values
example1[0] = 1;

//iterate through entire array
//print each item in the array
example1.forEach((element) => {
    console.log(element)
});

console.log(example1)