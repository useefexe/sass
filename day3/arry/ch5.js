const arr=[1,2,5,8,6,4,5,99]
let min = 999999
for (let i = 0; i < arr.length; i++) {
    if (arr[i]<min){
        min=arr[i]
    }
    
}
console.log(`lz plus petit valeur est ${min}`)