let trajectory = {x: 1, y: 1}
let velocity = 10;
var logo = document.getElementById("dvd");
let windowWidth = window.innerWidth;
let windowheight = window.innerHeight; 

(function initialize(){
    logo.style.top = `${Math.floor(Math.random()*(windowheight - logo.offsetHeight))}px`;
    logo.style.right = `${Math.floor(Math.random()*(windowWidth - logo.offsetWidth))}px`;
})();

function move(){
    let position = {
        x: removePX(logo.style.right),
        y: removePX(logo.style.top)
    }
    checkCorner(position.x, position.y)
    logo.style.top = `${position.y + trajectory.y}px`;
    logo.style.right = `${position.x + trajectory.x}px`;
}

function removePX(string){
    return parseInt(string.substring(0, string.indexOf("px")));
}

function checkCorner(x, y){
    console.log(x);
    if ( x >= windowWidth - logo.offsetWidth ||  x <= 0){
        trajectory.x *= -1;
    }
    if (y >= windowheight - logo.offsetHeight || y <= 0){
        trajectory.y *= -1;
    }
}

setInterval(move, velocity);