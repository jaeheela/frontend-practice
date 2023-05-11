//data.js 파일에서 questions 사용하겠다 선언
import { questions } from './data.js';



const progressValueEl = document.querySelector(".progress .value");
const numberEl = document.querySelector(".number");
const questionEl = document.querySelector(".question");
const choice1El = document.querySelector(".choice1");
const choice2El = document.querySelector(".choice2");

let currentNumber = 0; //number, 현재 질문의 번호를 담는 변수
let mbti = ""; //string, 결과를 담는 변수  ex) estp


//질문 출력 + progress바 너비 변경하는 함수 
function renderQuestion() {
    const question = questions[currentNumber]; //
    numberEl.innerHTML = question.number; //ex. '01'
    questionEl.innerHTML = question.question; //ex. '곧 크리스마스! 회사에서 크리스마스 파티 스텝을 모집한다는데?'
    choice1El.innerHTML = question.choices[0].text; //ex. '파티 스텝은 못하지ㅎ...<br>(그래도 파티는 재밌겠다 히히)'
    choice2El.innerHTML = question.choices[1].text; //ex. '재밌겠다!<br>○○한테 같이 지원하자고 해야지~'
    progressValueEl.style.width = (currentNumber + 1) * 10 + '%';
}
renderQuestion();


//mbti 값을 담고
// 다음 페이지 출력을 위한 currentNumber 1 증가 + renderQuestion() 호출하는 함수
function nextQuestion(choiceNumber) {
    //questions.length만큼 질문 질문이 다 끝났다면 결과로 넘어가고 함수 종료
    if (currentNumber == questions.length - 1) {
        showResultPage();
        return;
    }
    const question = questions[currentNumber]; //
    mbti = mbti + question.choices[choiceNumber].value; //ex. 'i'
    //mbti = '' + 'i' + 'n' + 'f' + 'j'
    currentNumber = currentNumber + 1;
    renderQuestion();
}

//결과페이지를 이동하는 함수
function showResultPage(params) {
    location.href = '/results.html?mbti=' + mbti; //쿼리스트링 
}


//choice1El을 클릭했을 때 실행될 이벤트
choice1El.addEventListener('click', function () {
    nextQuestion(0); //question.choices[0].text 선택하여 question.choices[0].value 값이 담김
});

//choice2El을 클릭했을 때 실행될 이벤트
choice2El.addEventListener('click', function () {
    nextQuestion(1); //question.choices[1].text 선택하여 question.choices[1].value 값이 담김
});

