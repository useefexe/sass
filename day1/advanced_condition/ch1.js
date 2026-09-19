const prompt = require('prompt-sync')();
const revnue = prompt("entrer votre revenue en euro")
const score = prompt ("entrer votre score ")
const duree= prompt("entre votre duree de pret en anne")
if (Number(revnue) >= 30000 && Number(score)>= 700 && Number(duree)<= 10){
    console.log(' Éligible')
}else if (Number(revnue) >= 30000 && Number(score)>= 650 && Number(duree)<= 15){
console.log("Éligible avec conditions")
}else{
    console.log("Non éligible")
}
