var buttonP1=document.querySelector("#p1");
var buttonP2=document.querySelector("#p2");
var resetbutton=document.querySelector("#reset");
var displayP1=document.querySelector("#displayP1");
var displayP2=document.querySelector("#displayP2");
var numInput=document.querySelector("input");
var winningScoreDisplay=document.querySelector("p span");
var scoreP1=0;
var scoreP2=0;
var gameover=false;
var winningScore=5;

buttonP1.addEventListener("click", function(){
   if(!gameover){
   scoreP1++;
   if(scoreP1===winningScore){
   	displayP1.classList.add("winner");
   	gameover=true;
   }
   displayP1.textContent=scoreP1;
   }
});

buttonP2.addEventListener("click", function(){
   if(!gameover){
   scoreP2++;
   if(scoreP2===winningScore){
   	displayP2.classList.add("winner");
   	gameover=true;
   }
   displayP2.textContent=scoreP2;
   }
});

resetbutton.addEventListener("click", function(){
	reset();
});

function reset(){
    displayP1.textContent=0;
	displayP2.textContent=0;
	displayP1.classList.remove("winner");
	displayP2.classList.remove("winner");
	scoreP1=0;
	scoreP2=0;
	gameover=false;
    }

numInput.addEventListener("change",function(){
   winningScoreDisplay.textContent=this.value;
   winningScore=Number(this.value);
   reset();
});