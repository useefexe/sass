const prompt = require('prompt-sync')();
// on peux ajouter une while loop pour verfier si users enter chiane
const nbr = prompt("enter le nombre")
for (let i = 10; i >=1; i--) {
   console .log(`${nbr} * ${i} = ${Number(nbr)*i}`)
    
}