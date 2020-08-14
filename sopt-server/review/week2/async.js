let asyncFunc1 = (msg) => 
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(`func1 : ${msg}`)
        }, 1000)
    })

let asyncFunc2 = (msg) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(`func2 : ${msg}`)
        }, 1000)
    })

async function asyncMain(){
    var result = await asyncFunc1('hello')
    console.log(result)
    result = await asyncFunc2('world')
    console.log(result)
}

asyncMain()