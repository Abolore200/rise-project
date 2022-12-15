const changeText = document.querySelector('.col-section-2_1_1-img ul')
changeText.addEventListener('click', function(e){
    if(e.target.classList.contains('click-a')){
        e.preventDefault()
        const postOne = e.target.parentElement.parentElement.parentElement.parentElement.parentElement
        getPost(postOne)
    }
})
function getPost(postOne){
    createPost = {
        image: postOne.querySelector('img').src,
        title: postOne.querySelector('.img-fig-caption p').textContent,
        price: postOne.querySelector('#price').textContent,
        id: postOne.querySelector('a').getAttribute('data-id')
    }
    createTable(createPost)
    // console.log(createPost)
}
function createTable(postOne){
    const newTable = document.createElement('tr')
    newTable.innerHTML = `
        <tr>
            <td><img src="${postOne.image}" class="img-width" /></td>
            <td>${postOne.title}</td>
            <td>${postOne.price}</td>
            <td><a class="remove" href="#" data-id="${postOne.id}">X</a></td>
        </tr>
    `;
    // const all = document.querySelector('.shopping-bars')
    const all = document.querySelector('.barhome')
    all.appendChild(newTable)
    tableHome.appendChild(newTable)
    addCartToLS(postOne)
}

const tableHome = document.querySelector('.table-home table tbody')

console.log(tableHome)
tableHome.addEventListener('click', function(e){
    let cartHome, cartRemoveLS;
    if(e.target.classList.contains('remove')){
        e.target.parentElement.parentElement.remove()
        cartHome = e.target.parentElement.parentElement
        cartRemoveLS = cartHome.querySelector('a').getAttribute('data-id')
    } removeCartLS(cartRemoveLS)
})

const table = document.querySelector('.table-home')
const clearCart = document.querySelector('.removeBtn')
clearCart.addEventListener('click', function(e){
    while(tableHome.firstChild){
        tableHome.removeChild(tableHome.firstChild)
    }
    localStorage.clear()
})

function addCartToLS(postOne){
    let cart = getCartToLS()
    cart.push(postOne)
    localStorage.setItem('cart', JSON.stringify(cart))
}
function getCartToLS(){
    let cart;
    let cartLS = localStorage.getItem('cart')
    if(cartLS === null){
        cart = []
    } else {
        cart = JSON.parse(cartLS)
    } return cart;
}
//
document.addEventListener('DOMContentLoaded', function(){
    let cart = getCartToLS()
    cart.forEach(function(postOne) {
        const newTable = document.createElement('tr')
        newTable.innerHTML = `
        <tr>
            <td><img src="${postOne.image}" class="img-width" /></td>
            <td>${postOne.title}</td>
            <td>${postOne.price}</td>
            <td><a class="remove" href="#" data-id="${postOne.id}">X</a></td>
        </tr>
    `;
    tableHome.appendChild(newTable)
    });
})
function removeCartLS(id) {
    let cart = getCartToLS()
    cart.forEach(function(cartsLS, index) {
        if(cartsLS.id === id){
            cart.splice(index, 1)
        }
    });
    localStorage.setItem('cart', JSON.stringify(cart))
}
const addLink = document.querySelectorAll('.img-fig-cap-loc span a:nth-child(1)')
addLink.forEach(function(addLink, index){
    addLink.classList.add('click-a')
    addLink.setAttribute('data-id', index)
})
const price = document.querySelectorAll('.img-fig-cap-span span:nth-child(2)')

price.forEach(function(price){
    price.id = 'price'
})
const clickbar = document.querySelector('.bars')
clickbar.addEventListener('click', function(e){
    if(e.target.classList.contains('fa-bars')){
        const navlinks = document.querySelector('.class-nav-list')
        // navlinks.style.display = 'block'
        navlinks.classList.add("show")
        
        // const navlinkul = document.querySelector('.nav-links ul')
        // navlinkul.style.removeProperty('display')
    }
})

const shoppingbar = document.querySelector('.shopping-bars')
shoppingbar.addEventListener('click', function(e){
    if(e.target.classList.contains('fa-cart-shopping')){
        const tablehome = document.querySelector('.table-home')
        tablehome.classList.toggle('show')
    }
})