/* output

    task-1 is  incomplete
    task-2 is  compolete
    .
    .
    .
    

*/

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


// function todo(input, index) {
//     if (input[index].completed == true) {
//         console.log(`task-${input[index].id} is complete`);
//     }
//     else {
//         console.log(`task-${input[index].id} is incomplete`);
//     }

// }


// BY USING TERNARY OPERATOR

function todo(input, index) {
    let verify = input[index].completed ? `task-${input[index].id} is complete` : `task-${input[index].id} is incomplete`
    console.log(verify);
}

todo(todos, 0);
todo(todos, 1);
todo(todos, 2);
todo(todos, 3);
todo(todos, 4);
