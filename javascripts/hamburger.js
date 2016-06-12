$('.header-hamburger').click(() => {
  $('.header-hamburger').toggleClass('is-active');

  if ($('.header-hamburger').hasClass('is-active')) {
    // $('.header-menu').css("display", "block");
    $('.header-menu').addClass('is-shown');
    $('.header-search-wrap').insertBefore('.header-user-options-account');
  } else {
    // $('.header-menu').css("display", "none");
    $('.header-menu').removeClass('is-shown');
  }
})
