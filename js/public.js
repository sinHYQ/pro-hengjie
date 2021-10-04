// 当鼠标移入到三杠的时候
$(".assistant-switch img").hover(function(){
    $(this).attr("src", "../images/icon-assistant-close.jpg");
    $(".assistant-switch-none").css('display','block');
},function(){
  $(".assistant-switch img").attr("src", "../images/icon-assistant-open.jpg");
  $(".assistant-switch-none").css("display", "none");
});
$(".assistant-switch-none").hover(function(){
   $(".assistant-switch img").attr("src", "../images/icon-assistant-close.jpg");
   $(".assistant-switch-none").css("display", "block");
},function(){
    $(".assistant-switch img").attr("src", "../images/icon-assistant-open.jpg");
    $(this).css('display','none');
});

// 头部隐藏栏
// 明星系列
$(".starXi").hover(function(){
    $(".docker-container1-pa").css({
        transition:'all 0.3s linear',
        height:'70px',
    })
    $(".docker-container1").css({
      transition: "all 0.3s linear",
      height: "70px"
    });
    $(this).parents(".theme-dark").addClass("theme-dark-active");
    $(this).parents(".theme-bright").addClass("theme-dark-active");
},function(){
   console.log(1);
   $(".docker-container1-pa").css({
     transition: "all 0.3s linear",
     height: "0px",
   });
   $(".docker-container1").css({
     transition: "all 0.3s linear",
     height: "0px"
   });
   $(this).parents(".theme-dark").removeClass("theme-dark-active");
    $(this).parents(".theme-bright").removeClass("theme-dark-active");
})
$('.docker-container1').hover(function(){
    console.log(1);
     $(".docker-container1-pa").css({
       transition: "all 0.3s linear",
       height: "70px",
     });
     $(".docker-container1").css({
       transition: "all 0.3s linear",
       height: "70px"
     });
     $(this).parents(".theme-dark").addClass("theme-dark-active");
    $(this).parents(".theme-bright").addClass("theme-dark-active");

},function(){
     $(".docker-container1-pa").css({
       transition: "all 0.3s linear",
       height: "0px"
     });
     $(".docker-container1").css({
       transition: "all 0.3s linear",
       height: "0px"
     });
     $(this).parents(".theme-dark").removeClass("theme-dark-active");
    $(this).parents(".theme-bright").removeClass("theme-dark-active");

})
// 产品一览隐藏栏
$(".proXi").hover(function(){
    $(".docker-container2-pa").css({
      transition: "all 0.3s linear",
      height: "260px",
    });
    $(".docker-container2").css({
      transition: "all 0.3s linear",
      height: "260px"
    });
    $(this).parents(".theme-dark").addClass("theme-dark-active");
    $(this).parents(".theme-bright").addClass("theme-dark-active");

},function(){
   $(".docker-container2-pa").css({
     transition: "all 0.3s linear",
     height: "0px"
   });
   $(".docker-container2").css({
     transition: "all 0.3s linear",
     height: "0px"
   });
   $(this).parents(".theme-dark").removeClass("theme-dark-active");
    $(this).parents(".theme-bright").removeClass("theme-dark-active");

})
$('.docker-container2').hover(function(){
    $(".docker-container2-pa").css({
      transition: "all 0.3s linear",
      height: "260px",
    });
    $(".docker-container2").css({
      transition: "all 0.3s linear",
      height: "260px"
    });
    $(this).parents(".theme-dark").addClass("theme-dark-active");
    $(this).parents(".theme-bright").addClass("theme-dark-active");

},function(){
     $(".docker-container2-pa").css({
       transition: "all 0.3s linear",
       height: "0px"
     });
     $(".docker-container2").css({
       transition: "all 0.3s linear",
       height: "0px"
     });
     $(this).parents(".theme-dark").removeClass("theme-dark-active");
    $(this).parents(".theme-bright").removeClass("theme-dark-active");

})
// 技术服务隐藏栏


$(".supXi").hover(
  function () {
    $(".docker-container3-pa").css({
      transition: "all 0.3s linear",
      height: "70px",
    });
    $(".docker-container3").css({
      transition: "all 0.3s linear",
      height: "70px"
    });
    $(this).parents(".theme-dark").addClass("theme-dark-active");
    $(this).parents(".theme-bright").addClass("theme-dark-active");

  },
  function () {
    $(".docker-container3-pa").css({
      transition: "all 0.3s linear",
      height: "0px"
    });
    $(".docker-container3").css({
      transition: "all 0.3s linear",
      height: "0px"
    });
    $(this).parents(".theme-dark").removeClass("theme-dark-active");
    $(this).parents(".theme-bright").removeClass("theme-dark-active");

  }
);
$(".docker-container3").hover(
  function () {
    $(".docker-container3-pa").css({
      transition: "all 0.3s linear",
      height: "70px",
    });
    $(".docker-container3").css({
      transition: "all 0.3s linear",
      height: "70px"
    });
    $(this).parents(".theme-dark").addClass("theme-dark-active");
    $(this).parents(".theme-bright").addClass("theme-dark-active");

  },
  function () {
    $(".docker-container3-pa").css({
      transition: "all 0.3s linear",
      height: "0px"
    });
    $(".docker-container3").css({
      transition: "all 0.3s linear",
      height: "0px"
    });
    $(this).parents(".theme-dark").removeClass("theme-dark-active");
    $(this).parents(".theme-bright").removeClass("theme-dark-active");

  }
);

// 返回顶部
$(window).scroll(function(){
  console.log($(this).scrollTop())
  if($(this).scrollTop()>80){
    $(".go-top").addClass('show');
  }
  else{
    $(".go-top").removeClass("show");
  }
})
$(".go-top").click(function(){
  $('html').animate({
    scrollTop:0
  },1000);
})


// 当我鼠标移到尾部的微信图标时，二维码出现
$(".social-wechat>a").hover(function(){
  $(this).next().slideDown(800);
},function(){
  $(this).next().hide(800);
})

