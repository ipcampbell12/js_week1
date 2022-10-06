let example = 7.77;

//javascript has only one number type - no float vs integer

console.log(example)

//parseInt
//only returns whole number value
//like floor from python

let parsed = parseInt(example)

let float = parseFloat(example)


//fixed number of decimals
//does actually round up
let decimal = example.toFixed(1)

console.log(parsed)
console.log(float)
console.log(decimal)