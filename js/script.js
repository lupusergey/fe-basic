$('.burger').click(function () {
    $(this).toggleClass('active');
    $('.nav').toggleClass('active');
})
$('.close').click(function () {
    $('.nav').toggleClass('active');
    $('.close').removeClass('active');
})