let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for(index=0; index < arr.length; index++){
//     console.log(` In index ${index}, we have ${arr[index]}`);
// }


// forEach : The forEach() method executes a provided function once for each array element.


//using normal function

// function print(element, index){
//     console.log(`In index ${index}, we have ${element}`);
// }

// arr.forEach(print)


// using ARROW FUNCTION

// print = (element, index) => {
//     console.log(`In index ${index}, we have ${element}`);
// }

// arr.forEach(print)

// forEach using anonymous arrow function

arr.forEach((element, index) => {
    console.log(`In index ${index}, we have ${element}`);
})



// filter: The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.


//Even numbers
let arr2 = arr.filter((element, index) => {
    return element % 2 === 0
})
console.log(arr2);

//Odd numbers
let arr3 = arr.filter((element) => element % 2 != 0)
console.log(arr3);


// map: The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// Doubling the array

let arr4 = arr.map((element, index) => {
    return element * 2
})
console.log(arr4)

// filter: The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

let arr5 = arr.filter((element, index) => {
    return index > 5
})

arr5 = arr.filter((element,index)=>{
    if(element %2 == 0){
        return true
    }
})

arr5 = arr.filter(element => element % 2 == 0 ? true :false)

console.log(arr5);

//find: The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

arr = [10, 24, 37, 43, 52, 6, 7, 8, 9, 10]

let greater_than30 = arr.find((element) => element>30 ? true:false)
console.log(greater_than30);