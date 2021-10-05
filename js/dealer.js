// 显示出滚动条的样式
$('.dealer-list-container').hover(function() {
    $('.ps__scrollbar-y-rail').css({
        'display': 'block',
        'height': 318
    });
    $('.ps__scrollbar-y').css('height', 57)
}, function() {
    $('.ps__scrollbar-y-rail').css({
        'display': 'none',
        // 'height': 318
    });
});
// 在内容区域的滚动效果
$('.dealer-list-inner').on('mousewheel', function(e) {
    e.preventDefault();
    var e = window.event || e;
    $(this).css('top', $(this).position().top + e.wheelDelta);
    // 判断上滚还是下滚
    if (e.wheelDelta < 0) {
        $('.ps__scrollbar-y').css('top', $('.ps__scrollbar-y').position().top + 24);
        // 判断滚动条的位置：到底即停
        if ($('.ps__scrollbar-y').position().top > 261) {
            $('.ps__scrollbar-y').css('top', 261);
        }
    } else {
        $('.ps__scrollbar-y').css('top', $('.ps__scrollbar-y').position().top - 24);
        // 判断滚动条的位置：到顶即停
        if ($('.ps__scrollbar-y').position().top < 0) {
            $('.ps__scrollbar-y').css('top', 0);
        }
    }
    // 回滚到顶部时，定在第一条数据那里
    if ($(this).position().top > 0) {
        $(this).css('top', 0);
    }
    // 滚动到底部时，定在最后一条数据那里
    if ($(this).position().top < -1200) {
        $(this).css('top', -1240);
    }
    // 设置滚动条的样式
});