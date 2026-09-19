const prompt = require('prompt-sync')();
const nbr1=Number(prompt("saiser premier nombre"))
 const nbr2=Number(prompt("saiser deusime nombre"))
 if (nbr1===nbr2){
    console.log((nbr1+nbr2)*3)
 }else{
    console.log(nbr1+nbr2)
 }