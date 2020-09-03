let isMomHappy = false;
let phone = {
    brand: 'Samsung',
    color: 'black'
}

var willIGetNewPhone = new Promise((resolve, reject) => {
    if(isMomHappy){
        resolve(console.log(phone));
    }else{
        //reject(console.error());
        reject(console.log(new Error('Mom is not happy')))
    }
})

