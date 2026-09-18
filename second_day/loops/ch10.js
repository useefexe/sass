const prompt = require('prompt-sync')();
let  nbr=Number(prompt("enter le nombre"))
let somme=0
for (let i = 0; i <= nbr; i++) {
    
    somme+=i
}
console.log(somme)