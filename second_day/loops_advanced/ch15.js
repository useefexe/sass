const prompt = require('prompt-sync')();

let n = parseInt(prompt("Entrez un entier positif pour la factorielle :"));
let frc = 1;
for (let i = 1; i <= n; i++) {

    frc *= i; 
}