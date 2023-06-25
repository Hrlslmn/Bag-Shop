import products from '/products.json' assert { type: "json" };
const mainContainer = document.querySelector(".main-container")

function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '10px';
    }
  }

products.forEach((prod)=>{
    const image = document.createElement("img")
    const container = document.createElement("div")
    const name = document.createElement("h2")
    const desc = document.createElement("h3")
    const price = document.createElement("p")
    const buyBtn = document.createElement("button")

    const handleClick = () =>{
  
    }

    buyBtn.addEventListener('click',handleClick)


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
    buyBtn.setAttribute("data-item-custom1-name","Bag-color")
    buyBtn.setAttribute("data-item-custom1-options",`${prod.white}|${prod.black}[+10.00]`)
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

