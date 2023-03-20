let form = {
    email: "ema@e.com",
    password: "passwod",
    username: "john123",
}

// console.log(form.username); // Static method to print
// console.log(form.email);

// DYNAMIC METHOD TO PRINT

// let to_be_printed_filed = "username"
let to_be_printed_filed = "email";


console.log(form[to_be_printed_filed]);


let object1 = {
    1: "one"
}

console.log(object1);

// console.log(object1.1); // This will not work in numerical key

console.log(object1[1]); // This will work in numerical key