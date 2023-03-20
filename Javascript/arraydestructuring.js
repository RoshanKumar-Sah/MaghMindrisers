// IN ARRAY DESTRUCTURING SOMETIMES AUTOMATIC SEMICOLON <;> DOESN'T WORK (IT'S KIND OF BUG IN JAVASCRIPT) 

// Normally we make array in plural forms

let brands = ["Samsung", "Apple"]

console.log(`The first brand is ${brands[0]} and second is ${brands[1]}`);

// ARRAY DESTRUCTURING
let [brand1, brand2] = brands


// Above code is like this
// let brand1 = brands[0]
// let brand2 = brands[1]

// let [brand2, brand1] = brands // Order matters in ARRAY DESTRUCTURING because it catches the key



console.log(brand1);
console.log(brand2);

console.log({brand1}); // WHILE READING IN TERMINAL IT WILL BE EASY SO WE USE CURLY BRACES
console.log({brand2});




console.log(`The first brand is ${brand1} and second is ${brand2}`);