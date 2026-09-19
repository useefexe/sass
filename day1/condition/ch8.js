const prompt = require('prompt-sync')();
const nt1=prompt("entrer premire note")
const nt2=prompt("entrer deuseime not ")
const nt3=prompt("entrer troisieme note ")
const moyene = (Number(nt1)+Number(nt2)+Number(nt3))/3
if (moyene>=16){
    console.log("tres bien")
}else if (moyene>=14){
    console.log("bien")
}else if (moyene >= 10 && moyene<=12){
    console.log("pasable")
}else{
    console.log("echouee")
}