const prompt = require('prompt-sync')();
const nbr=Number(prompt("enter le nombre bqse"))
const exp=Number(prompt("enter le nombre expossant"))
let result =1
for (let i = 0; i < exp; i++) {
    result *=nbr
    
}
console.log(result)