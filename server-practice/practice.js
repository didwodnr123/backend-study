var person = [
    {
        name: 'alice',
        nickname: 'a',
        age: 20,
        printInfo: function(){
            console.log(this.name, this.nickname, this.age)
        }
    },
    {
        name: 'bob',
        nickname: 'b',
        age: 21,
        printInfo: function(){
            console.log(this.name, this.nickname, this.age)
        }
    },
    {
        name: 'charlie',
        nickname: 'c',
        age: 22,
        printInfo: function(){
            console.log(this.name, this.nickname, this.age)
        }
    }
]

// console.log(person[0], person[1], person[2])
person.forEach(
    person => person.printInfo()
)