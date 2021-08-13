//  append menu-item ul in menu item mobile section
$('.menu-one .navbar-nav .nav-item').each((i, val) => {
  var id = $(val).children('a').data('target');
  $('#' + id + ' .list-group').clone().appendTo($(val));

})


$('ul li a').click(function(e){
    e.preventDefault()
})
$('.menu-one *[data-target]').click(function(){
    $('*[data-target]').removeClass('active');
    var id = $(this).attr('data-target');
    $('#' + id).toggleClass('active');
    $('body').toggleClass('hide')
    $(this).toggleClass('clicked');
    var imageSrc = document.querySelector('#'+id+" ul li").getAttribute('data-src');
    $('#' + id + ' .current-image').css('background', `url(${imageSrc})`);
    $('#' + id + ' .current-image').css('transform', `translate(0, 0)`) 
    $('#' + id + ' .preve-image').css('background', `none`);

    gsap.fromTo('#' + id + ' .img-box-hover', {opacity:0}, {opacity:1, duration:0.5, delay:1})
    gsap.fromTo('#' + id + ' .content-box', {opacity:0}, {opacity:1, duration:0.5, delay:1})
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
    // document.querySelector('.logo-box svg').style.filter = "invert(1)"

  } else {
    document.getElementById("head-menu").style.top = "-150px";
    document.getElementById("head-menu").style.background = "transparent"
    $('*[class *= menu-one] , *[class *= menu-two]').removeClass('active');
    // document.querySelector('.logo-box svg').style.filter = "invert(0)"

  }
  prevScrollpos = currentScrollPos;

  if(window.pageYOffset == 0){    
    document.getElementById("head-menu").style.background = "transparent"
    $('*[class *= menu-one] , *[class *= menu-two]').removeClass('active');
    // document.querySelector('.logo-box svg').style.filter = "invert(0)"
  }
}




var currentImage = null, preveImage = null, randone = {x:0,y:0}, preveRand = {x:0,y:0}
//  image animation style
$('.menu-items-row ul li').on('mouseover', function(){
  var randXone = randomBetween(-50, 50), randYone = randomBetween(-50, 50);
  preveImage = currentImage || document.querySelector('.menu-items-row ul li').getAttribute('data-src'), preveRand = randone
  randone = {x:randXone , y:randYone }
  var imageSrc = $(this).attr('data-src');

  currentImage = imageSrc
  
  $('.current-image').css('background', `url(${imageSrc})`);
  $('.preve-image').css('background', `url(${preveImage})`);

  $('.current-image').css('transform', `translate(${randone.x}px, ${randone.y}px)`)
  $('.preve-image').css('transform', `translate(${preveRand.x + 5}px, ${preveRand.y + 5}px) rotate(${randone.x / 4}deg)`)
})


$('.button-close.en').click(() => {
  $('#enquery').removeClass('active')
})

$('.enquery-from .row label').click((e) => {
  var input = e.target.nextSibling.nextSibling;
  input.placeholder = input.getAttribute('data-placeholder')
  input.focus()
  e.target.classList.toggle('active')
})
$('.enquery-from .row input, .enquery-from .row texarea').on('focusout', (e)=>{
  if(e.target.value.length == 0){
    e.target.previousSibling.previousSibling.classList.remove('active')
  }else{
    e.target.previousSibling.previousSibling.classList.add('active')
  }
  e.target.placeholder = ""
})









// menu on mobile

$('.nav-toggle').click(() =>{
  $('.menus').toggleClass('active');
  $('.nav-toggle').toggleClass('active');
})











function randomBetween(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);

}



