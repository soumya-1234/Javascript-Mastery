function getCurrenttime(){
    let time =new Date();
    let actime= time.toDateString();
    return actime
}

console.log(getCurrenttime());