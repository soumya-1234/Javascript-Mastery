function removeoccurrencevalue(arr,target){
    return arr.filter(item=> item != target)
}

let arr=[10,20,10,10,10]
let target = [10]

console.log(removeoccurrencevalue(arr,target))