
const prompt = require('prompt-sync')();
const nbr = Number(prompt("enter le nombre des element"))

const arr=[]
for (let i = 0; i < nbr; i++) {
    let element =Number( prompt("enter element" + " "+i + " " ))
    arr.push(element)
    
}

for (let i = 0; i < arr.length; i++) {
   
    for (let j = 0; j < arr.length - 1 - i; j++) { 
        if (arr[j] > arr[j + 1]) {
           
            let x = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = x;
        }
    }

       
}
console.log(arr)