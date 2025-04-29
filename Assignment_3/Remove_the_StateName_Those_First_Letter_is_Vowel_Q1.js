let states = [
    "Andhra Pradesh", "Assam", "Bihar", "Chhattisgarh", "Odisha", "Goa",, "Haryana", "Jharkhand", "Kerala", "West Bengal"];
  
  let filteredStates = states.filter(function(state) {
    let firstLetter = state[0].toLowerCase(); 
    return firstLetter !== 'a' && firstLetter !== 'e' && firstLetter !== 'i' && firstLetter !== 'o' && firstLetter !== 'u'; 
  });
  
  console.log(filteredStates);
  