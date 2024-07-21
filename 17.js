function largestelement(arr){
    return arr.reduce((max,current)=>{
        return current>max ? current : max;
    })
}

let arr=[1,2,3,4,6];

console.log(largestelement(arr))