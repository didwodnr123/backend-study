// mission reivew
let isMomHappy = false;
let phone = {
    brand: 'iPhone',
    color: 'black'
}

var willGetNewPhone = new Promise((resolve, reject) => {
    if(isMomHappy){
        resolve(console.log(phone))
    } else{
        reject(new Error('mom is not happy'))
    }
})