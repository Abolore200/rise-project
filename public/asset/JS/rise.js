// // function myFunction() {
// //     var x = document.getElementById("myInput");
// //     if (x.type === "password") {
// //       x.type = "text";
// //     } else {
// //       x.type = "password";
// //     }
// //   }
// //
// const email = document.querySelector('#email-address'),
//       password = document.querySelector('#myInput')

// let emailPassword = [email, password]
// emailPassword.forEach(function(emailPassword){
//   emailPassword.addEventListener('blur', function(){
//     validateEmailPassword(this)
//     //validate indexOf('@')
//     if(this.type === 'email'){
//       validateEmail(email)
//     }
//     if(this.type === 'password'){
//       passPassword(password)
//     }
//     // console.log(emailPassword.type)
//     let error;
//     error = document.querySelectorAll('.error')
//     if(email.value !== '' && password.value !== '' && password.value.length >+ 8){
//       if(error.length === 0){
//         sign_inBtn.disabled = false
//         sign_inBtn.style.cursor = 'pointer'
//         sign_inBtn.classList.remove('sign_inBtn')
//         passPassword()
//       }
//     }
//   })
// })
// function validateEmailPassword(emailPassword){
//   if(emailPassword.value.length > 0){
//     emailPassword.style.borderBottomColor = 'green'
//     emailPassword.style.transitionProperty = 'border'
//     emailPassword.style.transitionDuration = '.4s'
//     emailPassword.classList.remove('error')
//   } else {
//     emailPassword.style.borderBottomColor = 'red'
//     emailPassword.style.transitionProperty = 'border'
//     emailPassword.style.transitionDuration = '.4s'
//     emailPassword.classList.add('error')
//   }
// }
// function validateEmail(inputEmail){
//   let emails = inputEmail.value
//   if(emails.indexOf('@') !== -1){
//     inputEmail.style.borderBottomColor = 'green'
//     inputEmail.style.transitionProperty = 'border'
//     inputEmail.style.transitionDuration = '.4s'
//     inputEmail.classList.remove('error')
//   } else {
//     inputEmail.style.borderBottomColor = 'red'
//     inputEmail.style.transitionProperty = 'border'
//     inputEmail.style.transitionDuration = '.4s'
//     inputEmail.classList.add('error')
//   } 
// }
// //sign-in btn
// const sign_inBtn = document.querySelector('#submit-btn')
// // sign_inBtn.addEventListener('click', function(email){
  
// // })
// //disable sign-in btn, else form is completely filled
// document.addEventListener('DOMContentLoaded', function(){
//   sign_inBtn.disabled = true
//   sign_inBtn.style.cursor = 'no-drop'
//   sign_inBtn.classList.add('sign_inBtn')
// })
// //online-form
// const onlineForm = document.querySelector('#online-form')
// onlineForm.addEventListener('submit', function(e){
//   // e.preventDefault()
//   onlineForm.reset()
// })
// //
// const eAdd = document.querySelector('.e-address');
// const la_pass = document.querySelector('.la-password')
// email.addEventListener('click', function(){
//   eAdd.style.top = '0px'
//   eAdd.style.animationDuration = '.2s'
//   eAdd.style.animationName = 'e-address1'
//   eAdd.style.fontSize = '1rem'
// })
// //
// password.addEventListener('click', function(){
//   la_pass.style.top = '0px'
//   la_pass.style.animationDuration = '.2s'
//   la_pass.style.animationName = 'la-pass'
//   la_pass.style.fontSize = '1rem'
// })
// ;

// // const logo = document.querySelector('.logo')
// // logo.addEventListener('click', function(){
// //   if(password.type === 'password' ){
// //     password.type = 'text'
// //   } else {
// //     password.type = 'password'
// //   }
// // })
// function passPassword(pass){
//   if(pass.value.length < 8){
//     // sign_inBtn.disabled = true
//     const fillUp = document.querySelector('#fillUp')
//     fillUp.style.display = 'block'
//     pass.style.borderBottomColor = 'red'
//     pass.style.transitionProperty = 'border'
//     pass.style.transitionDuration = '.4s'
//     pass.classList.add('error')
//   } else {
//     // sign_inBtn.disabled = false
//     fillUp.style.display = 'none'
//     pass.style.borderBottomColor = 'greend'
//     pass.style.transitionProperty = 'border'
//     pass.style.transitionDuration = '.4s'
//     pass.classList.remove('error')
//   }
// }