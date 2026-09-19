const prompt = require('prompt-sync')();
const nbr = Number(prompt("enter le nombre des element"))
const arr=[]
for (let i = 0; i < nbr; i++) {
    let element =Number( prompt("enter un element element" + " "+i + " "  ))
    arr.push(element)
    
}
const nbrrem = Number(prompt("enter l element a remplacer "))
const remplacent = Number(prompt("enter remplacment "))

for (let i = 0; i < arr.length; i++) {
    if(arr[i]===nbrrem){
      arr[i]=remplacent
   }
}
console.log(arr)