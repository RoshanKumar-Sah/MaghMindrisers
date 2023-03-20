let person = {
    name: "Ram",
    age: 20,
    address: "putalisadak"
}

// console.log(person.address)

console.log('""'); // To print double quote using single quote

// To print multiple items using + (will cause problem in future) [USE TEMPLATE LITERAL TO OVERCOME THIS]
console.log(person.name + " with age " + person.age + " lives in " + person.address); 


// Using TEMPLATE LITERAL

console.log(`""`); // To print double quote using TEMPLATE LITERAL

console.log(`${person.name} with age ${person.age} lives in ${person.address}`);


// OBJECT DESTRUCTURING

// let {name, age, address} = person 

// console.log(`${name} with age ${age} lives in ${address}`);

let {address, age , name} = person //order of key doesn't matter in object destructuring but don't do typoerror

// Above code is like this
// let address = person.address 
// let age = person.age
// let name = person.name

console.log(`${address}`);
console.log(`${name} with age ${age} lives in ${address}`)


// let {name, age, address, phone} = person  // will print undefined
// console.log(phone);



