var main = document.querySelector("#main");
var cursor = document.querySelector(".cursor");

main.addEventListener("mousemove", function(dets){
    //console.log(dets.x)
    // "dets" gives the details of axis where mouse has moved
    cursor.style.left = dets.x+"px";
    cursor.style.top = dets.y+"px"; 
})