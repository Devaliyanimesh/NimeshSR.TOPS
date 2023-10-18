let icon=document.querySelector(".fa-moon")
icon.addEventListener("click",function(){

    document.body.classList.toggle("jk");
    if(  document.body.classList.contains("jk")==true)
    {
        icon.classList.add("fa-sun")
        icon.classList.remove("fa-moon")
    }
    else{

        icon.classList.add("fa-moon")
        icon.classList.remove("fa-sun")
    }
})



window.addEventListener("scroll", function () {
    let header = document.querySelector(".header")
    let current = window.scrollY;
    if (current > 0) {
        header.classList.add("header-fix")
    }
    else
    {
        header.classList.remove("header-fix")
        }
})
   
let tooglebtn = document.querySelector(".fa-bars")
let lol = document.querySelector(".nav")
 
tooglebtn.addEventListener("click", function () {
    lol.classList.toggle("nimesh")
    if (lol.classList.contains("nimesh") == true)
    {
        tooglebtn.classList.add("fa-close")
        tooglebtn.classList.remove("fa-bars")
    }
    else {
        tooglebtn.classList.remove("fa-close")
        tooglebtn.classList.add("fa-bars")
    }
    
})


let page = document.querySelector(".fa-angle-down")
let tar = document.querySelector(".minii")

page.addEventListener("click", function () {
    tar.classList.toggle("nik")
    if (tar.classList.contains("nik") == true)
    {
        page.classList.remove("fa-fa-angle-down")
        page.classList.add("fa-remove")
    }
    else {
         page.classList.add("fa-fa-angle-down")
        page.classList.remove("fa-remove")
    }
})

let clickk = document.querySelector(".fa-magnifying-glass")
let bar=document.querySelector(".sarch")

clickk.addEventListener("click", function () {
    
    bar.classList.toggle("kingg")
})
