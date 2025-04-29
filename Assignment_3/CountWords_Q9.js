const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function countWords(paragraph) {
  return paragraph.trim().split(/\s+/).length;
}

rl.question("Enter a paragraph: ", function (userInput) {
  const wordCount = countWords(userInput);
  console.log("Word count:", wordCount);
  rl.close();
});
