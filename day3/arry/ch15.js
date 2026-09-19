const prompt = require('prompt-sync')();
const nbr = Number(prompt("enter le nombre des element"))
const arr=[]
for (let i = 0; i < nbr; i++) {
    let element =Number( prompt("enter un element element" + " "+i + " "  ))
    arr.push(element)
    
}

const nbr2 = Number(prompt("enter le nombre des element de desieme tableau"))
const arr2=[]
for (let i = 0; i < nbr2; i++) {
    let element =Number( prompt("enter un element element" + " "+i + " "  ))
    arr2.push(element)
    
}
console.log("arry fusionee :")
for (let i = 0; i < nbr2; i++) {
    arr.push(arr2[i])
    
}
console.log(arr)
