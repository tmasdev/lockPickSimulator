
function convertVHToPX(vh) {
	return vh*document.documentElement.clientHeight/100;
}
function pickUp(item){
    if(item=='shortHook'){
        itemHeld = item
        document.getElementById("shortHook").style.position = "absolute";
    } else {
        console.log("not shortHook");
    }
}
function pickUp(item){
    if(item=='shortHook'){
        itemHeld = item
        document.getElementById("shortHook").style.position = "absolute";
    } else {
        console.log("not shortHook");
    }
}
var itemHeld = null;
var cursorPosX = -1;
var cursorPosY = -1;
console.log(itemHeld);
document.onmousemove = function(event) {
    cursorPosX = event.pageX;
    cursorPosY = event.pageY;
}
setInterval(pointerCheck, 50);
function pointerCheck() {
    if (itemHeld != null) {
        document.getElementById(itemHeld).style.top = (cursorPosY - convertVHToPX(3.5)) + "px";
        document.getElementById(itemHeld).style.left = (cursorPosX - convertVHToPX(56.5)) + "px";
    } else {
        // console.log(itemHeld);
    } 
    console.log('Cursor at: '+cursorPosX+', '+cursorPosY);
}