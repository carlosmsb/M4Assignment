let coinFlip;
let numberFlips = parseInt(prompt("How many times should the coin flip?"));

for (let i = 0; i < numberFlips; i++) {
    numberFlips = Math.round(Math.random());

    if (numberFlips === 0) {
        console.log("Heads");
    } else if (numberFlips === 1) {
        console.log("Tails");
    } else {
        console.log("Coin flip was invalid.")
    }
}