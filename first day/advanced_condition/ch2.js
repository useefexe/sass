const prompt = require('prompt-sync')();
const age = prompt("entrer age de conducteur ")
const type = prompt ("entrer type de voiture \n"+
    "1 - sport \n"+
    "2 - utitaire \n"+
    "3 - familliale  " 
)
const nbr= prompt("entre le nombre des accident ")

let primebase=1000
if (age<=25){
    primebase*=1.5
} else if ( age>65){
    primebase*=1.2
}
if (type==1){
    primebase *=2 
}else if(type==2){
   primebase*=1.2
}else if(type==3){
    primebase*=1.1
}
if (nbr>1){
    primebase+=primebase*30/100
}
console.log("prime total est",+primebase)