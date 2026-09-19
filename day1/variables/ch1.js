// Affichage Informations
// Écrivez un programme JavaScript qui permet d'afficher vos informations personnelles : nom, prénom, âge, sexe et adresse e-mail. Les données sont saisiesl
const prompt = require('prompt-sync')();
let name = prompt("enter your last name  ")
let lastname = prompt("enter your name ")
let age = prompt ("enter your age")
let email = prompt ("enter your EMAIL ")
let sexe = prompt(" enter your gender ")
console.log(`heelo ${name} ${lastname} your age is ${age}   email : ${email} your gender is ;${sexe}  `)