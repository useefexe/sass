const prompt = require('prompt-sync')();
const char = prompt("entrer le chaine de cqrqctaire ")
let ascii=char.charCodeAt(0)
if (ascii>=65 && ascii<=122){
    console.log(" c est un lettre ")
  if( ascii>=65 && ascii<=90){
    console.log( "majuscule")
  }else{
    console.log("minuscule")
  }
}else{
    console.log(" c est ne pas un lettre")
}