const prompt = require('prompt-sync')();
const a = Number(prompt("enter a (multiple de x²)"))
const b= Number(prompt("enter b(multiple de x)"))
const c= Number(prompt("enter c"))
let delta =b**2-4*a*c
if (delta=>0){
    console.log("lequatoon admis deus solution defferente")
}else if (delta===0){
    console.log("equation admis une seulle solution ")
}
else{
    console.log("lequation n admis accun solution reel")
} 
