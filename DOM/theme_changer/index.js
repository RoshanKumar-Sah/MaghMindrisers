// document.getElementById("darkButton").addEventListener("click", () => {
//     document.getElementById("body").classList.add("dark")
//     document.getElementById("darkButton").classList.add("notactive")
//     document.getElementById("lightButton").classList.add("active")

// })

// document.getElementById("lightButton").addEventListener("click", () => {
//     document.getElementById("body").classList.remove("dark")
//     document.getElementById("darkButton").classList.remove("notactive")
//     document.getElementById("lightButton").classList.remove("active")

// })

// document.getElementById("lightButton").addEventListener("click", () => {
// document.getElementById("body").classList.remove("dark")
// })

// document.getElementById("darkButton").addEventListener("click", () => {
//     document.getElementById("body").classList.add("dark")
//     })


let default_theme = "light"
document.getElementById("toggleTheme").addEventListener("click", ()=>{
    if(default_theme == "light"){
        
        document.getElementById("toggleTheme").innerText = "Light"
        default_theme = "dark"
    }
    else{
        document.getElementById("toggleTheme").innerText = "Dark"
        default_theme = "light"
    }
    
    document.getElementById("body").classList.toggle("dark")
 
})