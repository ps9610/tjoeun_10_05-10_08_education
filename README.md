# tjoeun_10_05-10_08_education\

[더조은컴퓨터아카데미 프론트엔드 양성하기 4주차 수업]

(To-do list 만드는거 먼저 블로깅하고->추가적인걸 블로깅하기)

📆 20_10_05_월_Javascript_Day1

🖱 자바스크립트 기본 개념 익히기

🔍 DOM vs BOM
    - 둘 다 자바스크립트로 조작할 수 있음

1. DOM(Document Object Modeling) : 문서 객체 모델
  - 선개념 : 돔 구조부터 배워야하는 이유

  1) DOM (https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/%EC%86%8C%EA%B0%9C)
    - 자바스크립트가 이용하는 것 = DOM 구조.
    - 자바스크립트 활용 방법
      (1) 마우스효과, 클릭효과, 키보드효과 등
      (2) 효율적인 문서작업
      (3) 더 시각적이고 섬세한 브라우저 제작 가능 등.

  2) DOM Tree : 웹 문서가 DOM으로 표현되는 방법
    - 모든 [요소]들 = [객체] 형태 -> 자바스크립트를 사용하여 접근 가능
      // 💬요소 = 부모 요소 + 자식 요소
      // 💬객체 = 변수 하나에 다양한 정보를 담기 위해 사용하는 복합 자료형
    - 노드(웹문서 요소 속성) + 가지(연결관계)로 표현
    - HTML 요소 뿐만 아니라 텍스트, 이미지, 주석까지 html에 입력되어있는 모든 것을 자식으로 간주  

        ex] html에서의 최상위요소(부모요소) ~ 하위요소(자식요소) : 
          <!DOCTYPE html> 
          <html>
            <head>
              <title>My title</title>
            </head>
            <body>
              <h1>This is heading</h1>
              <a href ="This is Link"></a> 
            </body>
          </html>
        ->  DOCTYPE -     html     - head,body  - title,h1,a - "My title", "This is heading", "This is Link" 
          (document - root element -  element   -   element  -    text,         text,            attribute) 
          - root element : 다른 요소 노드들의 시작점
          - 관계 (1) head 노드의 부모 노드 : html 노드
                 (2) head 노드의 자식 노드 : title 노드
    3) DOM 정의
     - 객체 지향 모델로써 구조화된 문서를 표현하는 형식.
     - 자바스크립트는 DOM Tree 구조르 이용하여 웹 문서요소 조작 가능

2.BOM(Browser Object Medelling) : 브라우저 객체 모델
  - 자바스크립트로 관리 가능하게 브라우저 요소를 객체화

  1) 브라우저 내장 객체
      Window   -    Document   -       History      -            Location               -             Navigator             -        Screen
    브라우저 창 - HTML 문서 객체 - 방문 기록 저장 객체 - 현 페이지의 URL정보 가지고 있는 객체 - 웹 브라우저 정보를 가지고 있는 객체 - 화면 정보를 다루는 객체
  2) Window 객체 함수
    - 브라우저 창 정보 불러오기/변경하기
    - 객체 이름 + . 

        ex] window.innerWidth



🖱 자바스크립트 경고창 만들기

1. <body> 안 해당 태그 밑에 다음과 같이 입력.
    1) <script></script>
    2) <script>
	alert(" ");
      </script>
          1) 👇경고창을 나타나게 해주는 함수 alert()	
    이 때, alert(" ");  👈 3) 세미콜론 꼭 붙이기
              2) ☝경고창에 나타날 문구 쓰기  
2. 
