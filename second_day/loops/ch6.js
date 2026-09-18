const prompt = require('prompt-sync')();
const nbr=Number(prompt("enter le nombre"))
for (let i = 1; i <= nbr; i++) {
    if(i % 2===0){
        console.log(i)
    }
    
}
