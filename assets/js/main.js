$(document).ready(function() {


// Add jQuery here











$(window).scroll(function() {
  if ($(document).scrollTop() > 150) {
    $('.logo').addClass('resizelogo');
    $('.titlebar_wrapper').addClass('resizebg');
    $('.titlebar').addClass('resizemargin');
  } else {
    $('.logo').removeClass('resizelogo');
    $('.titlebar_wrapper').removeClass('resizebg');
    $('.titlebar').removeClass('resizemargin');
  }
});















  });
