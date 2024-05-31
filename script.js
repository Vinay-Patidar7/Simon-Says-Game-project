let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let h2=document.querySelector("h3");
let highestscore=0;
document.addEventListener("keypress",function(){
    if(started == false){
        started=true;
        levelup();
    }
});
function gameflash(btn){
btn.classList.add("gameflash"); 
setTimeout(function() { 
    btn.classList.remove("gameflash")  
}, 200);   
}

function userflash(btn){
    btn.classList.add("userflash"); 
    setTimeout(function() { 
        btn.classList.remove("userflash")  
    }, 200);   
    }

function levelup(){
    userseq=[];
    level++ ;
    h2.innerText=`Level ${level}`;
    let randomidx=Math.floor(Math.random()*3);
     let randomcol=btns[randomidx];
     let randombtn=document.querySelector(`.${randomcol}`);
     gameseq.push(randomcol);
    gameflash(randombtn);
}
function check(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
        }
    else{
        if(highestscore<(level)) highestscore=level;
        h2.innerHTML=`Game Over! <u>Your Score is <b> ${level} </b></u> <br> <b>Highest Score is ${highestscore}</b> <br><i>Press any key to start.</i>`;
        reset();
    }
}
function btnpress(){
 let btn=this;
 userflash(btn); 
 usercol=btn.getAttribute("id");
 userseq.push(usercol);
 check(userseq.length-1);
}

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn)
    {
        btn.addEventListener("click",btnpress);
    }

function bodyflash(){
    let body=document.querySelector("body");
        body.classList.add("bodyflash"); 
        setTimeout(function() { 
            body.classList.remove("bodyflash")  
        }, 150);   
        }
    
function reset(){
bodyflash();
    started =false;
    userseq=[];
    gameseq=[];
    level=0;
}