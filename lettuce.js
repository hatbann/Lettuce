const lettuce = $('#lettuce');

$('button').click(function () {
  lettuce.hasClass('paused') ? getbigger() : getpauased();
});

function getbigger() {
  console.log(true);
  lettuce.addClass('bigger');
  lettuce.removeClass('paused');
}

function getpauased() {
  lettuce.addClass('paused');
  lettuce.removeClass('bigger');
}




/* ***********페이지이동************ */

function enterPage(){
  location.replace('./lettuce1.html');
}

function goLettuce2(){
  location.replace('./lettuce2.html');
}

function beingLettuce(){
  location.replace('./go-west-final/index.html');
}

function goIntro(link){
  location.replace(link);
}



