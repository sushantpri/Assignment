// Function demonstrating var, let, and const scope
function variableScopes() {
    var x = 'I am var';
    let y = 'I am let';
    const z = 'I am const';
  
    if (true) {
      var x = 'var updated'; 
      let y = 'let block';   
      const z = 'const block'; 
      console.log('Inside block:', x, y, z);
    }
  
    console.log('Outside block:', x, y, z);
  }
  variableScopes();
  
  
  // Array of fruits
  const fruits = ['Apple', 'Banana', 'Cherry', 'Mango', 'Orange'];
  
  // Function that returns the second fruit
  function getSecondFruit() {
    return fruits[1];
  }
  console.log('Second fruit:', getSecondFruit());
  
  
  // Function that modifies an array using push and pop
  function modifyArray(arr) {
    arr.push('New Element'); 
    arr.pop();               
    return arr;
  }
  console.log('Modified array:', modifyArray(['A', 'B', 'C']));
  
  
  // Function that squares numbers using map
  const numbers = [1, 2, 3, 4, 5];
  
  function squareNumbers(arr) {
    return arr.map(num => num * num);
  }
  console.log('Squared numbers:', squareNumbers(numbers));
  
  
  // Function that filters out even numbers
  function filterOdds(arr) {
    return arr.filter(num => num % 2 !== 0);
  }
  console.log('Odd numbers:', filterOdds(numbers));
  
  
  // Object with person details
  const person = {
    name: 'Alice',
    age: 30,
    occupation: 'Engineer'
  };
  
  // Function that logs a greeting using object properties
  function greetPerson() {
    console.log(`Hello, my name is ${person.name}, I am ${person.age} years old and I work as a ${person.occupation}.`);
  }
  greetPerson();
  
  
  // Function that calculates area of a rectangle
  function calculateArea(rect) {
    return rect.width * rect.height;
  }
  console.log('Area of rectangle:', calculateArea({ width: 5, height: 10 }));
  
  
  // Function that returns the keys of an object
  function getObjectKeys(obj) {
    return Object.keys(obj);
  }
  console.log('Object keys:', getObjectKeys({ a: 1, b: 2, c: 3 }));
  
  
  // Function that merges two objects
  function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
  }
  console.log('Merged object:', mergeObjects({ name: 'Alice' }, { age: 25 }));
  
  
  // Function that sums numbers in an array using reduce
  function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  console.log('Sum of array:', sumArray([10, 20, 30]));
  