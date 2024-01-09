const problemløsning_val = "68%"
const python_val = "30%"
const javascript_val = "25%"
const linux_val = "35%"
console.log("skills.js running")

//skills meter
var problemløsning = document.querySelector('#problemløsning')
var python = document.querySelector('#python')
var javascript = document.querySelector('#javascript')
var linux = document.querySelector('#linux')

//skills value
var sproblemløsning = document.querySelector('#sproblemløsning');
var spython = document.querySelector('#spython')
var sjavascript = document.querySelector('#sjavascript')
var slinux = document.querySelector('#slinux')

window.addEventListener('load', ()=> {
console.log("eventlistener running")
problemløsning.style.width  = problemløsning_val
sproblemløsning.innerHTML = problemløsning_val
python.style.width = python_val
spython.innerHTML = python_val
javascript.style.width = javascript_val
sjavascript.innerHTML = javascript_val
linux.style.width = linux_val
slinux.innerHTML = linux_val

})
