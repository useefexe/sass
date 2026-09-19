const prompt = require('prompt-sync')();
const nbr = Number(prompt("enter le nombre des element"))
const arr=[]
for (let i = 0; i < nbr; i++) {
    let element =Number( prompt("enter un element element" + " "+i  ))
    arr.push(element)
    
}
console.log(arr)