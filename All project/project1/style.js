let cli = document.querySelector(".right")
let icon = document.querySelector(".fa-bars")
let work = document.querySelector(".fix")
cli.addEventListener("click", function () {
    work.classList.toggle("fixx")
    if (work.classList.contains("fixx") == true) {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-xmark")
    }
    else {
        icon.classList.remove("fa-xmark")
        icon.classList.add("fa-bars")

    }

})
let vv = document.querySelector(".about")
vv.addEventListener("click", function () {
    work.classList.remove("fixx")
    icon.classList.remove("fa-xmark")
    icon.classList.add("fa-bars")
})
let vi = document.querySelector(".home")
vi.addEventListener("click", function () {
    work.classList.remove("fixx")
    icon.classList.remove("fa-xmark")
    icon.classList.add("fa-bars")
})
let vii = document.querySelector(".Resume")
vii.addEventListener("click", function () {
    work.classList.remove("fixx")
    icon.classList.remove("fa-xmark")
    icon.classList.add("fa-bars")
})

let countUpdate=setInterval(updateCounts,20);
let strat=320;
function updateCounts(){
    let div = document.getElementById("twoo");
    div.innerHTML=++strat;
    if(strat==521){
          clearInterval(countUpdate)
    }

}
    let count=setInterval(update,20)
    str=32;
    function update(){
        let div1=document.getElementById("onee")
        div1.innerHTML=++str;
        if(str==232)
        {
            clearInterval(count)
        }
    }
    let cou=setInterval(updat,20)
    st=1253;
    function updat(){
        let div3=document.getElementById("three")
        div3.innerHTML=++st
        if(st==1453)
        {
            clearInterval(cou)
        }
    }
    let co=setInterval(up,120)
    s=1;
    function up(){
        let div4=document.getElementById("four")
        div4.innerHTML=++s
        if(s==35){
            clearInterval(co)
        }
    }