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

<br/>

<!-- Contents -->

<h2>Contents</h2>

- [Overview](#overview)
- [Javascript](#javascript)
- [JSON](#json)
- [Node.js](#nodejs)
- [Flow Control](#flowcontrol)
- [Module](#module)
- [Express](#express)
- [HTTP](#http)
- [CRUD](#crud)
- [AWS EC2](#awsec2)

📌 [Practice](./PRACTICE.md)

<br/>

<!-- overview -->

## Overview

**Client : 서비스 요청자**

- 서비스를 사용하는 사용자

**Server: 서비스 자원의 제공자**

- 네트워크를 통해 클라이언트에게 서비스 및 정보를 제공, 다른 서버에 요청을 보내기도 함

<br/>

<!-- javascript -->

## Javascript 

- 코드를 한 줄씩 번역하고 실행 
- 실행속도가 컴파일 언어에 비해 느림
- 타입을 명시하지 않음
- 프로토타입 기반의 객체 지향 언어

<br>

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

<br>

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

<br>

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

<br/>

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

<br/>

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

<br>

**Express**

- NodeJS 기반의 웹 어플리케이션 ***프레임 워크***
- 서버를 구축하기 쉽게 틀을 제공

<br>

**Event-Driven**

- 이벤트가 발생할 때, 미리 지정해둔 작업을 수행하는 방식

![스크린샷 2020-09-02 오후 10 04 54](https://user-images.githubusercontent.com/56633607/91986986-6380f980-ed68-11ea-9d87-4efc0e0e5b6e.png)

> 출처 : Node.js 공식 홈페이지

<br/>

<!--flowcontrol-->

## Flow Control (흐름 제어)

***Blocking & Non-Blocking?***

<br>

**Blocking (동기)**

- 요청을 하고 완료를 할 때 까지 기다리는 방식
- 백그라운드 작업 완료 여부를 계속 확인

**Non-Blocking (비동기)**

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

<br/>

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

<br>

**Promise**

- ES6부터 공식적으로 포함된 흐름 제어 패턴
- 내부적 예외처리 구조

> Fulfilled (이행)

```javascript
new Promise(function(resolve, reject) {
	resolve();
})
```

> Rejected (실패)

```javascript
new Promise(function(resolve, reject){	
	reject();
})
```

<br>

> practice

```javascript
let isMomHappy = false;
let phone = {
    brand: 'Samsung',
    color: 'black'
}

var willIGetNewPhone = new Promise((resolve, reject) => {
    if(isMomHappy){
        resolve(console.log(phone));
    }else{
        //reject(console.error());
        reject(console.log(new Error('Mom is not happy')))
    }
})
```

<br>

**Async**

- ES7부터 지원하는 자바스크립트 비동기 패턴
- 장황한 **promise** 코드를 한번 더 깔끔하게 줄여줌
- 동기 코드와 매---우 유사함

> Async

- promise를 사용하지 않고도 효과적으로 콜백헬 해결
- **async는 암묵적으로 promise를 반환**

> Await

- promise를 기다림 (성공 or 실패)
- async로 정의된 내부에서만 사용 가능

<br>

<!--module-->

## Module

- 독립된 기능을 하는 함수나 변수들의 집합
- 모듈 자체가 하나의 프로그램이면서 다른 프로그램의 **부품**으로 사용할 수 있음
- 재사용에 용이함
- Node에서는 각 파일을 모듈화, **1파일 = 1모듈**

<br>

**crypto**

- **문자열을 암호화, 복호화, 해싱하는 모듈**
- 복호화할 수 없는 암호화 방식
- 비밀번호 암호화에 주로 사용
- 주로 해시 기법을 사용

> Example

```javascript
const crypto = require('crypto')
crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
	if(err) throw err;
	console.log(derivedKey.toString('hex'));	
})
```

<br>

**File System Module**

- 파일 생성, 삭제, 읽기, 쓰기
- 폴더 생성, 삭제

> 비동기 방식
>
> > fs.readFile() 
> >
> > fs.writeFile()

> 동기 방식
>
> > fs.readFileSync() 
> >
> > fs.writeFileSync()

<br>

<!--express-->

## Express

- Node를 위한 빠르고 간결한 웹 프레임워크
- HTTP 요청에 대해 라우팅 및 미들웨어 기능 제공

> 1. Express 설치

```
npm install express -g
```

> 2. 폴더 정해서 express 프로젝트 생성기 생성

```
npm install -g express-generator
```

>3. express 프로젝트 생성

```
express [project name]
```

> 4. 코드 작성 후 터미널에서

```
npm install
```

``` 
npm start
```

> 5. localhost:3000 접속 후 Express 뜨면 성공

<br>

**Routing**

- URI 및 특정한 HTTP 요청 메소드 (GET, POST 등) 인 특정 엔드포인트에 대한 클라이언트 요청에 애플리케이션이 응답하는 방법을 결정
- 한 파일에 모든 라우팅을 관리하는건 지양한다

<br>

<!--http-->

## HTTP

> Hyper Text Transfer Protocol

- TCP/IP & UDP 프로토콜을 사용
- 80번 포트 사용
- HTTPS는 433번 포트 사용

**Stateless Protocol**

- 서버가 두 요청간에 어떠한 데이터(상태)도 유지하지 않음
  - Cookie, Session, Token 등을 사용하여 극복❗

> Note: ❗HTTP 통신은 기본적으로 **Request** <===> **Response** 관계를 가진다.

<br>

### HTTP STATUS CODE

#### 데이터 전달 방식

- **2xx** : 성공 상태
- **3xx** : 리다이렉션을 알리는 상태
- **4xx** : 요청 요류
- **5xx** : 서버 내부 오류

> ❗중요한 응답 코드❗
>
> - 2xx 
>   - 200 : OK
>   - 204 : No Content
> - 3xx
>   - 304 : Not Modified
> - 4xx 
>   - 400 : Bad Request
>   - 401 : Unauthorized
>   - 404  : Not found
> - 5xx
>   - 500 :  Internal Server Error

### Request & Response

#### Request

1. URL
   1. param : https://abc.com/post/33
   2. query : https://abc.com/post?id=jaeuk
2. Header
   - 부가적인 정보를 전송
3. Body
   - xml, JSON, Multi Form 등의 데이터

#### Response

1. Body
   - xml, JSON, Multi Form 등의 데이터

<br>

<!--crud-->

## CRUD

>  대부분의 컴퓨터 소프트웨어가 가지는 기본적인 데이터 처리 기능

1. **CREATE**
2. **READ**
3. **UPDATE**
4. **DELETE**

| CRUD   | ACTION | HTTP METHOD | SQL    |
| ------ | ------ | ----------- | ------ |
| CREATE | 생성   | POST        | INSERT |
| READ   | 조회   | GET         | SELECT |
| UPDATE | 수정   | PUT         | UPDATE |
| DELETE | 삭제   | DELETE      | DELETE |

### router.METHOD(...)

```javascript
router.METHOD( 'path', (req, res) => {...} )
```

- **METHOD**
  - .get()
  - .post()
- **path**
  - 접근할 경로 설정
- **req**
  - request로 전달받은 데이터들이 담겨있다.
    - req.query
    - req.params
    - req.headers
    - req.body
    - req.file
- **res**
  - response로 전달할 데이터를 담는다.
    - res.status(xxx).send(json)
      - xxx : status code를 정수로 입력
      - json : json 형식으로 response body에 입력 

<br>

<!--awsec2-->

## AWS EC2

### 서버 구축 조건

- 컴퓨터 전원이 계속 ON 상태
- 서버가 **특정 포트**에 동작하고 있어야 한다.
- 서버를 구축하는 **까다로운 설정** 필요
- **협업** 시 팀원들이 접근 가능

### 아마존 웹 서비스

> 클라우드 컴퓨팅 플랫폼

- 저렴한 비용
  - 저렴한 종량과금제 방식
- 즉각적 융통성
  - 설치가 빠르고 관리가 편함
- 개방/유연성
  - 언어 및 운영체제에 구애 받지 않음
- 보안
  - 여러 계층의 운영 및 물리적 보안

### EC2

> 안전하고 크기 조정이 가능한 컴퓨팅을 클라우드에서 제공하는 웹 서비스

