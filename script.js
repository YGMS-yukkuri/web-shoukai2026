const openbtn = document.getElementById('open')
const side = document.querySelector('.side')
const main = document.querySelector('main')

openbtn.addEventListener('click',()=>{
    side.classList.toggle('hide')
    if(openbtn.textContent == ">"){
        openbtn.textContent = "<"
    }else{
        openbtn.textContent = ">"
    }
})

const sidebtn = document.getElementById('sidebtn')
const links = document.querySelector('.links')

sidebtn.addEventListener('click',()=>{
    links.classList.toggle('hide')
})
