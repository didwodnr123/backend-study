let calculator = {
    add : (...args) => {
        return args.reduce( (a, b) => {return a + b} )
    }, 
    sub: (...args) => {
        return args.reduce( (a, b) => {return a - b} )
    },
    mul: (...args) => {
        return args.reduce( (a, b) => {return a * b} )
    },
    div: (...args) => {
        if(args === 0) return console.error('0 is not allowed');
        return args.reduce( (a, b) => {return a / b} )
    }
}

module.exports = calculator