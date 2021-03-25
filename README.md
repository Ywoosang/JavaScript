# 자바스크립트, Node.js 개념 정리

### 다음과 같은 목적으로 만든 저장소입니다.
- 최신 기술의 이해 
- 개발하면서 부족했던 부분 정리
- 근본적인 개념 습득

### 다루는 내용
- ES5
- ES6+ 
- Node.js 

### JavaScript

### Node.js

https://jusths.tistory.com/158
해싱

* [Sequelize-CLI 환경 설정] 
  
* [Sequelize 사용방법]
* [multer 을 이용한 이미지 업로드](https://github.com/Ywoosang/JavaScript/Node.js/upload/Readme.md) 
* [패스워드 해싱](https://github.com/Ywoosang/JavaScript/Node.js/encryption/Readme.md) 
  - 암호화와 해싱의 차이점 
  - crypto 모듈을 사용한 패스워드 해싱
  - bycrypt 모듈을 이용한 패스워드 해싱
   
* [Passport 를 이용한 인증(Sequelize 이용)](https://github.com/Ywoosang/JavaScript/Node.js/passport/Readme.md) 
  - 카카오 로그인  
  - 네이버 로그인
  - 깃허브 로그인
 
관련 지식 및 자료

[MIME type 종류] https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types 
[express-validator 사용] https://2ssue.github.io/programming/express-validator/ 

## MIME Type
MIME type (Multipurpose Internet Mail Extensions or media type) 은 파일,문서의 포맷을 나타내는 기준이다. 

Server 
- 문서에서 MIME Type은 파일 확장명의 개념이다
- 웹에서 파일 확장자는 별 의미가 없기 때문에 파일 정보가 서버로 전송되었을 때 각 문서와 함께 올바른 MIME 타입이 전송되었는지 확인한다 

Browsers 
- 브라우저는 MIME Type 을 사용하여 URL을 처리하는 방법을 결정한다 
- 따라서 웹 서버는 Content-Type header 에서 브라우저에게 올바른 MIME Type을 보내는 것이 중요하다
- 설정이 잘못되었다면 브라우저는 파일 내용을 잘못 해석하고 웹사이트가 제대로 동작하지 않을 수 있으며 파일 다운로드가 불가능해질 수 있다



multipart/form-data: 브라우저에서 서버로 HTML Form의 내용을 전송 시 사용한다
application/octet-stream: 알려지지 않은 타입의 이진 파일 리소스가 전송될 때 설정된다  

![image](https://user-images.githubusercontent.com/68385605/112521524-f4d8bb80-8ddf-11eb-97c8-1077cb194f9f.png)![image](https://user-images.githubusercontent.com/68385605/112521966-73cdf400-8de0-11eb-9126-417d39a4fd6d.png)

 

https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types 


## MVC (Model View Controller) 

MVC 란 데이터베이스 관련 Model, 클라이언트에게 보여지는 요소인 View, Model 과 View 를 연결해 제어하는 역할을 하는 Controller 로 구분해 논리적으로 코드를 짤 수 있도록하는 아키텍처 패턴이다 


![image](https://user-images.githubusercontent.com/68385605/112519659-eee1db00-8ddd-11eb-8612-afcd956b51f0.png)


Model
- 데이터를 처리하는 부분이다 
- 데이터베이스와 관련이 깊다
- 컨트롤러에서 요청이 들어오면 해당 연산처리 후 정보를 반환한다
 
View 
- 클라이언트에 나타난다
- html 등의 문서와 컨텐트를 렌더링하는 부분이다
- 애플리케이션의 로직을 다루지 않는다
 
Controller : 
- View 와 모델을 연결한다. 
- 어떤 model 을 이용해 데이터를 처리하고 어던 View 로 데이터를 렌더링할지 결정한다.
- 모델은 데이터를 저장하고 불러오는것을 관리한다.   
- 따라서 컨트롤러는 모델을 이용해 데이터를 다루고 view 에 데이터를 전달하는 일을 한다. 
 
Router 
- 해당 경로로 특정한 http 메소드를 통해 요청이 들어오면 어떤 컨트롤러가 동작할지 결정하는 역할을 한다
 
Routing 
- 라우팅은 URI(또는 경로) 및 특정한 HTTP 요청 메소드(GET, POST 등)인 특정 엔드포인트에 대한 클라이언트 요청에 애플리케이션이 응답하는 방법을 결정하는 것을 의미한다
 



