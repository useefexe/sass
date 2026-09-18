let arr = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const prompt = require('prompt-sync')();

const nbr = prompt("enter le nombre")
let breakk = false
while (!breakk) {
    let mainarr = arr.sort()
    if (mainarr.length===1){
        if(mainarr[0]===nbr){
           console.log(mainarr[0]) 
           breakk=true
        }else{
            console.log(`any element in arry match ${nbr}`)
        }
    }
    while (!breakk ) {
        let arr1 = arr.slice(0, Math.floor(arr.length / 2))
        let arr2 = arr.slice(Math.floor(arr.length/ 2))
        if (arr1[-1] >= nbr) {
            for (let i = 0; i < arr1.length - 1; i++) {
                if (arr1[i] === nbr) {
                    console.log(i)
                    breakk = true
                }


            } if (!breakk) {
                console.log(`any element in arry match ${nbr}`)
            }
        } else {
            mainarr = arr2
        }
    }

}
