// function (){}            // 지금까지 했던 이름없는 함수 

//////1. 선언적(이름있는) 함수 //////
//fnFirst('기본함수 호출 실행','박소혜'); //위에서 호출

function fnFirst(z){//이때 z가 매개변수(parameter)         // 선언적함수(이름있는 함수) -> 이름을 불러줘야 실행이 됨
        //3.👆쿠폰 저장해놓음
    alert(z);
    //4.👆쿠폰사용(1개든 2개든 상관없음)
} 

//fnFirst('기본함수 호출 실행','박소혜'); //전달인자(전달인수)=argument | 매개변수한테 전달하는 값=매개변수가없으면 전달인자도 쓰나마나임
//1.👆고객부름     2.👆쿠폰받음        //아래에서 호출     

//이름있는(선언적)함수 특징 1) 함수 선언문 위/아래 상관없이 호출실행 가능;


//////2. 리터럴(이름없는) 함수 //////
//특징 1) 변수로 대입하는 함수
//    2) 반드시 선언된 함수 아래서만 호출 살행 가능

//unNameFn('http://www.naver.com'); //이거 리터럴함수라 얜 안 불러짐 = Uncaught TypeError: unNameFn is not a function(오류)

/*
var unNameFn = function(z){ //parameter(매개변수) = argument값을 받아줌
    //alert(z);
    location.href = z; //location(윈도우객체 : 윈도우안에서움직이게함 | BOM구조 )
    //window/location.href = z; 본래의 문장(위에꺼 자주쓰는 약식)

}
unNameFn('http://www.tjoeun.co.kr'); //argument(전달인자)
//unNameFn이라는 함수를 호출할 때 더조은 홈페이지가 z한테 전달이 됨
*/


//////3. 즉시 실행 함수 //////

(function(){
    alert('즉시 실행 함수');
}) (); //이 괄호가 즉시 실행하게 해줌


/* 
//버튼(요소Element) 클릭 이벤트
    var divBtn = document.querySelector('#scriptWrap');
    
     divBtn.onclick  = function(){
         fnFirst();
     }
*/

// 윈도우가 로드된 후에 이벤트 리스너(function) 함수 실행
// window.onload = function(){}
// 돔트리 구조를 읽어 들이고 난 후, 실행할 수 있도록 합니다.
/*
window.onload = function(){

    //fnFirst('window.onload 실행','바보'); //전달인자(전달인수)=argument | 매개변수한테 전달하는 값=매개변수가없으면 전달인자도 쓰나마나임

    var divBtn = document.querySelector('#scriptWrap');
        divBtn.onclick = function(){
            fnFirst('온로드 후 버튼 클릭 이벤트 리스너 값입니다.');
        }
}  
*/
