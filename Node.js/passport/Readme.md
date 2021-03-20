# passport 개념 

## passport 란 ? 

Express 와 호환 가능한 Node.js 어플리케이션을 위한 인증 미들웨어다  

passport 는 request 들을 `strategies` 라고 불리는 확장성 있는 플러그인을 통해 인증한다. 라우터 수를 증가시키지 않으며 특정한 데이터베이스 스키마를 가정하지도 않기때문에 개발에 있어서 확장성이 높다. API 는 단순한데, passport 에게 인증할 request 를 제공하면 passport 는 인증의 성공 또는 실패와 관련된 정보를 통제할 수 있는 hook 을 제공한다 
  
## passport 를 사용하는 이유 

회원가입과 달리 로그인은 카카오로 로그인할때, 아이디 비밀번호로 로그인할때 등 경우에 따라서 절차가 달라진다. 처리 로직이 복잡해지기 때문에 이를 간소화하기 위해 passport 라이브러리를 사용한다  

다음과 같이 의존성에 추가한다  
```bash
npm i passport
```

## 미들웨어 

Express 에서 passport 를 사용하려면 `passport.initialize()` 미들웨어를 사용해 설정한다. 영구적인 세션을 사용하려면 `passport.session` 미들웨어또한 사용되어야 한다.  
  
```js
const express = require('express'); 
const app = express();
app.use(express.static('public'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
``` 


## Strategies 

passport 는 인증요청에 관련해 `Strategies` 라는 개념을 이용한다. `Strategies` 를 이용해 username 을 확인하고 password를 인증, OAuth(facebook,Twitter 등) 를 이용해 인증을 위임, OpenID 를 이용해 인증을 통합 등 인증과 관련된 여러가지 일을 수행할 수 있다
  
request 를 인증하기 위해 애플리케이션에 이용되는 `Strategies` 는 반드시 설정되어야 한다. 

```js
const assport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false,{ message: 'Incorrect username.' }); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));
``` 
사용하고자 하는 `Strategies` 에 따라 인증에 사용된는 프로토콜이 다를 수 있으므로 확인해보면 좋다  

  
## 세션

passport 는 영구적인 로그인 세션을 보유한다. 영구적인 세션을 설정하려면 인증된 사용자는 세션으로 `serialized` 되어야 하며 그 다음요청이 전송되면 `deserialized` 되어야 한다  
  
passport 는 `user` 데이터 저장 방식에 제한을 두지 않는다. 대신에 passport 에게 `serialization` 과 `deserialization` 에 대한 콜백함수를 전달한다. 특정한 애플리케이션에 대해서는 사용자 아이디를 `serialization` 하고 `deserialization` 함으로써 사용자를 찾는것과 같이 간단할 수 있다.

```js
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});
```

## Authenticate Requests 

passport 는 라우트 미들웨어가 요청을 인증할 수 있도록 하는데 사용되는  `authenticate()`  함수를 제공한다.  
  
```js
app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });
```
## 로그인 여부를 판단하는 미들웨어 

passport 의 req.isAuthenticated() 를 이용해 로그인한 상태와 로그인하지 않은 상태를 처리하는 미들웨어를 정의할 수 있다  

로그인상태라면 next() 로 다음 미들웨어로 이동한다
```js 
exports.isLoggedIn = (req,res,next) => {
    if(req.isAuthenticated()) {
        next();
    }else{
        res.status(403).send('로그인 필요')
    }
};
```
로그아웃 상태라면 next() 로 다음 미들웨어로 이동한다
```js 
exports.isNotLoggedIn = (req,res,next) => {
    if(!req.isAuthenticated()) {
        next();
    }else{
        const message = encodeURIComponent('로그인한 상태입니다.');
        res.redirect(`/?error=${message}`); 
    }
}
``` 


# passport  사용 예제 

## 프로젝트 구조

다음과 같은 프로젝트 구조에서 passport 폴더를 생성한다.

``` 
├── config/ 
├── models/
├── routes/
│      └─ auth.js
├── public/
├── views/
├── .env
├── passport/
│      ├─ index.js
│      └─ localStretegy.js
│       ... 
└── app.js
``` 

