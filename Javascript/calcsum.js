let sum_numbers = {
    first_number: 1,
    second_number: 2
}




let sum = sum_numbers.first_number + sum_numbers.second_number

console.log(`The sum of ${sum_numbers.first_number} and ${sum_numbers.second_number} is ${sum}`);

let {first_number, second_number} = sum_numbers
let sum1 = first_number + second_number

console.log(`The sum of ${first_number} and ${second_number} is ${sum1}`);


let sum_num = [2, 3]

let sum3 = sum_num[0] + sum_num[1]
console.log(`The sum of ${sum_num[0]} and ${sum_num[1]} is ${sum3}`);

let [num1 , num2] = sum_num

let sum2 = num1 + num2

console.log(`The sum of ${num1} and ${num2} is ${sum2}`);
