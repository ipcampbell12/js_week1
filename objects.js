let example1 = {
    firstName: 'Dylan',
    lastName: 'Israel',
    address: {
        city: "Austin",
        state: "Texas"
    },
    age: 30,
    pets: {
        hamster: "Tito",
        bird: "Jonathan",
        cat: "Milo"
    }
};


console.log(example1.address.city);
//returns "Austin"

console.log(example1.pets.cat);
//returns "Milo"

//can also override elements
example1.age = 40;

console.log(example1.age)
//returns 40

//property names are keys, values are  values

//return all keys

console.log(Object.keys(example1))

//return all values as an array
console.log(Object.values(example1))

//.hasOwnProperty to check if it's there
