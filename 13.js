
function prom(complete)
{
    return new Promise(function(resolve,reject){
        console.log("fetchin data please wait")
        setTimeout( ()=>{
            if(complete)
        {
            resolve("im successfull");
        }
        else{
            reject("im failed");
        }
        },5000)
    });
}


let onfaill=(error)=>{
console.log(error)
}

prom(true).then((result)=>{console.log(result)}).catch(onfaill);