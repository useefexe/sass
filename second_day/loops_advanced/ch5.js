const prompt = require('prompt-sync')();
const nbr =Number(prompt("entrer un nombre"))
let somme=0
for (let i = 1; i < nbr+1; i++) {
    somme+=i    
}
console.log(somme)