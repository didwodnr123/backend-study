let isMomHappy = true
let phone = {
    brand: 'samsung',
    color: 'block'
}

var WillIGetNewPhone = new Promise((resolve, reject) => {
    if(isMomHappy){
        resolve(console.log(phone))
    }else{
        reject(new Error('Mom is not happy'))
    }
})