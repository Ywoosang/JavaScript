var makeText = {
    warning : document.getElementsByClassName('warn'),
    tag : document.getElementById('appear'),
    setEvent :function(){
        var node = document.getElementById('input1');
        node.onkeyup = this.show.bind(makeText,node); //파라미터로 node 정보 보냄.
        //node => 이벤트를 설정한 엘리먼트
    },
    show : function(node){
        if(node.value.length <= 6){
          
            this.tag.innerHTML = node.value;
            this.warning[0].style.color = "transparent" ;
            this.tag.style.color = "black";
            node.style.backgroundColor = "white";
        }else{
            
            this.warning[0].style.color = "black" ;
            this.tag.style.color = "transparent";
            node.style.backgroundColor = "#FFF0F0";
        }
    }
};
makeText.setEvent();