const prompt = require('prompt-sync')(); 
let tempurqture = prompt("entrer lq degre de tempurqtue ")
if (tempurqture<=0){
    console.log( "etat d eaux solide ")
}else if (tempurqture>=0 && tempurqture<100){
    console.log("etat d eaux lequide")
}else{
   console.log("etat d eaux gazeux ")
}