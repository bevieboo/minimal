$('.header-hamburger').click(() => {
  $('.header-hamburger').toggleClass('is-active');

  if ($('.header-hamburger').hasClass('is-active')) {
    $('.header-menu').css("display", "block");
    $('.header-search-wrap').insertBefore('.header-user-options-account')
  } else {
    $('.header-menu').css("display", "none");
  }
})
