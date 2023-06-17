var value = document.querySelector("#value");

var count = 0;

var btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    
    btn.addEventListener("click",function(event){

        var classes = event.currentTarget.classList;

        if(classes.contains("increase")){
            
            count++;

            value.textContent = count;
        
        }
        else if(classes.contains("decrease")){

            count--;
            
            value.textContent = count;
        }
        else{

            count = 0;
            
            value.textContent = count;
        }

        if(count > 0){

            value.style.color = "green";

        }
        else if(count < 0){

             value.style.color = "red";

        }
        else{

            value.style.color = "black"
        }
    })
})
