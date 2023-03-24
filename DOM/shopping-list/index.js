let products = []
let persisted_products = localStorage.getItem("products")
if (persisted_products) {
    products = JSON.parse(persisted_products)

    convertArrayToRow(products)
}

let addShoppingItem = (event) => {
    event.preventDefault()
    let productName = event.target.product_name.value
    let quantityInput = event.target.quantity_input.value

    if (productName && quantityInput) {

        products.push({
            name: productName,
            quantity: quantityInput
        })

        convertArrayToRow(products)
        event.target.product_name.value = ``
        event.target.quantity_input.value = ``

        // products.push(productName)
        // quantities.push(quantityInput)

        // let product_str = ``
        // let quantity_str = ``

        // products.forEach((product)=>{
        //     product_str += `<td>${product}</td>`
        // })
        // quantities.forEach((quantity) => {
        //     quantity_str += `<td>${quantity}</td>`
        // })

        // document.getElementById("tableBody").innerHTML = `<tr>${product_str}${quantity_str}</tr>`
    }

}

function convertArrayToRow(arr) {
    let product_str = ``

    products.forEach((product, index) => {
        product_str += `<tr><td>${product.name}</td><td>${product.quantity}</td></tr>`
    })

    document.getElementById("tableBody").innerHTML = product_str
    localStorage.setItem("products", JSON.stringify(products))
}
