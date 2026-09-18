const prompt = require('prompt-sync')();
let  nbr=Number(prompt("enter le nombre"))
let fin = true
let reuslt=""
while (fin) {
    let mod = nbr%10
    nbr=Math.floor(nbr/10)
    if(nbr<1 ){
        fin=false
        
    }
    console.log(mod)
    reuslt +=mod

}
console.log(reuslt)    