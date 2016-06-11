$('.header-hamburger').click(() => {
  $('.header-hamburger').toggleClass('is-active');

  if ($('.header-hamburger').hasClass('is-active')) {
    $('.header-menu').css("display", "block");
  }
})
