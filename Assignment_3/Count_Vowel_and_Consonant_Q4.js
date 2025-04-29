const readline = require('readline');

function countVowelsConsonants() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Enter a string (minimum 20 characters): ", function(str) {
    if (str.length < 20) {
      console.log("Please enter a string with at least 20 characters.");
      rl.close();
      return;
    }

    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    let consonantCount = 0;

    for (let i = 0; i < str.length; i++) {
      let char = str[i].toLowerCase();
      if (vowels.indexOf(char) !== -1) {
        vowelCount++;
      } else if (char.match(/[a-z]/i)) {
        consonantCount++;
      }
    }

    console.log(`Vowels: ${vowelCount}`);
    console.log(`Consonants: ${consonantCount}`);

    rl.close();
  });
}

countVowelsConsonants();
