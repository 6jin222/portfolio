// 메인 네비게이션
$('.d1').mouseover(function(){
    let i = $(this).index();
    $('.sub').removeClass('on');
    $('.sub').eq(i).addClass('on');
    $('.gnb').stop().animate({
        height : 150
    });
    $('.subBg').stop().slideDown();

}).mouseout(function(){
    $('.gnb').stop().animate({
        height : 40
    });
    $('.subBg').stop().slideUp();
});

// 메인 슬라이드
$('.ms_in').slick({
    speed : 1500,
    autoplay : true,
    autoplaySpeed : 7000,
    arrows : true,
    dots : true,
    appendDots : '.ms_pager',
    prevArrow : '.ms_prev',
    nextArrow : '.ms_next',
});

$('.ms_stop').click(function(){
    $('.ms_in').slick('slickPause');
    $(this).hide();
    $('.ms_play').show();
});

$('.ms_play').click(function(){
    $('.ms_in').slick('slickPlay');
    $(this).hide();
    $('.ms_stop').show();
});

// 탑 버튼
$(window).scroll(function(){
    let sct = $(this).scrollTop();
    if(sct < 1200){
        $('.btn_top').fadeOut();
    } else {
        $('.btn_top').fadeIn();
    }
});

$('.btn_top').click(function(){
    $('html, body').stop().animate({
        scrollTop : 0
    });
});

// 제품 리스트
$('.product_btn li').click(function(){
    let i = $(this).index();
    $('.product_btn li').removeClass('on');
    $(this).addClass('on')
    $('.product_box').removeClass('on');
    $('.product_box').eq(i).addClass('on');
});

// 인스타
$('.insta_list').slick({
    slidesToShow : 3,
    slidesToScroll : 1,
    centerMode : true,
    centerPadding : '10px',
    prevArrow : '.insta_prev',
    nextArrow : '.insta_next',
});

