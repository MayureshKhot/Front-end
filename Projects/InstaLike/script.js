var con = document.querySelector("#container");
var icon = document.querySelector("i");

con.addEventListener("dblclick", function(){
    icon.style.transform = 'translate(-50%, -50%)scale(1)';
    icon.style.opacity = 0.8;
    
    setTimeout(function(){
        icon.style.opacity = 0;
    }, 1000);

    setTimeout(function(){
        icon.style.transform = 'translate(-50%, -50%)scale(0)';
    }, 2000);
})



//setTimeOut is a defined function of our browser. It simply delays the 
// the working or code. syntax: setTimeout(function(){

// },2000);


