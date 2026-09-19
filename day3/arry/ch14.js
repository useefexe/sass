const prompt = require('prompt-sync')();
const nbr = Number(prompt("enter le nombre des element"))
const arr=[]
for (let i = 0; i < nbr; i++) {
    let element =Number( prompt("enter un element element" + " "+i + " "  ))
    arr.push(element)
    
}
console.log("le moyyne  est :")
let somme=0
for (let i = 0; i < arr.length; i++) {
   somme+=arr[i]
}
console.log(somme/arr.length)
