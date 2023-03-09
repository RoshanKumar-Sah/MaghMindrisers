
document.getElementById("menu").addEventListener("click", () => {
    document.getElementById("navbar").classList.add("active")
    document.getElementById("nav-overlay").classList.add("active")
    document.getElementById("menu").classList.add("active")
})

document.getElementById("close").addEventListener("click", () => {
    document.getElementById("navbar").classList.remove("active")
    document.getElementById("nav-overlay").classList.remove("active")
    document.getElementById("menu").classList.remove("active")
})

document.getElementById("nav-overlay").addEventListener("click", () => {
    document.getElementById("navbar").classList.remove("active")
    document.getElementById("nav-overlay").classList.remove("active")
    document.getElementById("menu").classList.remove("active")
})

document.getElementById("plan").addEventListener("click", () => {
    document.getElementById("plan").classList.add("active")
    document.getElementById("plan1").classList.remove("active")
    document.getElementById("plan2").classList.remove("active")
})

document.getElementById("plan1").addEventListener("click", () => {
    document.getElementById("plan1").classList.add("active")
    document.getElementById("plan").classList.remove("active")
    document.getElementById("plan2").classList.remove("active")
})

document.getElementById("plan2").addEventListener("click", () => {
    document.getElementById("plan2").classList.add("active")
    document.getElementById("plan").classList.remove("active")
    document.getElementById("plan1").classList.remove("active")
})

document.getElementById("card1").addEventListener("click", () => {
    document.getElementById("card1").classList.add("active")
    document.getElementById("card2").classList.remove("active")
    document.getElementById("card3").classList.remove("active")
})

document.getElementById("card2").addEventListener("click", () => {
    document.getElementById("card2").classList.add("active")
    document.getElementById("card1").classList.remove("active")
    document.getElementById("card3").classList.remove("active")
})

document.getElementById("card3").addEventListener("click", () => {
    document.getElementById("card3").classList.add("active")
    document.getElementById("card1").classList.remove("active")
    document.getElementById("card2").classList.remove("active")
})

// document.getElementById("navbar").addEventListener("click", () => {
//     document.getElementById("navbar").classList.remove("active")
// })