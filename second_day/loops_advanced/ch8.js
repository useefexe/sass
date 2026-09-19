let arr = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const prompt = require('prompt-sync')();
let stop=false
const nbr = Number(prompt("enter le nombre"))
while(stop===false){
    if(arr.length===1){
        arr[0]===nbr?console.log(nbr):console.log("any element matched in array")
        stop=true
         break
    }
    let tab1=arr.slice(0,Math.ceil(arr.length/2))
    let tab2=arr.slice(Math.ceil(arr.length/2))
    if(tab1.at(-1)>=nbr){
        if(tab1.at(-1)===nbr){
         console.log(tab1.at(-1))
         stop=true
        }else{
            arr=tab1
        }
    }else{
        arr=tab2
    }
}