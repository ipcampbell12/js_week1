let answer = "D";

//check our answer for each case
switch (answer) {
    case 'A':
        console.log("A is Wrong");
        break;
    case "B":
        console.log("B is wrong");
        break;
    case "C":
        console.log("C is correct.");
        break;
    //essentialy else statement if nothing above applies
    //i.e. if you put "D"
    //don't break for default
    default:
        console.log("Not a real answer")
}