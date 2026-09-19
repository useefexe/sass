const prompt = require('prompt-sync')();
const nbr = Number(prompt("enter le nombre des element"))
const arr=[]
for (let i = 0; i < nbr; i++) {
    let element =Number( prompt("enter un element element" + " "+i + " "  ))
    arr.push(element)
    
}
const saerch = Number(prompt("enter l element qrechrcher "))
for (let i = 0; i < arr.length; i++) {
    if(i===arr.length-1){
        arr[i]===saerch?console.log("found"):console.log("not found")
        break
    }
   if(arr[i]===saerch){
    console.log("found")
    break
   }
}