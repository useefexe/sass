const prompt = require('prompt-sync')();
const alph=prompt("saiser une lettre ")
if (alph.charCodeAt(0)>=65 && alph.charCodeAt(0)<=90){
    console.log("lettre majuscule")
}else{
    console.log("minuscule")
}