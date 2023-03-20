

document.getElementById("button").addEventListener("click", () => {
    let color = ["red", "orange", "blue", "white"]
    let index = Math.floor(Math.random() * color.length)
    document.getElementsByTagName("body")[0].style.backgroundColor = color[index]
})