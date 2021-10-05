// 轮播图的淡入淡出效果
$('.swiper-pagination-bullet').click(function() {
    $(this).addClass('swiper-pagination-bullet-active').siblings().removeClass('swiper-pagination-bullet-active')
    var aindex = $(this).index();
    $('.swiper-slide').eq(aindex).fadeIn(500);
    $('.swiper-slide').eq(aindex).siblings().fadeOut(500);
});
// 产品的hover效果
$(".toggle-mask").each(function() {
    var a = $(this).find(".mask").eq(0);
    a.hasClass("exclude-height"), $(this).hasClass("disable-animate") || ($(this).hasClass("revert-mask") ? $(this).hover(function() { a.fadeIn() }, function() { a.fadeOut() }) : $(this).hover(function() { a.fadeOut() }, function() { a.fadeIn() }))
});