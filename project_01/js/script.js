// TOP 버튼
$(window).scroll(function(){
    let sct = $(this).scrollTop();
    if(sct < 1500){
        $('.btn_top').fadeOut();
    } else {
        $('.btn_top').fadeIn();
    }
}); 

$('.btn_top').click(function(){
    $('html, body').stop().animate({
        scrollTop : 0
    });
    return false;
});



// 헤더 스크롤 모션
$(window).scroll(function(){
    let sct = $(this).scrollTop();
    if(sct > 400){
        $('#header').css({backgroundColor : 'white'});
    } else {
        $('#header').css({backgroundColor : 'transparent'});
    }
});



// gnb 메뉴
$('.gnb_btn').click(function(){
    $('.gnb_btn').css({
        display : 'none'
    });
    $('.gnb_close').css({
        display : 'block'
    });
    $('.gnb').stop().slideDown();
    $('.gnbBg').stop().slideDown();
});

$('.gnb_close').click(function(){
    $('.gnb_btn').css({
        display : 'block'
    });
    $('.gnb_close').css({
        display : 'none'
    });
    $('.gnb').stop().slideUp();
    $('.gnbBg').stop().slideUp();
});



// 메인2 슬라이더
$('.tec_bnt ul li').click(function(){
    let i = $(this).index();
    $('.tec_bnt ul li').removeClass('active');
    $(this).addClass('active');
    $('.slide').removeClass('active');
    $('.slide').eq(i).addClass('active');
    $('.slide').slick('setPosition');
});

$('.slide').slick({
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});