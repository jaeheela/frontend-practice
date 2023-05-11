'use strict';

//클릭 이벤트 발생 시 토글 기능
const moreBtn = document.querySelector('.info .metadata .titleAndButton .moreBtn');
const title = document.querySelector('.info .metadata .titleAndButton .title');

moreBtn.addEventListener('click',() => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});
