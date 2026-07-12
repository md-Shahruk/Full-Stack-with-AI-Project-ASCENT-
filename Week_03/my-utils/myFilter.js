
function myFilter(arr, fn){
    newList = [];
    for(let i = 0; i < arr.length; i++){
        //const currVal = arr[i];
        //const checkVal = fn(currVal);
        const res = fn(arr[i], i, arr);
        if(res){
            newList.push(arr[i]);
        }
    }
    return newList;
}

function evenCheck(num){
    return num % 2 === 0;
}

const numbers = [1, 2, 3, 4, 5, 6];

const checkEven = myFilter(numbers, evenCheck);
console.log(checkEven);
