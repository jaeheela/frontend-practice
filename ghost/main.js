/*  mousemove이벤트객체는 (e)pointevet객체가 옴
pointevet객체는 어느 부분에서 클릭을 발생했는지 알 수 있음
.ghost 에 [positon:absolute]를 적용해서 top:,left: 값이 mousemove에 따라 조정이 됨
즉, .ghost가 따라오는 것처럼 보이게 느껴지는 것 */

document.body.addEventListener('mousemove',function(e){
    console.log(e);
    document.querySelector(".ghost").style.left = e.pageX + 'px';
    document.querySelector(".ghost").style.top = e.pageY + 'px';
});