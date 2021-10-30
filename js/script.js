const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    slidesPerView: 3,
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__nav,.sidebar__body').toggleClass('active');
        $('.content>section').toggleClass('menu');

    });

    $('.hn-01').click(function (event) {
        $('.main').addClass('active');
        $('.works').removeClass('active');
        $('.about').removeClass('active');
        $('.contact').removeClass('active');
        $('.hireus').removeClass('active');
        $('.sn-01').removeClass('none');
        $('.sn-02').addClass('none');
        $('.sn-03').addClass('none');
        $('.sn-04').addClass('none');
        $('.sn-05').addClass('none');
        $('.hn-01').removeClass('line');
        $('.hn-02').addClass('line');
        $('.hn-03').addClass('line');
        $('.hn-04').addClass('line');
        $('.hn-05').addClass('line');
        $('.header__link').addClass('none');





    });

    $('.hn-02').click(function (event) {
        $('.works').addClass('active');
        $('.main').removeClass('active');
        $('.about').removeClass('active');
        $('.contact').removeClass('active');
        $('.hireus').removeClass('active');
        $('.sn-02').removeClass('none');
        $('.sn-01').addClass('none');
        $('.sn-03').addClass('none');
        $('.sn-04').addClass('none');
        $('.sn-05').addClass('none');
        $('.hn-02').removeClass('line');
        $('.hn-01').addClass('line');
        $('.hn-03').addClass('line');
        $('.hn-04').addClass('line');
        $('.hn-05').addClass('line');
        $('.header__link').removeClass('none');


    });

    $('.hn-03').click(function (event) {
        $('.about').addClass('active');
        $('.main').removeClass('active');
        $('.works').removeClass('active');
        $('.contact').removeClass('active');
        $('.hireus').removeClass('active');
        $('.sn-03').removeClass('none');
        $('.sn-02').addClass('none');
        $('.sn-01').addClass('none');
        $('.sn-04').addClass('none');
        $('.sn-05').addClass('none');
        $('.hn-03').removeClass('line');
        $('.hn-02').addClass('line');
        $('.hn-01').addClass('line');
        $('.hn-04').addClass('line');
        $('.hn-05').addClass('line');
        $('.header__link').removeClass('none');



    });

    $('.hn-04').click(function (event) {
        $('.contact').addClass('active');
        $('.main').removeClass('active');
        $('.works').removeClass('active');
        $('.about').removeClass('active');
        $('.hireus').removeClass('active');
        $('.sn-04').removeClass('none');
        $('.sn-02').addClass('none');
        $('.sn-03').addClass('none');
        $('.sn-01').addClass('none');
        $('.sn-05').addClass('none');
        $('.hn-04').removeClass('line');
        $('.hn-02').addClass('line');
        $('.hn-03').addClass('line');
        $('.hn-01').addClass('line');
        $('.hn-05').addClass('line');
        $('.header__link').removeClass('none');


    });

    $('.hn-05,.header__link,.main__body-btn,.about__btn').click(function (event) {
        $('.hireus').addClass('active');
        $('.main').removeClass('active');
        $('.works').removeClass('active');
        $('.about').removeClass('active');
        $('.contact').removeClass('active');
        $('.sn-05').removeClass('none');
        $('.sn-02').addClass('none');
        $('.sn-03').addClass('none');
        $('.sn-04').addClass('none');
        $('.sn-01').addClass('none');
        $('.hn-05').removeClass('line');
        $('.hn-02').addClass('line');
        $('.hn-03').addClass('line');
        $('.hn-04').addClass('line');
        $('.hn-01').addClass('line');
        $('.header__link').removeClass('none');


    });

    $('.ic-01').click(function (event) {
        $('.ic-01').toggleClass('active');
    });

    $('.ic-02').click(function (event) {
        $('.ic-02').toggleClass('active');
    });

    $('.ic-03').click(function (event) {
        $('.ic-03').toggleClass('active');
    });

    $('.ic-04').click(function (event) {
        $('.ic-04').toggleClass('active');
    });

    $('.ic-05').click(function (event) {
        $('.ic-05').toggleClass('active');
    });

    $('.ic-06').click(function (event) {
        $('.ic-06').toggleClass('active');
    });


});