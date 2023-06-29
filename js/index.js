const mainContainer = document.querySelector(".main-container")

fetch('./products.json')
  .then((response) => response.json())
  .then((json) => json.forEach((prod)=>{
    const image = document.createElement("img")
    const name = document.createElement("h2")
    const desc = document.createElement("h3")
    const price = document.createElement("p")
    const buyBtn = document.createElement("button")
    const container = document.createElement("div")
    
    buyBtn.className = "snipcart-add-item"
    image.className = "prod-image"
    price.className = "prod-price"
    container.className = "prod-container"
    desc.className = "prod-description"
    name.className = "prod-title"
    

    buyBtn.setAttribute("data-item-name", prod.title)
    buyBtn.setAttribute("data-item-price", prod.price)
    buyBtn.setAttribute("data-item-description", prod.description)
    buyBtn.setAttribute("data-item-id", prod.id)
    buyBtn.setAttribute("data-item-url", prod.url)
    buyBtn.innerHTML = "Add to cart"

    image.src = prod.image
    price.innerHTML = `$ ${prod.price}`
    desc.innerHTML = prod.description
    name.innerHTML = prod.title

    container.appendChild(image)
    container.appendChild(name)
    container.appendChild(desc)
    container.appendChild(price)
    container.appendChild(buyBtn)
    mainContainer.appendChild(container)
  })
  )


