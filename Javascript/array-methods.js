const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// push : The push() method adds one or more elements to the end of an array and returns the new length of the array.

animals.push("lion")
console.log(animals);
animals.push("tiger", "cow", "leopard")
console.log(animals);

// pop : The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

animals.pop()
console.log(animals);
animals.pop()
console.log(animals);

// unshift : The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

animals.unshift("jackal")
console.log(animals);
animals.unshift("fox", "bear")
console.log(animals);

// shift : The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

animals.shift()
console.log(animals)

// splice : The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// arryName.splice(startindex,itemtodelete,itemtoadd)

animals.splice(0, 1, "snake") // starting from index 0, remove 1 item, add "snake"
console.log(animals)
animals.splice(2, 3, "python") // starting from index 2 , remove 3 items , add "python"
console.log(animals)

// slice : The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
//arrayName.slice(start,end)
// console.log(animals.slice(2, 4));

const sliced = animals.slice(2,4)
console.log(sliced);