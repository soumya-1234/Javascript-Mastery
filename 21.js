let factorialofnumber=((n)=>{
    if(n===1){
        return 1;
    }
    else{
        return n*factorialofnumber(n-1);
    }
})

console.log(factorialofnumber(5));