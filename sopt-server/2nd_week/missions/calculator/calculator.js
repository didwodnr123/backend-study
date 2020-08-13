// module.exports = {
//     add: (a, b) => {
//         return a + b; 
//     },
//     sub: (a, b) => {
//         return a - b;
//     },
//     mul: (a, b) => {
//         return a * b;
//     },
//     div: (a , b) => {
//         if(b === 0) return
//         return a/b;
//     }
// }

let calculator = {
    add: (...args) => {
        return args.reduce((a, b) => {
            return a + b;
        })
    },
    sub: (...args) => {
        return args.reduce((a, b) => {
            return a - b;
        })
    },
    mul: (...args) => {
        return args.reduce((a, b) => {
            return a * b;
        })
    },
    div: (...args) => {
        return args.reduce((a, b) => {
            return a / b;
        })
    }
}

module.exports = calculator;