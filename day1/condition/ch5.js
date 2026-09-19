const prompt = require('prompt-sync')();
const anne=prompt("entrer l anne a converitr")
const norm=Number(prompt("choisie a qoui tu veus convert:\n"+
    "1- mois \n"+
    "2-jours\n"+
    "3-hours \n"+
    "4- minutes \n"+
"5-seconds \n" ) )
switch(norm){
    case(1):console.log("${12} mois ") 
    break
        case(2):console.log("365 JOURS")
        break
            case(3):console.log("8760 HOURS")
            break
                case(4):console.log("525 600 MINUTES3")
                break
                    case(5):console.log("31 536 000 seconds")
                    break
  
}