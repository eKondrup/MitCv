const helmuth = document.querySelectorAll("#helmuth")
const helmuth_description = "Mit arbejde på helmuth bestod af bla bla"
const tian_fu = document.querySelectorAll("#tian_fu")
const tian_fu_description = "På Tian Fu arbejdede jeg som tjener og afrydder. Jeg havde til opgave at; seate gæster, tage imod bestillinger og servere mad og drikkevarer"
const dbu = document.querySelectorAll("#dbu")
const dbu_description = "Jeg har været træner på fodboldskolen i VB de sidste fire år. Her har jeg skulle koordinere og udføre træninger samt tilpasse mig børnenes behov. Jeg har trænet årgange fra u9 - u15"
const vb = document.querySelectorAll("#vb")
const vb_description = "I VB har jeg selv spillet fodbold og nu træner jeg u15 drenge. Foruden u15 drenge har jeg trænet u4-u6 mix i flere sæsoner"
const havemand = document.querySelectorAll("#havemand")
const havemand_description = "Mit første job var havemand som 13-årig, i dette job passede jeg haver, klippede hække og samlede endda møbler for folk i lokalområdet"
const blindes_jul = document.querySelectorAll("#blindes_jul")
const blindes_jul_description = "I en årrække solgte jeg Blindes Jul bladet"
const main = document.querySelector("main")
/*
function crtBox(txt) {
    function getmouse(e) {
        x = e.pageX;
        y = e.pageY;
        return x +"px",y + "px"
    
    }addEventListener("mousemove", getmouse, false);
    

    txt = document.createElement("div")
    console.log(txt)
    txt.style.position = "static";
    txt.style.z_index ="3";
    txt.style. height="50px"
    txt.style.width ="50px"
    txt.style.margin = getmouse() + "0 0";
    //txt.style.left = getmousex() + "px";
    //txt.style.top = getmousey() + "px";
    document.body.appendChild(txt)
}*/






var txt = document.createElement("div")
var connectLine = document.createElementNS('http://www.w3.org/2000/svg',"svg")
var line = document.createElementNS('http://www.w3.org/2000/svg',"line")
function crtBox(description) {
    //var description

    //var txt = document.createElement("test")
    

    txt.className ="floatBox"
    txt.style.width ="300px";
    //txt.id = id
    document.body.appendChild(txt);
    txt.innerHTML = description
    console.log(txt)
    //console.log(txt.style.getPropertyValue())
    
    
    /*
    console.log('Before appending:', txt);
    document.body.appendChild(txt);
    console.log('After appending:', txt);
    console.log('Is div in body:', document.body.contains(txt));*/
    
    connectLine.classList.add("connect-line-container")
    /*connectLine.setAttribute('height', '500')
    connectLine.setAttribute('width','500')*/
    connectLine.setAttribute('overflow','visible')
    console.log(connectLine)
    line.classList.add("connect-line")

    
    connectLine.appendChild(line)
}

function getmouse(e) {
    console.log("getmouse is running")
    mouseX = e.pageX;
    mouseY = e.pageY;
    txt.style.top = mouseY + -100 + "px";
    txt.style.left = mouseX + 50 +"px";
    var elemHeight = window.getComputedStyle(txt).height;
    
  /* // line.setAttribute("x1", mouseX )
   // line.setAttribute("y1", mouseY)
   line.setAttribute("x2", mouseX+ 50 ) 
    line.setAttribute("y2", mouseY + -100 + parseFloat(elemHeight));*/
   line.setAttribute("x1", mouseX)
   line.setAttribute("y1", mouseY)
    /*line.setAttribute("x2",  53 ) 
    line.setAttribute("y2", -100 + parseFloat(elemHeight)*.98);*/
    line.setAttribute("x2",  mouseX + 50) 
    line.setAttribute("y2", mouseY -100 + parseFloat(elemHeight)*.98);
    line.setAttribute('stroke', 'black');
line.setAttribute('stroke-width', '3');
document.body.appendChild(connectLine);
console.log(mouseX, mouseY, mouseX + 50, mouseY - 100 + parseFloat(elemHeight));
console.log(line);
connectLine.appendChild(line)

    
    //console.log(elemHeight)
    //connectLine.style.top = "calc("  + mouseY + "px - 100px + " + parseFloat(elemHeight) +"px)";
    /*
    connectLine.style.top = mouseY +"px";
    connectLine.style.left = mouseX +"px"
    connectLine.style.rotate = "-50deg"
    */
    /*connectLine.style.top = mouseY + "px";
    connectLine.style.left = mouseX +"px"*/
    connectLine.style.top = 0 + "px";
    connectLine.style.left = 0 +"px"
}

function delBox() {
    console.log("delBox is running")
    document.body.removeChild(txt)
    document.body.removeChild(connectLine)

}


helmuth.forEach( (i) =>{
    i.addEventListener('mouseenter', ()=> {crtBox(helmuth_description)})
    i.addEventListener('mousemove', getmouse, false)
    i.addEventListener('mouseleave', delBox, false)
})


tian_fu.forEach( (i) =>{
    i.addEventListener('mouseenter', ()=> {crtBox(tian_fu_description)})
    i.addEventListener('mousemove', getmouse, false)
    i.addEventListener('mouseleave', delBox, false)
})

dbu.forEach( (i) =>{
    i.addEventListener('mouseenter', ()=> {crtBox(dbu_description)})
    i.addEventListener('mousemove', getmouse, false)
    i.addEventListener('mouseleave', delBox, false)
})

vb.forEach( (i) =>{
    i.addEventListener('mouseenter', ()=> {crtBox(vb_description)})
    i.addEventListener('mousemove', getmouse, false)
    i.addEventListener('mouseleave', delBox, false)
})

havemand.forEach( (i) =>{
    i.addEventListener('mouseenter', ()=> {crtBox(havemand_description)})
    i.addEventListener('mousemove', getmouse, false)
    i.addEventListener('mouseleave', delBox, false)
})

blindes_jul.forEach( (i) =>{
    i.addEventListener('mouseenter', ()=> {crtBox(blindes_jul_description)})
    i.addEventListener('mousemove', getmouse, false)
    i.addEventListener('mouseleave', delBox, false)
})