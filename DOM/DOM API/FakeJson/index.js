fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        let str =``
        json.forEach(todo => {
str += `<tr><td>${todo.id}</td><td>${todo.title}</td><td>${todo.completed}</td></tr>`
            
        })
        document.getElementById("tableBody").innerHTML = str
      })

      