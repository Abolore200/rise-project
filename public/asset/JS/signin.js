const email = document.querySelector('#email-address')
const password = document.querySelector('#myInput')
const signinBtn = document.querySelector('#submit-btn')
document.addEventListener('DOMContentLoaded', function(){
    signinBtn.disabled = true
    signinBtn.classList.add('sign_inBtn')
})

email.addEventListener('blur', validateForm)
password.addEventListener('blur', validateForm)

function validateForm(){
    validateAll(this)
    if(this.type === 'email'){
        validateEmail(email)
    }
    if(this.type === 'password'){
        validatePassword(password)
    }
    if(email.value !== '' && password.value !== ''){
        signinBtn.disabled = false
        signinBtn.classList.remove('sign_inBtn')
    }
}
const eAdd = document.querySelector('.e-address')
const laPass = document.querySelector('.la-password')

email.addEventListener('click', function(){
    eAdd.classList.add('eAdd_laPass')
    eAdd.style.top = '0'

})
password.addEventListener('click', function(){
    laPass.classList.add('eAdd_laPass')
    laPass.style.top = '0'
})


function validateAll(all){
    if(all.value.length > 0){
        all.style.borderBottomColor = 'green'
        all.classList.add('validateForm')
    } else {
        all.style.borderBottomColor = 'red'
        all.classList.add('validateForm')
    }
}
function validateEmail(email){
    let inputEmail = email.value
    if(inputEmail.indexOf('@') !== -1){
        email.style.borderBottomColor = 'green'
    } else {
        email.style.borderBottomColor = 'red'
    }
}
//
function validatePassword(pass){
    if(pass.value.length < 8){
        const fillUp = document.querySelector('#fillUp')
        fillUp.style.display = 'block'
        pass.style.borderBottomColor = 'red'
    } else {
        fillUp.style.display = 'none'
        email.style.borderBottomColor = 'green'
    }
}
//
const onlineForm = document.querySelector('#online-form')
onlineForm.addEventListener('submit', function(){
    onlineForm.reset()
})
//
const logo = document.querySelector('.logo')
logo.addEventListener('click', function(){
    if(password.type === 'password'){
        password.type = 'text'
    } else {
        password.type = 'password'
    }
})