`dotenv` 와 `seqyelize` 를 이용해 프로젝트환경을 구성한다
app.js 에 express-session 설정 이후 라우터 등록 이전에 미들웨어를 연결한다
```js
# app.js 
... 
const passport = require("passport");
const passportConfig = require('./passport');   
const dotenv = require('dotenv');
dotenv.config();
// sequelize.sync
// express-session config
app.use(passport.initialize());
app.use(passport.session());
passportConfig() 
// register routers
``` 

```js 
# passport/index.js
const passport = require('passport');
// Strategy import 
const local = require('./localStrategy');
... 
// sequelize model import 
const { User } = require('../models');

module.exports = ()=> { 
    passport.serializeUser((user,done)=>{
        done(null,user.id); 
    });
    passport.deserializeUser((id,done)=>{
        User.findOne({ where: { id }}) 
        .then(user => done(null,user))  // 미들웨어에서 req.user 로 로그인한 사용자에게 접근 가능
        .catch(err => done(err)); 
    }); 
    // local ,kakao 등록
    local(); 
    kakao(); 
}
```  


## localStrategy 로그인 처리

모듈 설치
```bash
npm i passport-local
``` 

- `/login` 으로 요청이 들어온다  
- passport.authenticate('local',callback) 이 실행된다  
- passport 가 localStrategy 를 찾는다
- localStrategy 에서 로그인 성공/실행 판별 후 done 을 실행한다  
- done 에서 인자로 넘긴 값이 (authError,user,info) 에 들어와 local 뒤 콜백함수가 실행된다  
- 로그인성공일경우 req.login 이 실행되어 passport 폴더 안 index.js 로 이동후 `serializeUser` 가 실행된다  
- `serializeUser` 에서 세션에 `user.id` 를 저장 후 done 을 실행한다  
- req.login 콜백함수가 실행되어 최종적으로 로그인에러 확인하고, 메인페이지로 리다이렉트 시킨다  
- 이후 요청부터 `deserializeUser` 가 실행된다. passport.user로 사용자 정보에 접근 할 수 있으며, isAuthenticated() 로 로그인 여부를 bool 값으로 받을 수 있다
 
```js
# routes/auth.js 
const express = require('express');
const bcrypt = require('bcrypt'); 
const { User } = require('../models');
const passport = require('passport');
const { isLoggedIn,isNotLoggedIn } = require('./middlewares');
const router = express.Router(); 

router.post('/login',isNotLoggedIn,(req,res,next)=>{  
    passport.authenticate('local',(authError,user,info)=>{
        if(authError) {
            console.error(authError);
            return next(authError); 
        }
        if(!user) {
            return res.redirect(`/?loginError=${info.message}`);
        }
        return req.login(user,(loginError)=>{
            if(loginError) {
                console.error(loginError);
                return next(loginError); 
            }
            return redirect('/'); 
        });
    })(req,res,next) // 미들웨어 확장패턴을 사용 (passport.authenticate 는 미들웨어)
});
```  

```js
# passport/localStrategy.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { User } = require('../models'); 

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'email', // req.body.email 
        passwordField : 'password', // req.body.password 
    }, async (email,password,done)=>{ // 위 email,password 와 변수명이 같아야함
        try {
            const user = await User.findOne({ where : {email} });
            if(exUser) {
                // 해쉬화한 값끼리 비교
                const result = await bcrypt.compare(password,user.password);  
                if(result) {
                    done(null,user);
                }else {
                    done(null,false,{ message : '비밀번호가 일치하지 않습니다.'});
                }
            } else {
                done(null,false,{ message : '존재하지 않는 회원입니다.'});
            }
        } catch(error){
            console.error(error);
            done(error); 
        }
    }))
}
``` 
## third-party 로그인 처리
- 사용자가 로그인 링크를 클릭해 third-party 에 request 를 보내면 OAuth 2.0 인증 절차가 시작된다
- 해상 third-party 의 인증 페이지에서 로그인한다  
- third-party 에서 브라우저에게 callback URL 로  OAuth 2.0 인증 코드와 함께 리다이렉트시킨다  
-  백엔드 로직을 이용해 요청을 보낸 사용자를 검증한다. 
     * 사용자가 데이터베이스에 존재한다면 passport 를 통해 세션을 발급한다.
    *  존재하지 않는다면 필요한 정보를 데이터베이스에 저장한 뒤 세션을 발급한다

