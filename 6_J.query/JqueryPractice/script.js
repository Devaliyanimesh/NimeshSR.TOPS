function but(){
    let fname=document.getElementById("fname").value;
let email=document.getElementById("email").value;

    if(fname==""||fname==null){
        document.getElementById("msg1").innerHTML="Enter First Name";
        return false
    }
    else if(email==""||email==null){
        document.getElementById("msg2").innerHTML="Enter Email"

    }
    else{
        document.getElementById("msg1").innerHTML="";
        document.getElementById("msg2").innerHTML=""
    }
}

function key(blnk,msg){

    let reg=/^[a-zA-Z]*$/
    if(!(reg.test(blnk.value))){
        document.getElementById(msg).innerHTML="Enter  Proper Name"     
    }
    else if(blnk.value.length<2){
        document.getElementById(msg).innerHTML="Enter 2 charcter"   


    }
    else{
        document.getElementById(msg).innerHTML=""   
    }

}
function lol(){
    let emaill=document.getElementById("email").value;

   let regx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(regx.test(emaill))
    {
        document.getElementById("msg2").innerHTML=""
    }
    else{
        document.getElementById("msg2").innerHTML="Enter ProperEmial "

    }
}