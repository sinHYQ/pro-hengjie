// 智能一体机---hover效果
var index = 0;
$('.toggle-con-z>li').hover(function() {
    index = $(this).index();
    $(this).children('ul').stop().slideDown('');
    $(this).find('img').attr('src', 'images/' + (index + 1) + '-on-z.png');
    $(this).find('a span').css('color', '#1a355e');
}, function() {
    $(this).children('ul').css('display', 'none');
    $(this).find('img').attr('src', 'images/' + (index + 1) + '-z.png');
    $(this).find('a span').css('color', '#424242');
});
// 当鼠标往下移时，显示顶部的智能一体机
$(window).scroll(function() {
    if ($(window).scrollTop() >= 567) {
        $('.intelligent-z').addClass('is-scroll-z');
        $('.product-z').addClass('align-scroll-z');
    } else {
        $('.intelligent-z').removeClass('is-scroll-z');
        $('.product-z').removeClass('align-scroll-z');
    }
});
// 蒙版出现消失
$('.product-board-z .col-md-6').hover(function() {
    $(this).find('.mask-z').stop().fadeIn();
}, function() {
    $(this).find('.mask-z').stop().fadeOut();
});
// 恒洁技术
$('.recommend-z .mask-z').hover(function() {
    $(this).css('opacity', '0');
}, function() {
    $(this).css('opacity', '0.8');
});