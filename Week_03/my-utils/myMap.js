
function myMap(arr, fn){
    newList = [];

    for(let i = 0; i < arr.length; i++){
        const currentItem = arr[i];

         //const res = fn(currentItem);
         const res = fn(arr[i], i, arr);

         newList.push(res);
    }

    return newList;
   

}

function double(num, i){
    return num * 2 + i;
}

const numbers = [1,2,3,4];
const mapData = myMap(numbers, double);
console.log(mapData);
