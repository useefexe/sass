const prompt = require('prompt-sync')();
let  nbr=Number(prompt("enter le nombre"))

    for (let i = 1; i <nbr; ) {
        for (let j = Math.ceil(nbr/2); j >0; j--) {
            console.log(" ".repeat(j)+"*".repeat(i))
            i+=2
        }
        
    }
   