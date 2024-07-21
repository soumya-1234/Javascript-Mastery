let factofnum =(num)=>{
    if(num ===0 || num ===1){
        return num;
    }
    else{
        let fact=1;
        for(let i=1;i<=num;i++){
            fact*=i;
        }
        return fact;
    }
}

console.log(factofnum(6));