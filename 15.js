let arr= [10,20,34,78,55];

function findevennumberarr(arr){
    return arr.filter(num=>num%2===0);
}

console.log(findevennumberarr(arr))