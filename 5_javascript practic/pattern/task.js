let namee="urvish"
let chek= ""

for (let index = 0; index < namee.length; index++) {
    
    if (index %2 !== 0) {
      chek +="_"
    }
    else{
       chek += namee[index]
    }
    
}
console.log(chek);