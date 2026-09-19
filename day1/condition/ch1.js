const prompt = require('prompt-sync')();
let number = parseInt(prompt(" enter le nombre "))
if (number%2===0){
    console.log("paire")
}else{
    console.log("impair")
}