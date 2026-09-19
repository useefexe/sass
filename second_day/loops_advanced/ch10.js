
const prompt = require('prompt-sync')();
let  nbr=Number(prompt("enter le nombre"))
let result=""
for (let i = 0; i < nbr; i++) {
    result+=`${Math.floor(Math.random() * 9)}`
    
}
console.log(result)