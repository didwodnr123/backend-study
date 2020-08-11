// 친구 목록 JSON 배열로 만들어서 출력
// ‘이름’, ‘별명’, ‘나이’, ‘정보를 출력하는 함수’를 포함

var friends = [
    {
        name: "dragonwook", 
        age: 24, 
        printName: function(){
            console.log(this.name, this.age)
        }
    },
    {
        name: 'seungjae',
        age: 24,
        printName: function(){
            console.log(this.name, this.age)
        }
    },
]

friends.forEach(
    friend => console.log("Hello my name is " + friend.name + " and " + friend.age + ' years old.')
)