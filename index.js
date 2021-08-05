let seletor = document.getElementById('box')
let boxTop = 200;
let boxLeft = 200;

document.addEventListener('keydown', (event)=>{
    if(event.key === "ArrowDown"){
        boxTop += 10
        seletor.style.top = boxTop + "px"
    } else if(event.key === "ArrowUp"){
        boxTop -= 10
        seletor.style.top = boxTop + "px"
    } else if(event.key === "ArrowRight"){
        boxLeft += 10
        seletor.style.left = boxLeft + "px"
    } else if(event.key === "ArrowLeft"){
        boxLeft -= 10
        seletor.style.left = boxLeft + "px"
    }
    if(boxTop + 80 > window.innerHeight){
        boxTop = 1
        seletor.style.top = boxTop + "px" 
    } else if(boxTop < 0){
        boxTop = window.innerHeight - 100
        seletor.style.top = boxTop + "px" 

    } else if(boxLeft + 80 > window.innerWidth){
         boxLeft = 1
         seletor.style.left = boxLeft + "px"
    } else if(boxLeft < 0){
        boxLeft = window.innerWidth - 150
        seletor.style.left = boxLeft + "px"
    }
})

