// gnb 버튼
$('.header_gnb').slick({
    arrows: false,
    dots: false,
    infinite: false,
    slidesToShow: 1,
    variableWidth: true
});

// 메인 슬라이드
$('.slideBn').slick({
    speed : 1500,
    autoplay : true,
    autoplaySpeed : 7000,
    dots : true,
    arrows : false,
    appendDots : '.sBn_pager',
});

// 카테고리 슬라이드
$('.pro_show .show_box').slick({
    arrows : false,
    dots : false,
    slidesToShow : 3,
});
$('.pro_btn li').click(function(){
    let i = $(this).index();
    $('.pro_btn li').removeClass('on');
    $(this).addClass('on');
    $('.pro_show .show_box').removeClass('on');
    $('.pro_show .show_box').eq(i).addClass('on');
    $('.pro_show .show_box').slick('setPosition');
    return false;
});

// 서브배너 슬라이드
$('.subBn_slide').slick({
    arrows : false,
    dots : true,
    appendDots : '.subBn_pager',
    customPaging : function(slider, i){
        return (i + 1) + '/' + slider.slideCount;
    }
});

// BEST,NEW 상품 슬라이드
$('.buy_list').slick({
    arrows: false,
    dots: false,
    infinite: false,
    slidesToShow: 2,
});