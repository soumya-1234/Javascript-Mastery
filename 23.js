function setcounter(){
    let count =0;
    return function(){
        return ++count;
    }
}

let counter =setcounter()
console.log(counter());
console.log(counter());
console.log(counter());