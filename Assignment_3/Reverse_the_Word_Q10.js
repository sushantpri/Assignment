const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function reverseString(str) {
  return str.split("").reverse().join("");
}

rl.question("Enter a string: ", function(userInput) {
  console.log("Reversed string:", reverseString(userInput));
  rl.close();
});
