function KushalisAsync(){

    let p = new Promise(function(resolve){

        setTimeout(function(){
            resolve("Kushal is async")
        },1000)

    });
    return p;
}


async function kushal(){

    let value = await KushalisAsync();
    console.log(value);
}

kushal();