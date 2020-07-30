//first lecture
console.log('Im working. Im JS. Im beautiful. Im worth it')

let a = 225
b = a - 5
console.log(a, b)

//String
const str = "Hello World!"
console.log(str)

//Boolean
const isMan = true

//Number
const age = 555

//Float
const weight = 55.5

//Array
//lower camel case
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
console.log(daysOfWeek)

//Object
//구조체와 비슷한 개념인듯하다.
const jaeukInfo = {
    name: "Jaeuk",
    age: 25,
    gender: "Male",
    isHandsome: true,
    favoriteFood: [
        {
            name: "Kimchi",
            fatty: false
        },
        {
            name: "Boolgogi",
            fatty: true
        }
    ]
}
console.log(jaeukInfo)
// 데이터를 정렬하는 방법, 1.Array, 2.Object

//Second Lecture
function sayHello(potato){
    console.log('Hello!', potato)
}

function sayHello2(potato){
    console.log(`Hello! ${potato}`)
}

sayHello("Jaeuk")
console.log("Hi!")
sayHello2("Arooming")

function sayHello3(potato){
    return `Hello! ${potato}`
}

const greetJaeuk = sayHello3("Jaeuk")
console.log(greetJaeuk)

const calculator = {
    add: function(a, b){
        return a+b
    },
    sub: function(a, b){
        return a-b
    },
    mul: function(a, b){
        return a*b
    },
    div: function(a, b){
        return a/b
    }
}

const add = calculator.add(5, 5)
const sub = calculator.sub(5, 5)
const mul = calculator.mul(5, 5)
const div = calculator.div(5, 5)
console.log(add, sub, mul, div)
