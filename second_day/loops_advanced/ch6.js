const prompt = require('prompt-sync')();
let  nbr=Number(prompt("enter le nombre"))
for (let i = 1; i < nbr+1;i++) {
   if (nbr % i===0){
    console.log(i)
   }
    
}