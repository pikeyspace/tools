$(function() {
    $('.burger').on('click', function() {
        $(this).toggleClass('active');
        $('body').toggleClass('stop-scroll');
        $('.menu').toggleClass('visible');
    })
    $('.menu-link, .menu-list').on('click', function() {
        $('.burger').removeClass('active');
        $('.menu').removeClass('visible');
    })
})