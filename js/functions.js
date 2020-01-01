jQuery(document).ready( function($){
    
    //for toggle
    $('#menu-trigger').click(function(){
        $('.menu > .main-menu').slideToggle();
    });

    //for load resize scroll 
    $(window).on("load resize scroll",function(){
        var windowWidth = $(window).width();
        
        if ( (windowWidth + 17) > 760 ) {
            $('.menu > .main-menu').css('display', 'block');
        } else {
            $('.menu > .main-menu').css('display', 'none');
        }  
    });

    //for slider auto play
    initSlider();
});
function initSlider(){
    $('.autoplay').slick({
        ots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500
      });
}