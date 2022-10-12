$(document).ready(function () {
    let header = $('.header');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            header.addClass('header--active')
        } else {
            header.removeClass('header--active')
        }
    });
    let introImgTop = $('.intro-img__top');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            introImgTop.addClass('intro-img__top--active')
        } else {
            introImgTop.removeClass('intro-img__top--active')
        }
    });
    let logo = $('.logo');
    logo.on('click', function () {
        $('body, html').animate({
            scrollTop: 0
        }, 80);
        return false;
    });
});