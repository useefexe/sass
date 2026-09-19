const prompt = require('prompt-sync')();
const nbr = Number(prompt("enter le nombre des element"))
const arr=[]
for (let i = 0; i < nbr; i++) {
    let element =Number( prompt("enter un element element" + " "+i + " "  ))
    arr.push(element)
    
}
console.log("les nombre paire dans arry est :")
for (let i = 0; i < arr.length; i++) {
    if(arr[i]%2===0){
     console.log( arr[i])
   }
}
