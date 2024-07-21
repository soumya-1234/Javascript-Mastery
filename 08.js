let array= [10,20,30,40,50]

let sumarray =(array)=>{
    let sum=0
    for(let i=0;i<array.length;i++){
        sum+=array[i];
    }
    return sum;
}

console.log(sumarray(array))