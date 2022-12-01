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

$('#star').click(function(e){
  let star = $('#star');
  let xBtn = $('#xBtn');
  let msg = $('#messege');

  star.addClass('transparent');
  xBtn.removeClass('transparent');
  msg.removeClass('transparent');
});

$('#xBtn').click(function(e){
  let star = $('#star');
  let xBtn = $('#xBtn');
  let msg = $('#messege');

  star.removeClass('transparent');
  xBtn.addClass('transparent');
  msg.addClass('transparent');
})



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

function goIntro(){
  location.replace('./lettuceIntro.html');
}

function goImages(){
  location.replace('../lettuceimages.html')
}


