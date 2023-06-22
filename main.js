const productPromise = await fetch("https://saikawn.github.io/superwifi/products.json")
const products = await productPromise.json ()

const template = document.querySelector("#product-card")

const wrapper = document.createElement("div")

products.forEach(product => {
    const clone = template.content.cloneNode(true)
    clone.querySelector("h3").textContent = product.name
    clone.querySelector(".category").textContent = product.category
    clone.querySelector(".type").textContent = product.type
    clone.querySelector(".description").textContent =product.description

    const img = clone.querySelector("img")
    img.src = product.photo
    
    wrapper.appendChild(clone)
})

document.querySelector(".products").appendChild(wrapper)