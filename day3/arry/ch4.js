const arr=[1,2,5,8,6,4,5,99]
let max = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i]>max){
        max=arr[i]
    }
    
}
console.log(`lz plus grand valeur est ${max}`)