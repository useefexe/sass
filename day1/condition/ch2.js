const prompt = require('prompt-sync')();
const ltr =prompt("entrer caracter ") 


switch(ltr){
     case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'y':
        console.log("le chaine de cartaire saisis et un vouyelle ")
        break
        default:
            console.log(" chaine de caracterre saisis n est pas vouyelle")
}