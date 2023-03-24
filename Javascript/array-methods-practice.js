let todos = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": true
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
    },
    {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
    },
    {
        "userId": 1,
        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
    }
]

/*
// push

todos.push({
    "userId": 1,
    "id": 10,
    "title": "moshgys sycys syfyv",
    "completed": true
})

// console.log(todos);

//pop

todos.pop()

// console.log(todos);

//unshift

todos.unshift({
    "userId": 1,
    "id": 10,
    "title": "moshgys sycys syfyv",
    "completed": true
})

// console.log(todos);

// shift

todos.shift()
// console.log(todos);

*/

// WAP to print id and its title whose tasks are completed and whose are not.

todos.forEach((element, index) => {
    if (element.completed) {
        console.log(`The task of id ${element.id} having title ${element.title} is completed`);
    }
    else {
        console.log(`The task of id ${element.id} having title ${element.title} is incomplete`);
    }
})

// let todos1 = todos.map((element,index)=>{
//     return element
// })

// console.log(todos1);

let completed_todos = todos.filter((element, index) => {
    if (element.completed) {
        return element
    }
})

console.log(completed_todos);

let id5 = todos.find((element,index)=>{
   return element.id == 5
})

console.log(id5);
