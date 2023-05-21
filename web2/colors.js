//서로 연관된 함수와 변수를 정리정돈하는 수납상자에 넣기 - 겍체
var Links = {
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

var Body = {
  setColor: function (color) {
    //document.querySelector('body').style.color = color;
    $('body').css('color', color); //제이쿼리 이용
  },
  setBackgroundColor: function (color) {
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color); //제이쿼리 이용
  }
}

function nightDayHandler(self) {
  var target = document.querySelector('body');
  if (self.value === 'night') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';
    Links.setColor('white');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';
    Links.setColor('blue');
  }
}
