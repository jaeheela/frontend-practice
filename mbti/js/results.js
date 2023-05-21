import { results, mbtis } from './data.js';

//http://127.0.0.1:5500/results.html?mbti=isfj
//자바스크립트로 쿼리스트링 값 가져오는 방법 
const mbti = new URLSearchParams(location.search).get('mbti');
//console.log("mbti = " + mbti); //mbti = isfj

const result = results[mbtis[mbti]];
//console.log(results[mbtis[mbti]]);
const titileEl = document.querySelector(".page-title");
const characterEl = document.querySelector(".character");
const boxEls = document.querySelectorAll(".box");
const jobEls = document.querySelectorAll(".job");
const lectureEl = document.querySelector(".lecture");
const lectureImgEl = document.querySelector(".lecture img");
//console.log("titileEl =" + titileEl);
//console.log("characterEl =" + characterEl);
//console.log("boxEls =" + boxEls);
//console.log("jobEls =" + jobEls);
//console.log("lectureEl =" + lectureEl);
//console.log("lectureImgEl =" + lectureImgEl);



titileEl.innerHTML = result.title;

//characterEl.setAttribute("src", result.character);
characterEl.src = result.character;

//boxEls[0].innerHTML = result.results[0];
//boxEls[1].innerHTML = result.results[1];
//boxEls[2].innerHTML = result.results[2];
//boxEls[3].innerHTML = result.results[3];
boxEls.forEach((element, index) => {
    element.innerHTML = result.results[index];
});

//jobEls[0].innerHTML = result.jobs[0];
//jobEls[1].innerHTML = result.jobs[1];
jobEls.forEach((element, index) => {
    element.innerHTML = result.jobs[index];
});

lectureEl.href = result.lectureUrl;
lectureImgEl.src = result.lectureImg;