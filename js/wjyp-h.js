// 当视频被点击时候，出现蒙版与视频播放，关闭按钮
$(".play").click(function () {
  // 视频区域出现
  $(this).parents(".container2").next().addClass("show");
  $(this).parents(".container2").next().find(".close").css("display", "block");
  $(this).parents(".container2").next().find(".video1").css("display", "block");
  $(this).parents(".container2").next().find(".video2").css("display", "none");
  $(this).parents(".container2").next().find(".video3").css("display", "none");
  $(this).parents(".container2").next().find(".video4").css("display", "none");
  $(this).parents(".container2").next().find(".video5").css("display", "none");
});

$(".poster1").click(function () {
  $(this).parents(".container2").next().addClass("show");
  $(this).parents(".container2").next().find(".close").css("display", "block");
  $(this).parents(".container2").next().find(".video2").css("display", "block");
   $(this).parents(".container2").next().find(".video1").css("display", "none");
   $(this).parents(".container2").next().find(".video3").css("display", "none");
   $(this).parents(".container2").next().find(".video4").css("display", "none");
   $(this).parents(".container2").next().find(".video5").css("display", "none");
});
$(".poster2").click(function () {
  $(this).parents(".container2").next().addClass("show");
  $(this).parents(".container2").next().find(".close").css("display", "block");
  $(this).parents(".container2").next().find(".video3").css("display", "block");
   $(this).parents(".container2").next().find(".video2").css("display", "none");
   $(this).parents(".container2").next().find(".video1").css("display", "none");
   $(this).parents(".container2").next().find(".video4").css("display", "none");
   $(this).parents(".container2").next().find(".video5").css("display", "none");
});
$(".poster3").click(function () {
  $(this).parents(".container2").next().addClass("show");
  $(this).parents(".container2").next().find(".close").css("display", "block");
  $(this).parents(".container2").next().find(".video4").css("display", "block");
   $(this).parents(".container2").next().find(".video2").css("display", "none");
   $(this).parents(".container2").next().find(".video3").css("display", "none");
   $(this).parents(".container2").next().find(".video1").css("display", "none");
   $(this).parents(".container2").next().find(".video5").css("display", "none");
});
$(".poster5").click(function () {
  $(this).parents(".container2").next().addClass("show");
  $(this).parents(".container2").next().find(".close").css("display", "block");
  $(this).parents(".container2").next().find(".video5").css("display", "block");
  $(this).parents(".container2").next().find(".video2").css("display", "none");
  $(this).parents(".container2").next().find(".video3").css("display", "none");
  $(this).parents(".container2").next().find(".video1").css("display", "none");
  $(this).parents(".container2").next().find(".video4").css("display", "none");
});
// 当点击关闭按钮的时候，视频消失
$(".close").click(function () {
  $(this).parents(".popup").removeClass("show");
});
