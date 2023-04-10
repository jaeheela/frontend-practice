//메인 영역의 텍스트 타이핑 효과
//화면에 보여 줄 텍스트 데이터를 배열로 저장 후 일정시간마다 반복 호출
(function () {
  //1.
  //자바스크립트 코드로 텍스트에 작성할 span 요소 노드 가져오기
  const spanEl = document.querySelector("main h2 span");  
  
  //2.
 //작성할 문장을 배열로 정의해 txtArr 변수에 할당하기
  const txtArr = ["Front-End Developer", "Back-End Developer", "Full-Stack"];

  //3.
  //인덱스의 초깃값을 index 변수에 할당하기
  let index = 0;
  let currentTxt = [];

  for (index = 0; index < txtArr.length; index++) {
    currentTxt = txtArr[index].split("");

    //writeTxt()함수만들기
    function writeTxt() {
      spanEl.textContent += currentTxt.shift();

      if (currentTxt.length !== 0) {
        setTimeout(writeTxt, 200);
      } else {
        currentTxt = spanEl.textContent.split("");
        setTimeout(deleteTxt, 1000);
      }
    }

    //deleteTxt()함수만들기
    function deleteTxt() {
      currentTxt.pop();
      spanEl.textContent = currentTxt.join("");
      if (currentTxt.length !== 0) {
        setTimeout(deleteTxt, 100);
      } else {
        index = (index + 1) % txtArr.length;
        currentTxt = txtArr[index].split("");
        writeTxt();
      }
    }
  }
  writeTxt();
})();




//헤더 영역의 디자인 변경 효과
//웹브라우저를 스크롤하면 헤더 영역에 새로운 클래스를 추가해 디자인 변경
//수직 스크롤이 발생하면 header 태그에 active 클래스 추가 및 삭제
/*
const headerEl = document.querySelector("header");
window.addEventListener("scroll", function () {
  const browserScrollY = window.pageYOffset;
  if (browserScrollY > 0) {
    headerEl.classList.add("active");
  } else {
    headerEl.classList.remove("active");
  }
});
*/

const headerEl = document.querySelector("header");
window.addEventListener("scroll", function () {
  this.requestAnimationFrame(scrollCheck);
});

function scrollCheck() {
  let browserScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
  if (browserScrollY > 0) {
    headerEl.classList.add("active");
  } else {
    headerEl.classList.remove("active");
  }
}




//스크롤 이동 효과
//헤더 메뉴를 클릭하면 페이지 내부의 다른 영역으로 부드럽게 스크롤 이동
const animationMove = function (selector) {
  const targetEl = document.querySelector(selector);
  const browserScrollY = window.pageYOffset;
  const targetScrollY = targetEl.getBoundingClientRect().top + browserScrollY;
  window.scrollTo({ top: targetScrollY, behavior: "smooth" });
};

const scrollMoveEl = document.querySelectorAll(
  "[data-animation-scroll='true']"
);

for (let i = 0; i < scrollMoveEl.length; i++) {
  scrollMoveEl[i].addEventListener("click", function (e) {
    const target = this.dataset.target;
    animationMove(target);
  });
}


