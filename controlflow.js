let num = 5;

if (num === 6) {
    console.log("Runs")
} else if (false) {
    console.log("elseif")
} else {
    console.log("else")
}

//evaluate two statements at a time
//and = &&
if (num === 5 && true === true) {
    console.log("Runs")
} else if (false) {
    console.log("elseif")
} else {
    console.log("else")
}

//or = ||
if (num === 10 || true === true) {
    console.log("Runs")
} else if (false) {
    console.log("elseif")
} else {
    console.log("else")
}

