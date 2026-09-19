const prompt = require('prompt-sync')();
const count=prompt("entrer le nombre d element ")
let arr =[]
let some=0
for (let i = 0; i < Number(count) ; i++) {
    let x = Number(prompt("entrer le nombre"))
    arr.push(x)



}
console.log(arr.sort())