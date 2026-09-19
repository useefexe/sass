const prompt = require('prompt-sync')();
let x=-1
let some=0
let count=0
while(x!==0){
 x = Number(prompt("entrer le nombre"))
some+=x
count++
}
console.log(`the avg is  ${some/(count-1)}`)