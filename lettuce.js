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


function beingLettuce(){
  location.replace('./go-west-final/index.html');
}


function enterPage(){
  location.replace('./lettuce.html');
}

function goIntro(link){
  location.replace(link);
}