<b>참고</b>
https://loopback.io/doc/en/lb3/Third-party-login-using-Passport.html#third-party-login


### 카카오 로그인 (kakaoStrategy)


```js
# routes/auth.js
router.get('/kakao',isNotLoggedIn,passport.authenticate('kakao'));
// 로그인 성공하면 카카오가 kakao/callback 으로 요청을 쏴줌 
router.get('/kakao/callback',passport.authenticate('kakao',{
    failureRedirect:'/',
}),(req,res)=>{
    res.redirect('/');
});
```
```js
# passport/kakaoStrategy.js
 const passport = require('passport');
 const KakaoStrategy = require('passport-kakao').Strategy;
 const { User } = require('../models');

module.exports = () => {
    passport.use(new KakaoStrategy({
        // 카카오 서비스로 로그인하도록 구현 
        clientID : process.env.KAKAO_ID,
        callbackURL : '/auth/kakao/callback',
    },async (accessToken,refreshToken,profile,done)=>{
        console.log('kakao profile',profile);
        try {
            const user = await User.findOne({
                where : { snsId: profile.id,
                provider :'kakao'
            }});
            if(user){
                done(null,user);
            }else {
                const newUser = await User.create({
                    email : profile._json && profile._json.kakao_account_email,
                    nick : profile.displayName,
                    snsId : profile.id,
                    provider : 'kakao'
                });
                done(null,newUser); 
            }
        }catch(error) {
            console.error(error);
            done(error)
        }

    }))
}
```

### 네이버 로그인 (naverStrategy)  


```js
# routes/auth.js
app.get('/naver',passport.authenticate('naver'));
app.get('/naver/callback', passport.authenticate('naver', {
        failureRedirect: '/'
    }), (req, res) => {
    	res.redirect('/'); 
    });
``` 
```js
# passport/naverStrategy.js
const passport = require('passport');
const NaverStrategy = require('passport-naver').Strategy;
const { User } = require('../models');

module.exports = () => {
passport.use(new NaverStrategy({
    clientID: process.env.NAVER_ID,
    clientSecret:process.env.NAVER_SECRET,
    callbackURL:'/auth/naver/callback'
},async (accessToken,refreshToken,profile,done) =>{
    try {
    const user = await User.findOne({
        where : {
            snsId : profile.id,
            provider:'naver'
    }}); 
    if(user) {
        done(null,user);
    } else {
        console.log("네이버 프로필\n",profile);
        console.log(profile.id,profile.displayName);
        const newUser = await User.create({
            email: profile.emails[0].value,
            name: profile._json.nickname,
            snsId : profile.id,
            provider :'naver'
        });
        done(null,newUser); 
        return;
    }
} catch(error) {
    console.error(error);
    done(error); 
}}));
};

``` 

### 깃허브 로그인 (github Login)

```js
# auth/index.js
router.get('/github',passport.authenticate('github'));

router.get('/github/callback', 
  passport.authenticate('github', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
```

```js
# passport/githubStrategy.js
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const { User } = require('../models');
module.exports = () => {
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
  }, async (accessToken, refreshToken, profile, done) => {
      try{
          const user = await User.findOne({
            where : { 
                snsId: profile.id,
                provider :'github'
              }});
              if(user) {
                  done(null,user); 
              }else {
                  console.log(profile);
                  const newUser = await User.create({
                    email : profile._json.html_url,
                    name : profile.username,
                    snsId : profile.id,
                    provider : 'github'
                  });
                  done(null,newUser); 
              }
      } catch(err){
          done(err); 
      }}));
} 

``` 

## 로그아웃

세션쿠키를 서버에서 지워 로그아웃 시킨다
 
```js 
router.get('/logout',(req,res)=>{
    // 아직 로그아웃 전이기 때문에 req.user 로 사용자 정보 접근 가능
    console.log(req.user);
    // 
    req.logout();
    req.session.destroy();
    res.redirect('/')

});
``` 
세션에서 세션쿠키를 지워준다 
```js
req.logout();
``` 
세션 자체를 삭제하고싶으면 다음을 이용한다 
```js
req.session.destroy();
```