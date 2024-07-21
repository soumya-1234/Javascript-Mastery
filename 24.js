function createPrivatevariable(){
    let count= 0;
    function increment(){
        ++count;
    }
    return {
        setincrement: increment(),
        getIncrement: console.log(count)
    }
}

let count = createPrivatevariable();

console.log(count.getIncrement);
console.log(count)
console.log(count)
console.log(count.getIncrement);