window.onload=function(){
    var start_box=document.getElementById("start");
    start_box.addEventListener("mouseover",startGame);
    start_box.addEventListener("click",gameReset);
    var end_box=document.getElementById("end");
    var boundaries=document.getElementsByClassName("boundary");
    var header_state=document.getElementById("status");
    var score_text=document.getElementsByClassName("example")[0];
    start_box.addEventListener("click",gameReset)
    var score= 0;
    
function startGame(){
    for(let j=0;j<boundaries.length-1;j++){
        boundaries[j].style.borderColor="black";}
    for (let i =0;i<boundaries.length-1;i++){
        boundaries[i].addEventListener("mouseover",gameLost)
        }
    header_state.innerHTML="Game Started, try to win!!";
    end_box.addEventListener("mouseover",gameWon);
}

function gameLost(){
   for(let j=0;j<boundaries.length-1;j++){
    boundaries[j].style.borderColor="red";
   }
   header_state.innerHTML="You lost, Try Harder";
   end_box.removeEventListener("mouseover",gameWon);
   score-=10;
   score_text.innerHTML=score;
   for (let i =0;i<boundaries.length-1;i++){
    boundaries[i].removeEventListener("mouseover",gameLost)
    }
    end_box.removeEventListener("mouseover",gameWon);

}
function gameWon (){
    header_state.innerHTML="You Win, Try Faster!!";
    for(let j=0;j<boundaries.length-1;j++){
        boundaries[j].style.borderColor="black";
       }
       score+=5;
    score_text.innerHTML=score;
    end_box.removeEventListener("mouseover",gameWon);
    for (let i =0;i<boundaries.length-1;i++){
        boundaries[i].removeEventListener("mouseover",gameLost)
        }
    
}

function gameReset(){
    score=0
    score_text.innerHTML=score;
    for(let j=0;j<boundaries.length-1;j++){
        boundaries[j].style.borderColor="black";
       }
    header_state.innerHTML="Game is Reset!!"
    for (let i =0;i<boundaries.length;i++){
        boundaries[i].addEventListener("mouseover",gameLost)
        }
    end_box.addEventListener("mouseover",gameWon)
}
}
