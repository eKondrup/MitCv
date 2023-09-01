const main = document.querySelector("#main");
const career = document.querySelector("#career")
const about = document.querySelector("#about")
const slider = document.querySelector("slider")
const left = document.querySelector("left");
const right = document.querySelector("right");
const allSlides = document.querySelectorAll("main")
const slideSize = "33";
var counter = 1

slider.style.transform ="translateX(-"+ slideSize+"%)";


right.addEventListener("click", ()=> {
    alert("right")
    if (counter >= allSlides.length -1){
        return;
    }
    counter++
    slider.style.transform ="translateX("+(-slideSize * counter)+"%)"
})

left.addEventListener("click", ()=> {
    alert("left")
    if (counter >= allSlides.length + 1){
        return;
    }
    counter++
    slider.style.transform ="translateX("+(slideSize * counter)+"%)"
})