const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function repeatedSumOfDigits(num) {
  while (num >= 10) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    num = sum;
  }
  return num;
}

rl.question("Enter a number: ", (userInput) => {
  let num = parseInt(userInput);
  if (isNaN(num)) {
    console.log("Invalid number input.");
  } else {
    console.log("Final single digit sum:", repeatedSumOfDigits(num));
  }
  rl.close();
});
