// 1. 선언적 함수 (이름있는 함수) -> 이름을 불러줘야 실행이 됨

/*
// fnFirst('기본함수 호출 실행','박소혜'); //위에서 호출(가능)

    function fnFirst(z,k,x,y,){                //이때 z가 매개변수(parameter)
           3.👆쿠폰 저장해놓음
     alert( z + k + x + y ); //z 매개변수, 매개변수랑 전달인자랑 갯수 안 맞으면 undefined
     console.log( z, k, x, y );
    4.👆쿠폰사용(1개든 2개든 상관없음)
} 
//fnFirst('기본함수 호출 실행','박소혜','아아아아');         //전달인자(전달인수)=argument | 매개변수한테 전달하는 값=매개변수가없으면 전달인자도 쓰나마나임
//1.👆고객부름        2.👆쿠폰받음        //아래에서 호출     
*/
//이름있는(선언적)함수 특징 1) 함수 선언문 위/아래 상관없이 호출실행 가능;

/*
//////2. 리터럴(이름없는) 함수 //////
//특징 1) 변수로 대입하는 함수
//    2) 반드시 선언된 함수 아래서만 호출 살행 가능
      3) 매개변수가 있으면 반드시 전달해라

//unNameFn('http://www.naver.com'); //이거 리터럴함수라 얜 안 불러짐 = Uncaught TypeError: unNameFn is not a function(오류)

/*
var unNameFn = function(z){ //parameter(매개변수) = argument값을 받아줌
    alert(z);
    location.href = z; //location(윈도우객체 : 윈도우안에서움직이게함 | BOM구조 )
    window/location.href = z; 본래의 문장(위에꺼 자주쓰는 약식)

}
unNameFn('http://www.tjoeun.co.kr'); //argument(전달인자)
//unNameFn이라는 함수를 호출할 때 더조은 홈페이지가 z한테 전달이 됨
*/


//////3. 즉시 실행 함수 //////


(function(){
    alert('즉시 실행 함수');
})(); //이 괄호가 즉시 실행하게 해줌

(function(babo,jQuery,win/*parameter(매개변수)*/){
    console.log(babo,jQuery,win) //함수에서받은 매개변수는 함수 내에서 사용할수잇음, 서로 짝이 안 맞으면 undefined
})('전달인자값1','전달인자값2'/*argumrnt(전달인자)*/); 

//제이쿼리 실행 함수
//반드시 오픈소스가 있어야 사용이 가능
jQuery(function(){ //다음의 것들을 제이쿼리로 실행합니다.
    alert('제이쿼리 실행 경고창!!!!!!!!!!!!!!!!!!!');
    /*⭐*/jQuery('#scriptWrap').html('<h1>제이쿼리 출력문</h1>'); //css규칙은 그대로 지킴.
    $('#scriptWrap').html('<h2>제이쿼리 출력문</h2>'); //제이쿼리 내의 변수는 중복이 되니까 조심
});
$(function(){
    alert('제이쿼리 실행문 $사용(jQuery 대신 문자사용)')
    $('#scriptWrap').text('<h3><i>제이쿼리는 출력문이 2가지다. 1)html()태그사용가능 2)text()오로지(Only)텍스트만</i></h3>')// text: 태그인식못함 / html 태그인식가능
    /*⭐*/document.write('<h1>자바스크립트 코딩 출력문~</h1>'); //웹에 직접 코딩하는거라 직접 태그 가능
      console.log('콘솔창 출력 오류검출 디버깅용 유효성검사') 
      alert('경고창!!!') 
}); /* 어떤 값을 받고 되돌려주는 함수 = 콜백함수 = 이벤트핸들러 */

/*
// 입력 방법
1) jQuery()
2) jQuery(function(){});
3) jQuery((){

});

1) $();
2) $(function(){});
3) $(function(){

});
*/

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
