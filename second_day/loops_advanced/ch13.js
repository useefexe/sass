const prompt = require('prompt-sync')();
let some =0
const nbr = prompt("enter le nombre")
for (let i = 1; i < 11; i++) {
   console .log(`${nbr} * ${i} = ${Number(nbr)*i}`)
    some+=nbr*i
}
console.log(`somme de produit est : ${some}`)