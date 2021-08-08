$('ul li a').click(function(e){
    e.preventDefault()
})
$('.menu-one *[data-target]').click(function(){
    $('*[data-target]').removeClass('active');
    var id = $(this).attr('data-target');
    $('#' + id).toggleClass('active');
    $(this).toggleClass('clicked');
    if(window.pageYOffset == 0){
        if($('#' + id).hasClass('active')){
            $('*[class *= menu-one] , *[class *= menu-two] , .logo-box').addClass('active');   
        }else{
            $('*[class *= menu-one] , *[class *= menu-two] , .logo-box').removeClass('active');
        }
    }
})

$('.menu-two *[data-target]').click(function(){
    $('*[data-target]').removeClass('active');

    var id = $(this).attr('data-target');
    $('#' + id).toggleClass('active');
})





// scroll menu back 

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("head-menu").style.top = "0";
    $('.logo-box svg').css('fill', '#fff');
    document.getElementById("head-menu").style.background = "#fff"
    $('*[class *= menu-one] , *[class *= menu-two]').addClass('active');
    document.querySelector('.logo-box svg').style.filter = "invert(1)"

  } else {
    document.getElementById("head-menu").style.top = "-150px";
    document.getElementById("head-menu").style.background = "transparent"
    $('*[class *= menu-one] , *[class *= menu-two]').removeClass('active');
    document.querySelector('.logo-box svg').style.filter = "invert(0)"

  }
  prevScrollpos = currentScrollPos;

  if(window.pageYOffset == 0){    
    document.getElementById("head-menu").style.background = "transparent"
    $('*[class *= menu-one] , *[class *= menu-two]').removeClass('active');
    document.querySelector('.logo-box svg').style.filter = "invert(0)"
  }
}


