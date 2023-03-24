
let todos = []
let persisted_todos = localStorage.getItem("todos")

if(persisted_todos){
    todos = JSON.parse(persisted_todos)
 
    convertArrayToList(todos)
    
}

let addnewtodo = (event) => {
    event.preventDefault()
    let taskName = event.target.task_name.value
    if (taskName) {
        todos.push(taskName)
        convertArrayToList(todos)
        event.target.task_name.value = ``
    }
}

function convertArrayToList(arr){
    let str = ``
        todos.forEach((todo,index) => {
            str += `<li>${todo} <button onclick="deleteTodo(${index})">Remove</button></li>`
        })
        document.getElementById("todo_list").innerHTML = str

        localStorage.setItem("todos", JSON.stringify(todos))
}

function deleteTodo(idx){
  // Using Splice
   // todos.splice(index,1)

   // Using Filter

   todos = todos.filter((todo, index)=>{
    if(index != idx){
        return true
    }
   })
   convertArrayToList(todos)
}