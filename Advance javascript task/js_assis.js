/*
-> Want to re-use variable name so which variable declare method should i use

------------------------------------------------------------------------------------------

-> give the list which variable name not works in js
1. let a=0           true
2. let "a"=0         error
3. let 'a'=0         error
4. let `10`=0        error
5. let 1=0           error
------------------------------------------------------------------------------------------

let x = 100
var y = 100
const z = 100
const m
{
      x= 90
      y= 90
      z= 90
      console.log(x) ____90_______________ point-x1
      console.log(y) _______90____________ point-y1
      console.log(z) _________error__________ point-z1
      console.log(m) __________error_________ 
} 

console.log(x) _______100_________ point-x2
console.log(y) ______________100_____ point-y2
console.log(z) __________100_________ point-z2

what will print at x1-_____90__
what will print at y1-______90_
what will print at z1-__error_____
what will print at x2-_____100__
what will print at y2-____100___
what will print at z2-___100____
what will print at m1-___error___

------------------------------------------------------------------------------------------

-> task-2

console.log(x) ___________________ point-x2
console.log(y) ___________________ point-y2
console.log(z) ___________________ point-z2

{
      let x = 100
      var y = 100
      const z = 100
}

console.log(x) ___________________ point-x1
console.log(y) ___________________ point-y1
console.log(z) ___________________ point-z1


what will print at x1-____error___
what will print at y1-____error___
what will print at z1-____error___
what will print at x2-____error___
what will print at y2-____error___
what will print at z2-____error___

------------------------------------------------------------------------------------------

*/
