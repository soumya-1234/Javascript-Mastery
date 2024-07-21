let carobj={
    name: "Toy",
    make: "xyz",
    year: 2022
}

carobj.startEngine=()=>{
    console.log("Start Engine");
}
carobj.endEngine=function(){
    console.log("end engine")
}
carobj.span=30;
console.log(carobj);

console.log(carobj.startEngine)

console.log(carobj.endEngine)