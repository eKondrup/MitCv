
function Random(min, max) {
    return Math.floor(Math.random()*(max - min +1)) + min;
}
class circle {
    constructor(height, width, x,y) {
        this.border_radius = "100%"
        this.background_color = "#04293A"
        this.position = "absolute"
        this.z_index = "-1"
        this.height = height;
        this.width = width
        this.x = x;
        this.y = y;
    }
}

//console.log(Object.keys(acircle)[0])
const mins = 50
const maxs = 200
const minpos = 5
const maxpos = 90
const style = "style";
function generateCircles() {
    //Parsing object properties to element
    //var circel1 = new circle(Random(mins, maxs), Random(mins,maxs), Random(minpos, maxpos), Random(minpos,maxpos))
    function setAttributes(el, attrs) {
       
        for(var key in attrs) {
          el.setAttribute(key, attrs[key]);
          console.log(el)
        }
        
        /*for (let i = 0; i < 8; i++) {
            node.setAttribute(style, Object.keys(acircle)[0] + ": " + acircle["border-radius"]) + ";";
            console.log(node)*/
      }
     
         
     
      for(let i = 0; i<10; i++){
          let r = Random(mins,maxs)
        const acircle = {
            "border-radius":"100%",
             "background-color": "#04293A",
             "position": "absolute",
             "z-index": "1",
             "height": r+"px",
             "width": r+"px",
             "opacity":"200%",
             "top":Random(minpos,maxpos)+"%",
             "left":Random(minpos,maxpos)+"%",
             "filter": "blur(30px)"
            }

      var crtDiv = document.createElement('div')
      setAttributes(crtDiv, {"style": Object.keys(acircle)[0] + ":" + Object.values(acircle)[0] +";" + Object.keys(acircle)[1] + ":" + Object.values(acircle)[1] +";" + Object.keys(acircle)[2] + ":" + Object.values(acircle)[2] +";" + Object.keys(acircle)[3] + ":" + Object.values(acircle)[3] +";" + Object.keys(acircle)[4] + ":" + Object.values(acircle)[4] +";"+ Object.keys(acircle)[5] + ":" + Object.values(acircle)[5] +";"+ Object.keys(acircle)[6] + ":" + Object.values(acircle)[6] +";"+ Object.keys(acircle)[7] + ":" + Object.values(acircle)[7] +";"+ Object.keys(acircle)[8] + ":" + Object.values(acircle)[8] +";"+ Object.keys(acircle)[9] + ":" + Object.values(acircle)[9] +";"})
      document.body.appendChild(crtDiv);
      console.log(crtDiv)
      }
      
}
document.addEventListener('load', generateCircles())