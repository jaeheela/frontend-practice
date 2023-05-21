//서로 연관된 함수와 변수를 정리정돈하는 수납상자에 넣기 - 겍체
const Links = {
  setColor: function (color) {
    /*
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
       alist[i].style.color = color;
       i = i + 1;
     }
    */
    $('a').css('color', color); //제이쿼리 이용
  }
}

const Body = {
  setColor: function (color) {
    //document.querySelector('body').style.color = color;
    $('body').css('color', color); //제이쿼리 이용
  },
  setBackgroundColor: function (color) {
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color); //제이쿼리 이용
  }
}

const input = document.getElementsByTagName("input");
function nightDayHandler(event) {
  if (event.value === 'night') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    event.value = 'day';
    Links.setColor('white');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    event.value = 'night';
    Links.setColor('blue');
  }
}
