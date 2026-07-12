
function myReduce(arr, fn, startVal){
    let acc = startVal;
    for(let i = 0; i < arr.length; i++){
        //const currVal = arr[i];
        //acc = fn(acc, currVal);
        acc = fn(acc, arr[i], i, arr);
    }
    return acc;
}

function sum(acc, item){
    return acc + item;
}

const numbers = [1,2,3,4];
const result = myReduce(numbers, sum, 0);
console.log(result);
