let isMomHappy = false;
let phone = {
    brand: 'iPhone',
    color: 'black'
};

var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            resolve(console.log(phone)); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }
    }
);