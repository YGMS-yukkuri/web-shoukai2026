const openbtn = document.getElementById('open')
const side = document.querySelector('.side')
const main = document.querySelector('main')

openbtn.addEventListener('click',()=>{
    side.classList.toggle('hide')
    main.classList.toggle('blur')
    if(openbtn.textContent == ">"){
        openbtn.textContent = "<"
    }else{
        openbtn.textContent = ">"
    }
})
