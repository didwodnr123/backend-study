<h3 align="center">Practice</h3>

> practical tutorial

## Practice 01

1. 요청 받고 응답주기
2. 에러 처리
3. JSON 응답 (일관된 응답 형식)
4. 모듈화

<br>

* Step1: 요청 받고 응답주기

```javascript
Postman을 사용해서 request, response 테스트
```

* Step2 : 에러 처리

```javascript
if (!id || !name || !password || !email ){
	return res.status(400).send({message: 'BAD REQUEST'})
}
if (User.filter(user => user.id == id).length > 0) {
    return res.status(400).send({message: 'ALREADY ID'})
}
res.status(200).send(util.success(200, '성공', { userId: id }))
```

> **.filter()** : 주어진 배열의 조건을 통과하는 모든 요소를 모아 새로운 배열로 반환❗

* JSON 응답

```javascript
const util = {
  success: (status, message, data)=>{
    return {
      status: status,
      success: true,
      message: message,
      data: data
    }
  },
  fail: (status, message)=>{
    return {
      status: status,
      success: false,
      message: message
    }
  }
}
```

* 모듈화

```
module.exports = util
```

