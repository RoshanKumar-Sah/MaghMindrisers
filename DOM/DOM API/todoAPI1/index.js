function fetchTodo() {

    // console.log("Linked");
    fetch(`https://todo-api-sagartmg2.vercel.app/api/todos`)
        .then(res => {
            return res.json()
        }).then(json => {
            // console.log(json.data);
            let data = json.data
            let str = ``
            data.forEach((todo, index) => {
                str += `<tr>
            <td>${todo.title}</td>
            <td>${todo.status}</td>
            <td>
            <button onclick="editTodo('${todo._id}')" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
            <button onclick="removeTodo('${todo._id}')">Remove</button>
            </td>
            </tr>`
            })
            document.getElementById("tableBody").innerHTML = str
        })
}

fetchTodo()


let editTodo = (id) => {
    fetch(`https://todo-api-sagartmg2.vercel.app/api/todos/${id}`).then(res=>{
        return res.json()
    }).then(
        json => {
            let todo = json.data
            document.getElementById("modalBody").innerHTML = `
            <input type="text" name="todo_id" hidden value="${todo._id}" class="form-control" />
            <input type="text" name="todo_title" value="${todo.title}" class="form-control" />
            <select name="todo_status" class="form-control mt-2">
            <option value="false" ${!todo.status ? "selected" : ""}>false</option>
            <option value="true" ${todo.status ? "selected" : ""}>true</option>
          </select>
            `
        }
    )

}


let updateTodo = (event) => {
event.preventDefault()

axios.put(`https://todo-api-sagartmg2.vercel.app/api/todos/${event.target.todo_id.value}`, {
    title: event.target.todo_title.value,
    status: event.target.todo_status.value
}).then(res => {
    fetchTodo()
})

}


let removeTodo = (id) => {
    fetch(`https://todo-api-sagartmg2.vercel.app/api/todos/${id}`, {
        method: "DELETE"
    }).then(res => {
        fetchTodo()
    })
}



let createTodo = (event) => {
    event.preventDefault()
    // console.log("create");

    fetch(`https://todo-api-sagartmg2.vercel.app/api/todos`, {
        method: "POST",
        "body": JSON.stringify(
            {
                title: `${event.target.title.value}`
            }),
        "headers": {
            "content-type": "application/json"
        }
    }).then(res => {
        fetchTodo()
    })
    event.target.title.value = ""

}