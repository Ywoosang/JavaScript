//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button'); 
const todoList = document.querySelector('.todo-list'); 

//Event Listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click',deleteCheck)
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

    newTodo.innerText = todoInput.value; // li 태그 안에 글씨 입력
    
    
    newTodo.classList.add('todo-item'); //li 태그에 .todo-item 클래스 더함
    todoDiv.appendChild(newTodo) //만든 div 태그에 만든 li 태그 집어넣음
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