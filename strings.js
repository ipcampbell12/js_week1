//if variable name has strikethrough, means it's a variable with a special meaning and you should try something else 

let fname = "Dylan";
let lname = "Johnson";

//old school way of doing it
//console.log(fname + ' ' + lname);

//string interpolation - using backticks
//like fstring literals from python
let fullName = `${fname} ${lname}`;

//returns length of string
// doesn't need () at the end (property)
let nameLength = fullName.length;

//removes spaces at beginning and end of string
//needs () at the end (method)
let sentence = "     I have an apple      ".trim();

//make whole word uppercase or lower case
let word1 = "jordan"
let word2 = 'DANIEL'

let upperWord = word1.toUpperCase()
let lowerWord = word2.toLowerCase()

// splits based on delimiter into an array

//array of words
let splitSentence = sentence.split(' ')

//array of characters
let splitWord = word1.split('')

//console 
console.log(fullName)
console.log(nameLength)
console.log(sentence)
console.log(upperWord)
console.log(lowerWord)
console.log(splitWord)

