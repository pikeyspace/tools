$(function() {
    $('.show-modal').on('click', function() {
        $('.modal').removeClass('visually-hidden');
    })
    $('.modal-close').on('click', function() {
        $('.modal').addClass('visually-hidden');
    })
})