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

    const html = new htmlui()
    html.displayCart(postOne)

    tableHome.appendChild(newTable)
    addCartToLS(postOne)
}

const tableHome = document.querySelector('.table-home table tbody')
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

const navlinks = document.querySelector('.nav-links')
const clickbar = document.querySelector('.fa-bars')
clickbar.addEventListener('click', function(){
        navlinks.classList.toggle("show")
})

const copyspan = document.querySelector('.copyright p span')
const updateyear = new Date().getFullYear()
copyspan.innerHTML = `${updateyear}`
const body = document.querySelector('body')
class htmlui{
    displayCart(postOne){
        const title = document.createElement('div')
        title.className = "cart-details"
        title.innerHTML = `
           <p> ${postOne.title} has been added to the cart. </p>
        `;
        const header = document.querySelector('header')
        header.style.paddingTop = '40px'
        body.insertBefore(title, header)
        const cartDetails = document.querySelector('.cart-details')
        cartDetails.style.display = 'block'
        setTimeout(function(){
            cartDetails.remove()
            header.style.removeProperty('padding-top')
        }, 1500)
    }
}

const submitForm = document.querySelector('form')
submitForm.addEventListener('submit', function(e){
    e.preventDefault()
    const inputText = document.querySelector('input[type="text"]').value
    const inputCategories = document.querySelector('select[name="categories"]').value
    const inputLocation = document.querySelector('select[name="location"]').value
    const formSubmit = new Form()
    if(inputText === '' || inputCategories === '' || inputLocation === ''){
        formSubmit.displayFormError()
    }
})
const colOpt2 = document.querySelector('.col-opt-2')
class Form{
    displayFormError(){
        const error = document.createElement('div')
        error.className = 'displayerror'
        error.innerHTML = `
           <p> All Fields Are Mandatory! </p>
        `;
        colOpt2.insertBefore(error, submitForm)
        setTimeout(function(){
            error.remove()
        }, 2000)
    }
}