function Random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
class circle {
    constructor(height, width, x, y) {
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
const minposx = 5
const maxposx = 90
const minposy = 5
const maxposy = 200
const style = "style";

function generateCircles() {
    //Parsing object properties to element
    //var circel1 = new circle(Random(mins, maxs), Random(mins,maxs), Random(minpos, maxpos), Random(minpos,maxpos))
    function setAttributes(el, attrs) {

        for (var key in attrs) {
            el.setAttribute(key, attrs[key]);
            console.log(el)
        }

        /*for (let i = 0; i < 8; i++) {
            node.setAttribute(style, Object.keys(acircle)[0] + ": " + acircle["border-radius"]) + ";";
            console.log(node)*/
    }



    for (let i = 0; i < 15; i++) {
        let r = Random(mins, maxs)
        const acircle = {
            "height": r + "px",
            "width": r + "px",
            "top": Random(minposy, maxposy) + "%",
            "left": Random(minposx, maxposx) + "%",
        }
        var crtDiv = document.createElement('div')
        setAttributes(crtDiv, { "class": "circle", "style": Object.keys(acircle)[0] + ":" + Object.values(acircle)[0] + ";" + Object.keys(acircle)[1] + ":" + Object.values(acircle)[1] + ";" + Object.keys(acircle)[2] + ":" + Object.values(acircle)[2] + ";" + Object.keys(acircle)[3] + ":" + Object.values(acircle)[3] + ";" })

        document.body.appendChild(crtDiv);
        //console.log(crtDiv)
    }

}
document.addEventListener('load', generateCircles())