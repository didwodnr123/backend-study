const calculator = {
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
