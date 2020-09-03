const calculator = {
    add: (...args) => {
        return args.reduce((a,b) => a + b)
    },
    sub: (...args) => {
        return args.reduce((a,b) => a - b)
    }
}

module.exports = calculator