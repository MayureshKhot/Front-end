var istatus = document.querySelector("h5");

var add = document.querySelector("#add");
var check=0;

add.addEventListener("click", function(){
    
    if(check==0){
        check =  1;
        istatus.innerHTML="Friends";
        istatus.style.color = "green";
        add.innerHTML="remove";
    }else{
        check=0;
        istatus.innerHTML="Stranger";
        istatus.style.color="red";
        add.innerHTML="Add Friend";
    }
    
})

