let task1 = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
}

let task2 = {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
}

let task3 = {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
}

let task4 = {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
}

let task5 = {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
}


// console.log(`task-${task1.id} is ${task1.completed}`);
// console.log(`task-${task2.id} is ${task2.completed}`);
// console.log(`task-${task3.id} is ${task3.completed}`);
// console.log(`task-${task4.id} is ${task4.completed}`);
// console.log(`task-${task5.id} is ${task5.completed}`);


// console.log(`title ${task1.title} is ${task1.completed}`);
// console.log(`title ${task2.title} is ${task2.completed}`);
// console.log(`title ${task3.title} is ${task3.completed}`);
// console.log(`title ${task4.title} is ${task4.completed}`);
// console.log(`title ${task5.title} is ${task5.completed}`);


// SIMPLE FUNCTION 
// function printStatus(task, key){
//     console.log(`${key}-${task[key]} is ${task.completed}`) // refer to dynamicmethodtoprint.js
// }


// printStatus(task1, "id")
// printStatus(task2, "title")
// printStatus(task3, "id")


// ARROW FUNCTION 

let printStatus = (task,key) => {
    console.log(`${key}-${task[key]} is ${task.completed}`)
}

printStatus(task1, "id")
printStatus(task2, "title")
printStatus(task3, "id")