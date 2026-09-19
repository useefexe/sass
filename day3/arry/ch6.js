const prompt = require('prompt-sync')();
const nbr = Number(prompt("enter le nombre des element"))
const fqct=Number(prompt("enter le facteur"))
const arr=[]
for (let i = 0; i < nbr; i++) {
    let element =Number( prompt("enter element" + " "+i + " " ))
    arr.push(element*fqct)
    
}
console.log(arr)