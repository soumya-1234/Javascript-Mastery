let getData= (async ()=>{
    try{
        let response=await fetch("https://api.coingecko.com/api/v3/coins/bitcoin");
        let data= await response.json();
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
})

getData()