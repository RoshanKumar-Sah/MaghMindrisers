
function fetchTodos() {
    fetch('https://todo-api-sagartmg2.vercel.app/api/todos')
        .then(response => {
            return response.json()
        }).then(json => {
            let data = json.data
            let str = ``
            data.forEach(todo => {
                str += `<tr><td>${todo.title}</td><td>${todo.status}</td><td>
                <button data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editTodo('${todo._id}')">Edit</button>
                <button onclick="removeTodo('${todo._id}')">Remove</button></td></tr>`

            });

            document.getElementById("tableBody").innerHTML = str

        })
}

fetchTodos()

let editTodo = (id) => {
    fetch(`https://todo-api-sagartmg2.vercel.app/api/todos/${id}`)
        .then(res => {
            return res.json()
        }).then(json => {
            let todo = json.data
            document.getElementById("modalBody").innerHTML = `<input type="text" class="form-control" value="${todo._id}" name="id" hidden>
    <input type="text" class="form-control" value="${todo.title}" name="title">
    <select class="form-control mt-2" name="status">
      <option value="false" ${!todo.status ? "selected" : ""}>false</option>
      <option value="true" ${todo.status ? "selected" : ""} >true</option>
    </select>`
        })
}

let updateTodo = (event) => {
    event.preventDefault()

    axios.put(`https://todo-api-sagartmg2.vercel.app/api/todos/${event.target.id.value}`, {
        title: event.target.title.value,
        status: event.target.status.value

    }).then(res => {
        fetchTodos()
    })

}

function removeTodo(id) {
    fetch(`https://todo-api-sagartmg2.vercel.app/api/todos/${id}`, {
        method: "DELETE"

    }).then(res => {
        fetchTodos()
    })
}






function createTodo(event) {
    event.preventDefault()

    fetch("https://todo-api-sagartmg2.vercel.app/api/todos", {
        method: "POST",
        body: JSON.stringify({
            title: `${event.target.todo_title.value}`
        }),
        headers: {
            "content-type": "application/json"
        }
    }).then(res => {
        fetchTodos()
    })
}