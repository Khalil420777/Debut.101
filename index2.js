function returnAnswer(){
    var wcAnswer = document.querySelector('input[name="wc"]:checked');
    if(wcAnswer.value==="uruguay"){
       document.getElementById("wcanswer").textContent="GOOOOOOOAAAALLLLLL!!! ";
    }
    else{
        document.getElementById("wcanswer").textContent="nope you missed,try again";
    }



    var uclAnswer = document.querySelector('input[name="ucl"]:checked');
    if(uclAnswer.value==="5"){
       document.getElementById("uclanswer").textContent="GOOOOOOOAAAALLLLLL!!!";
    }
    else{
        
        document.getElementById("uclanswer").textContent="nope you missed,try again";
    }


    var dorAnswer = document.querySelector('input[name="dor"]:checked');
    if(dorAnswer.value==="ronaldinho"){
       document.getElementById("doranswer").textContent="GOOOOOOOAAAALLLLLL!!!";
    }
    else{
        document.getElementById("doranswer").textContent="nope you missed,try again";
    }


    var plyrAnswer = document.querySelector('input[name="plyr"]:checked');
    if(plyrAnswer.value==="lionel messi"){
       document.getElementById("plyranswer").textContent="GOOOOOOOAAAALLLLLL!!!";
    }
    else{
        document.getElementById("plyranswer").textContent="nope you missed,try again";
    }


    var yearAnswer = document.querySelector('input[name="year"]:checked');
    if(yearAnswer.value==="2004"){
       document.getElementById("yearanswer").textContent="GOOOOOOOAAAALLLLLL!!!";
    }
    else{
        document.getElementById("yearanswer").textContent="nope you missed,try again";
    }


}




            
            
            
           
       

            
    
            
        
