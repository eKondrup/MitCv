
const slider = document.querySelector("slider")
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const allSlides = document.querySelectorAll("slider-content")
const slideSize = 100/allSlides.length;
var counter = 0;

//slider.style.transform ="translateX(-"+ slideSize+"%)";


right.addEventListener("click", ()=> {
    //alert("right")
    if (counter >= allSlides.length -1){
        return;
    }
    counter++
    slider.style.transform ="translateX("+(-slideSize * counter)+"%)"
})

left.addEventListener("click", ()=> {
    //alert("left")
    if (counter == 0/*>= allSlides.length + 1*/){
        return;
    }
    counter--
    slider.style.transform ="translateX("+(-slideSize * counter)+"%)"
})