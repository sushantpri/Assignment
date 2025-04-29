const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function correctfn(string, wrong, correct) {
  const escapedWrong = escapeRegExp(wrong);
  const regex = new RegExp(`\\b${escapedWrong}\\b`, 'gi');
  return string.replace(regex, correct);
}

rl.question("Enter the sentence: ", function (sentence) {
  rl.question("Enter the wrong word you want to replace: ", function (wrongWord) {
    rl.question("Enter the correct word: ", function (correctWord) {
      let result = correctfn(sentence, wrongWord, correctWord);
      console.log("Corrected Sentence: " + result);
      rl.close();
    });
  });
});
