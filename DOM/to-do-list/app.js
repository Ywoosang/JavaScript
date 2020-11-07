//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button'); 
const todoList = document.querySelector('.todo-list'); 
const filterOption = document.querySelector('.filter-todo')

//Event Listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click',deleteCheck)
filterOption.addEventListener('click',filterTodo)
//Document 에 EventListener 더해야함. 웹페이지가 로드되었을떄 함수를 호출하려면 
document.addEventListener('DOMContentLoaded', getTodos); 






//Functions
function addTodo(event){
    //제출 버튼 누르면 refresh 되서 누른게 사라짐. 
    //preventDefault() 로 submit 으로 새로고침되는것 막기.
    event.preventDefault();  
    //Todo Div
    const todoDiv = document.createElement('div');  //div 태그 만듬.
    todoDiv.classList.add('todo') //만든 todoDiv 에 .todo 클래스 더함 
    //create li
    const newTodo = document.createElement('li');  //li 태그 만듬
    // li 태그 안에 글씨 입력 
    newTodo.innerText = todoInput.value;  
    
    
    newTodo.classList.add('todo-item'); //li 태그에 .todo-item 클래스 더함
    todoDiv.appendChild(newTodo) //만든 div 태그에 만든 li 태그 집어넣음
    
    //만들어진 ToDo 의 내용을 로컬에 저장
    saveLocalTodos(todoInput.value); 
    
    
    //Check mark button
    const completedButton = document.createElement('button'); 
    //버튼에 폰트어썸아이콘 <i class="fas fa-check"></i> 를 넣기 위해 
    completedButton.innerHTML="<i class='fas fa-check'></i>";
    completedButton.classList.add("complete-btn");  //.complete-btn  클래스 더함
    todoDiv.appendChild(completedButton);
    const trashButton = document.createElement('button'); 
    //버튼에 폰트어썸아이콘 <i class="fas fa-check"></i> 를 넣기 위해 
    trashButton.innerHTML="<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-btn");  //.complete-btn  클래스 더함
    todoDiv.appendChild(trashButton);
    console.log(todoDiv);
    //Append to Todo list 
    todoList.appendChild(todoDiv);
    //글자를 입력하고 목록 만들면 쓴 글자 초기화
    todoInput.value ='';

};
function deleteCheck(e){
    // console.log(e.target); //이벤트가 일어난 대상 타겟 요소를 볼 수 있다 .
    //check. trash 누른 대상별로 설정 가능 . 
    const item = e.target;
    if(item.classList[0]==='trash-btn'){ //이벤트가 일어난 대상의 class 속성을 가져옴
        //이벤트의 타겟인 trash-btn 을삭제하는 것이 아니라 부모요소인 div.todo 를 삭제해야 없어짐
        const todo = item.parentNode;

        //내려가는 애니메이션
        todo.classList.add('fall'); 
        removeLocalTodos(todo); 
        // 내려가면서 없어지는 transition (0.5s로 설정해 둔것) 이 끝난 후 실제로 없애주기
        todo.addEventListener('transitionend',function(){
            todo.remove(); 
        }); 
    }
    //체크 표시 클릭했을 때 
    if(item.classList[0] === "complete-btn"){
       
        const todo = item.parentElement; 
        //toggle 을 이용해 .completed 클래스가 있으면 빼고, 없으면 더해준다. 
        todo.classList.toggle("completed");  
         
    }
}

/* 
우리가 completed 한 것을 확인할 수 있는 filter 을 더한다. 
하려고 남겨둔 목록들을 지역 저장소에 저장한다. 
브라우저가 닫혀도 계속 toDo's 를 가지고 있을 수 있도록
*/
/*만약 파일들이 거기 붙어있지 않기를 바란다면 
~ 때문에  select thing중 하나를 스타일링 하는 것이 */
 
function filterTodo(e){
    //todos 는 작성한 모든 목록들을 요소로 하는 배열 [div,div,div] 
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){ //클락헌 대상의 value  option value="여기"
            case "all":
                todo.style.display = "flex" ; //모두 보여줌 
                break;
            case "complete":   
            //todo 의 class에 complted 가 있다면
                if(todo.classList.contains('completed')){ //uncomplete 도 complete 가 들어가 있으니까 .  
                    todo.style.display = "flex";  //체크된 것만 보여줌 
                }else{
                    todo.style.display = "none"; 
                }
                break; 
            case "uncompleted":
                if(!todo.classList.contains('completed')){ //uncomplete 도 complete 가 들어가 있으니까 .  
                    todo.style.display = "flex";  //체크된 것만 보여줌
                }else{
                    todo.style.display = "none"; 
                }
                break;
            }; }
    )};

/*
로컬 저장소에 저장하기
여기에 받아서 
하나 만들어져 있다면 지우지 않고 
*/
function saveLocalTodos(todo){
    //기존에 있는지 체크
    let todos;
    if(localStorage.getItem('todos') === null){ //todos 라는 key가 존재하지않으면, 지역 저장소에서 null 을 반환 
        todos = []; 
    }else{
        //localStorage 에서 가져온 것들을 parse 해서 배열로  
        //이미 무언가가 있다면 가져와서 배열로 만든다.  
        todos = JSON.parse( localStorage.getItem('todos'));
    }
    //받아온 todo 를 배열 마지막에 집어넣는다. 
    todos.push(todo);
    //다시 로컬 저장소에 집어넣음
    localStorage.setItem('todos',JSON.stringify(todos)); 

}

function getTodos(){
    let todos;
    if(localStorage.getItem("todos" === null)){
        todos = [];
    }else { 
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
        //todo 생성해서 넣는 부분 
        const todoDiv = document.createElement('div');   
        todoDiv.classList.add('todo')  
        const newTodo = document.createElement('li');  
        // newTodo.innerText = todoInput.value; 저장소에 있는걸 다시 표시해주는 것. 값을 받아오지 않으므로 이부분 사용 안함. 
        newTodo.innerText = todo; 
        newTodo.classList.add('todo-item');  
        todoDiv.appendChild(newTodo)  
        // saveLocalTodos(todoInput.value); 로컬 저장소에 넣는 부분도 필요 없음. 
        const completedButton = document.createElement('button'); 
        completedButton.innerHTML="<i class='fas fa-check'></i>";
        completedButton.classList.add("complete-btn");  
        todoDiv.appendChild(completedButton);
        const trashButton = document.createElement('button'); 
        trashButton.innerHTML="<i class='fas fa-trash'></i>";
        trashButton.classList.add("trash-btn");   
        todoDiv.appendChild(trashButton);
        // console.log(todoDiv);
        todoList.appendChild(todoDiv);
    });

}
//getTodos 호출 안하면 안불러와짐 


function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem("todos")=== null){
        todos =[]; 
    }else{
        todos = JSON.parse(localStorage.getItem("todos")); 
    }
    //   const todo = item.parentNode; 에서 todo 를 부모노드(div) 로 설정했으므로 0이 li  1,2가 btn 임  
    console.log(todo.children[0].innerText); //0번째가 li 
    const todoIndex = todos.indexOf(todo.children[0].innerText); 
    todos.splice(todoIndex,1); //splice로 시작할 인덱스 = li텍스트의 인덱스, 삭제 = 1개 로 요소 삭제 
    localStorage.setItem('todos',JSON.stringify(todos));

}