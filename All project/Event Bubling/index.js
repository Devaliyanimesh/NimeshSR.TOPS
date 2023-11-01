let timer=3;
let score=0;
var hitrn=0;

function incresescore(){
    score +=10
    document.querySelector("#scoreval").textContent=score
}
function getnewhit(){
 hitrn=Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent=hitrn
}
function makeBubble(){
var clutter=""
for(var i=1;i<=75;i++){
    var rn=Math.floor(Math.random()*10)
    clutter +=`<div class="bubble">${rn}</div>`
}
document.querySelector("#pbtm").innerHTML=clutter
}
function runTimer(){
    var timerrint=setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timervalue").textContent=timer;
        }
        else{
    clearInterval(timerrint)
    document.querySelector("#pbtm").innerHTML=`<h1>Game is over</h1>`
        }
    },1000)
    }

    document.querySelector("#pbtm")
    .addEventListener("click",function(detailss){
        var clicknum= Number(detailss.target.textContent)
        if(clicknum=== hitrn){
            incresescore();
            makeBubble()
            getnewhit()
        }
;
    })

runTimer()
makeBubble()
getnewhit()


