const times = document.querySelector('.fa-times')
const timesHome = document.querySelector('.times')
const bars = document.querySelector('.times .fa-bars')
const header = document.querySelector('header')
const homelinkJ= document.querySelector('header .homelink')
const navlists = document.querySelector('.navlist')
const navlist = document.querySelectorAll('.navlist a span')
const navlistli = document.querySelectorAll('.navlist ul li')
const homerise = document.querySelector('.homerise')
const navlistfa = document.querySelectorAll('.navlist a .fa')

navlistli.forEach(function(navlistli){
    const divarrow = document.createElement('div')
    divarrow.classList.add('arrow')
    navlistli.appendChild(divarrow)

    navlistli.addEventListener('click', function(){
        divarrow.style.transform = 'rotate(225deg)'
        divarrow.style.transition = 'transform .3s'
    })
})

const allarrow = document.querySelectorAll('.arrow')
allarrow.forEach(function(){
    allarrow[0].style.display = 'none'
})


times.addEventListener('click', function(){
    header.classList.add('show')
    header.style.transition = 'all .3s'
    header.style.transitionTimingFunction = 'ease-in'
    homerise.style.display = 'none'
    times.style.display = 'none'
    timesHome.style.textAlign = 'center'
    bars.style.display = 'block'
    bars.style.paddingRight = '0px'
    navlist.forEach(function(e){
        e.classList.add('nodis')
        e.classList.add('navl')
    })
    navlistli.forEach(function(e){
        e.style.paddingLeft = '0px'
        e.style.display = 'block'
        e.style.marginRight = '0px'
    })
    navlistfa.forEach(function(e){
        e.style.paddingRight = '0px'
    })
    navlists.classList.add('navs')
    homelinkJ.classList.add('homelinkJ')
    allarrow.forEach(function(e){
        e.style.display = 'none'
    })
})
bars.addEventListener('click',function(){
    header.classList.remove('show')
    header.style.transition = 'all .3s'
    header.style.transitionTimingFunction = 'ease-out'
    homerise.style.display = 'block'
    times.style.display = 'block'
    bars.style.display = 'none'
    navlist.forEach(function(e){
        e.classList.remove('nodis')
        e.classList.remove('navl')
    })
    navlistli.forEach(function(e){
        e.style.removeProperty('padding-left')
        e.style.removeProperty('display')
        e.style.removeProperty('margin-right')
    })
    navlistfa.forEach(function(e){
        e.style.removeProperty('padding-right')
    })
    navlists.classList.remove('navs')
    homelinkJ.classList.remove('homelinkJ')
    allarrow.forEach(function(e){
        e.style.display = 'block'
        allarrow[0].style.display = 'none'
    })
})
