<h3 align="center">Back-end study</h3>

<p align="center">
  <img src="https://img.shields.io/badge/Server-black" />
  <img src="https://img.shields.io/badge/Nodejs-green" />
  <img src="https://img.shields.io/badge/Express-purple" />
  <img src="https://img.shields.io/badge/Visual Studio Code-blue" />
</p>

> 📌  personal study Repo
>
> 🗂  Reference: 생활코딩, 26th Server seminar 자료, Node.js 공식 홈페이지

<!-- Contents -->
<h2>Contents</h2>

- [Overview](#overview)
- [Javascript](#javascript)
- [JSON](#json)
- [Node.js](#nodejs)

<!-- overview -->
<h2>Overview</h2>
<div>
📱  Client : **서비스 요청자** -> 서비스를 사용하는 사용자

🗄  Server: **서비스 자원의 제공자** -> 네트워크를 통해 클라이언트에게 서비스 및 정보를 제공, 다른 서버에 요청 보내기도 함
</div>

<!-- javascript -->
## Javascript 

- 코드를 한 줄씩 번역하고 실행 
- 실행속도가 컴파일 언어에 비해 느림
- 타입을 명시하지 않음
- 프로토타입 기반의 객체 지향 언어



**Hoisting**

- 변수의 정의가 그 범위에 따라 **선언**과 **할당**으로 분리되는 것

> 작성자 코드

```javascript
function hoisting(){
	console.log(x);
	var x = 'abc'
	console.log(x)
}
```

> Javascript 엔진에서 호이스팅 된 코드

```javascript
function hoisting(){
	var x
	console.log(x)
	x = 'abc'
	console.log(x)
}
```



**Data Type**

- ***[Primitive Type]***
  - Boolean
  - Number
  - String
  - Symbol
  - Null
  - Undefined

- ***[Object Type]***
  - Object



**Object**

- Array
  - 객체 타입
  - arr_name = [a, b, c] 형태
- Function
  - 객체 타입
  - 하나의 특별한 목적의 작업을 수행하도록 설계된 독립적인 블록
  - **일급 객체**
    - 변수, 데이터 구조에 담을 수 있다
    - 다른 함수의 파라미터로 사용 가능
    - 반환 값으로 사용 가능
    - 런타임 시 생성 가능

> 함수 선언식 vs 함수 표현식
>
> ❗️함수 선언식은 기존 다른 언어와 비슷한 함수 선언 구조인데, JS에서는 화살표 함수(함수 표현식)를 사용하는 것 같다.



<!-- json -->

## JSON

**Javascript Object Notation**

- 자바 스크립트 객체 표현식
- **Name : Value** 로 구성된 프로퍼티(property)의 정렬되지 않은 집합
- 프로퍼티 값으로 **함수**가 올 수도 있는데, 이러한 프로퍼티를 **메소드**라고 한다.
- 클라이언트와 통신 시 주로사용
  - -application/json



> JSON 객체

``` javascript
var 객체이름 = {
	key1: value1,
	key2: value2,
}
```

> JSON 배열

```javascript
var 객체이름 = [
	{
		key1: value1, 
		key2: value2
	},
	{
		key1: value3, 
		key2: value4
	}
]
```

❗️가끔 json 객체와 배열이 헷갈릴 때가 있다...



<!--nodejs-->

## Node.js

- 자바스크립트 기반 서버 플랫폼
- 이벤트 기반
- 싱글 스레드 기반
- non-blocking I/O
- 비동기 방식

> 프로그램 언어  ❌
>
> 프레임워크  ❌
>
> **자바스크립트를 실행시키는 *런타임 환경***  ⭕️



### Express

- NodeJS 기반의 웹 어플리케이션 ***프레임 워크***
- 서버를 구축하기 쉽게 틀을 제공



**Event-Driven**

- 이벤트가 발생할 때, 미리 지정해둔 작업을 수행하는 방식

![스크린샷 2020-09-02 오후 10 04 54](https://user-images.githubusercontent.com/56633607/91986986-6380f980-ed68-11ea-9d87-4efc0e0e5b6e.png)

> 출처 : Node.js 공식 홈페이지



<!--flowcontrol-->

## Flow Control (흐름 제어)

***Blocking & Non-Blocking?***

### Blocking (동기)

- 요청을 하고 완료를 할 때 까지 기다리는 방식
- 백그라운드 작업 완료 여부를 계속 확인

### Non-Blocking (비동기)

- I/O 작업이 진행되는 동안 작업이 멈추지 않고 다음 작업 수행
- **요청을 하고 바로 제어권을 돌려 받는 방식**

> Blocking

```javascript
var fs = require("fs");
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended");		
```

> result

```
this is a sample text
Program Ended
```



> Non-Blocking

```javascript
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended");
```

> result

``` 
Program Ended
this is a sample text
```





















<!--module-->

<!--express-->