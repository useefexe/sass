const prompt = require('prompt-sync')();
let base=-1
let exxposant =-1
while(base<0 ){
    base=Number(prompt("entrer les un base positif "))

}
while( exxposant<0 ){
     exxposant=Number(prompt("entrer les un exposant positif "))

}
console.log(base**exxposant)