let number = parseInt (prompt("Start a Countdown Timer:"));

if (isNaN(number)) {
    console.log("Enter a valid number only!");
} else {
    while (number >=0 ) {
        console.log (number); number--;
    }
}
