const prompt = require('prompt-sync')();
let joursSemaine = prompt("enter le jours")
let jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
 let x=jours.indexOf(joursSemaine)
if(x!==-1){
   console.log(joursSemaine)
   for(let i=x+1;i<=jours.length-1;i++){
    console.log(jours[i])
   }

}
else{
  console.log("entrer un jours valide") 
} 