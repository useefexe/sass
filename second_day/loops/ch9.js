const prompt = require('prompt-sync')();
let  nbr=Number(prompt("enter le nombre"))
let fin = true
let count =0
while (fin) {
    let mod = nbr%10
    nbr=Math.floor(nbr/10)
    if(nbr<1 ){
        fin=false
        
    }
  count ++

}
console.log(`nombre de chifree = ${count}`)    