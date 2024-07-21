let fibonacciofnumber=((n)=>{
    if(n<=1){
        return n;
    }
    else{
        return fibonacciofnumber(n-1)+fibonacciofnumber(n-2)
    }
})


console.log(fibonacciofnumber(5));

// fibonacciofnumber(5)  - > fibonacciofnumber(4) + fibonacciofnumber(3) -> 3+2=5
// fibonacciofnumber(4) -> fibonacciofnumber(3) + fibonacciofnumber(2) -> 1+ 1+0=3
// fibonacciofnumber(3) -> fibonacciofnumber(2) + fibonacciofnumber(1)-> 1+1=2
// fibonacciofnumber(2) -> fibonacciofnumber(1) + fibonacciofnumber(0) ->1+0=1
// fibonacciofnumber(1) -> return 1
// fibonacciofnumber(0) -> return 0