function findUser(id, func) { //파라미터는 사용자의 id 와 콜백함수 
    setTimeout(function() { // setTimeout 으로 비동기처리 합니다. 
      var fakeUser = {
        id: id, 
        pw : "비밀번호"
      }; 
      func(fakeUser);
    }, 1000);
  }
  // 사용자 아이디가 담긴 배열을 
  function findUsers(idArray){
    for (let id of idArray) {
      findUser(id,function(user) { //콜백함수 
        console.log("id :", id); //사용자의 아이디를 출력합니다.
        console.log("user :", user);// 사용자 정보를 출력합니다.
      });
    }
  }
  
  findUsers([1,2,3,4]);
  
  
  